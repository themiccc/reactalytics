import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoUrl.trim()) {
      navigate(`/result?url=${encodeURIComponent(videoUrl)}`);
    }
  };

  return (
    <div className="home-container">
      <h1>Video Sentiment Analysis</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit">Analyze Comments</button>
      </form>
    </div>
  );
}

export default Home;
