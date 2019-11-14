import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: nowPlaying }
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming }
        } = await moviesApi.upcoming();
        const {
          data: { results: popular }
        } = await moviesApi.popular();
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError("Can't find movies information.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;
