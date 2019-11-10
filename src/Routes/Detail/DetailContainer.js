import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi } from "api";
import { tvApi } from "api";

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      match: { path }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      season: false,
      create: false,
      collection: false,
      isMovie: path.includes("movie")
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  };

  render() {
    const {
      result,
      season,
      create,
      collection,
      error,
      loading,
      isMovie
    } = this.state;

    const handleSeason = () => {
      if (season === true) {
        this.setState({ season: false });
      } else {
        this.setState({ season: true });
      }
    };

    const handleCollection = () => {
      if (collection === true) {
        this.setState({ collection: false });
      } else {
        this.setState({ collection: true });
      }
    };

    const handleCreatedBy = () => {
      if (create === true) {
        this.setState({ create: false });
      } else {
        this.setState({ create: true });
      }
    };

    return (
      <DetailPresenter
        result={result}
        create={create}
        season={season}
        collection={collection}
        handleCollection={handleCollection}
        isMovie={isMovie}
        handleCreatedBy={handleCreatedBy}
        handleSeason={handleSeason}
        error={error}
        loading={loading}
      />
    );
  }
}
