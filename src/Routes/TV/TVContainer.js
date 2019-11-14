import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: topRated }
        } = await tvApi.topRated();
        const {
          data: { results: popular }
        } = await tvApi.popular();
        const {
          data: { results: airingToday }
        } = await tvApi.airingToday();
        setTopRated(topRated);
        setPopular(popular);
        setAiringToday(airingToday);
      } catch {
        setError("Can't find TV information.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      error={error}
      loading={loading}
    />
  );
};

export default TVContainer;
