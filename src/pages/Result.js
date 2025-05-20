import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../services/api';

const Result = () => {
  const location = useLocation();
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const videoUrl = queryParams.get('url');

  useEffect(() => {
    if (videoUrl) {
      axios
        .get(`/analyze?url=${encodeURIComponent(videoUrl)}`)
        .then((res) => {
          setResultData(res.data);
        })
        .catch((err) => {
          console.error('❌ Error fetching analysis:', err);
          setError('Could not fetch video analysis.');
        });
    }
  }, [videoUrl]);

  if (error) return <p>{error}</p>;
  if (!resultData) return <p>Loading comments...</p>;

  return (
    <div className="result-page">
      <div className="result-wrapper">
        <h1 className="result-heading">Sentiment Analysis Result</h1>
        <p className="result-summary">{resultData.summary}</p>

        <div className="result-stats">
          <p>😊 Positive: {resultData.stats?.positive || 0}</p>
          <p>😐 Neutral: {resultData.stats?.neutral || 0}</p>
          <p>😞 Negative: {resultData.stats?.negative || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;