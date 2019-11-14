import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const updateTerm = event => {
    const {
      target: { value }
    } = event;
    setSearchTerm(value);
  };

  const searchByTerm = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
