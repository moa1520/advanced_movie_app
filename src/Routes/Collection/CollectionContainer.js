import React, { Component } from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collectionApi } from "api";

export default class CollectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true
    };
  }
  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return;
    }
    let result = null;
    try {
      ({ data: result } = await collectionApi.getCollection(parsedId));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  };

  render() {
    const { result, error, loading } = this.state;
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}
