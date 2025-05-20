import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoInput = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!videoUrl.trim()) {
      alert("Please enter a YouTube video URL.");
      return;
    }

    // Optional: validate that it’s a proper YouTube URL
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(videoUrl)) {
      alert("Please enter a valid YouTube URL.");
      return;
    }

    navigate(`/result?url=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        YouTube Comment Sentiment Analyzer 🎯
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Paste YouTube Video URL here"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Analyze Comments
        </button>
      </form>
    </div>
  );
};

export default VideoInput;
