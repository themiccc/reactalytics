const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/analyze', (req, res) => {
  const videoUrl = req.query.url;
  console.log('📺 Analyzing video:', videoUrl);

  // Send mock data immediately
  res.json({
    summary: "This video has mostly positive comments!",
    stats: {
      positive: 62,
      neutral: 26,
      negative: 12
    }
  });
});

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
