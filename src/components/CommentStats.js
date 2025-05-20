import React from 'react';

function CommentStats({ data }) {
  return (
    <div className="stats-container">
      <h2>Comment Stats</h2>
      <p>Positive: {data.positive}</p>
      <p>Negative: {data.negative}</p>
      <p>Neutral: {data.neutral}</p>
    </div>
  );
}

export default CommentStats;
