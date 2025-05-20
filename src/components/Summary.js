import React from 'react';

function Summary({ summary }) {
  return (
    <div className="summary-container">
      <h2>Engagement Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;