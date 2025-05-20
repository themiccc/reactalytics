# Reactalytics – YouTube Comment Sentiment Analyzer

Reactalytics is a real-time sentiment analysis tool for YouTube video comments. It helps users understand audience reactions by classifying comments as Positive, Negative, or Neutral using Natural Language Processing (NLP).

## Features

- Fetches real-time comments from any public YouTube video
- Analyzes comment sentiment using NLP (TextBlob)
- Displays sentiment counts and analysis results clearly
- Built with React (frontend) and Flask (backend)
- Integrated with YouTube Data API v3

## Use Cases

- Content Creators: Understand viewer feedback to improve content
- Marketers: Measure sentiment for product or campaign videos
- Researchers: Analyze public sentiment for studies and reports
- Educators: Demonstrate real-world NLP applications

## Tech Stack

Frontend: React, HTML, CSS, JavaScript  
Backend: Python Flask, TextBlob  
API: YouTube Data API v3  
Tools: Node.js, npm, Git, VS Code

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/themiccc/reactalytics.git
cd reactalytics

shell
Copy code

### 2. Install Frontend Dependencies

cd comment-analysis-frontend
npm install
npm start

nginx
Copy code

Runs the React app at `http://localhost:3000`

### 3. Start the Backend

cd ../comment-analysis-backend
pip install -r requirements.txt
python app.py

nginx
Copy code

Backend will run on `http://localhost:5000`

## YouTube API Key Setup

1. Go to https://console.developers.google.com/
2. Enable the YouTube Data API v3
3. Generate an API key
4. Add your API key to the backend configuration

## Contribution

Contributions are welcome. Please open an issue or submit a pull request for improvements or suggestions.

## License

This project is licensed under the MIT License.

## Author

T Vinay Kumar  
Email: thevinay28@gmail.com  
LinkedIn: https://linkedin.com/in/vinaykumar0306