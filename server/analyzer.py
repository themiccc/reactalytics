from flask import Flask, request, jsonify
from sentiment import extract_video_id, fetch_comments, analyze_sentiments
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route('/api/analyze')
def analyze():
    video_url = request.args.get('url')
    api_key = os.getenv('YOUTUBE_API_KEY')

    video_id = extract_video_id(video_url)
    if not video_id:
        return jsonify({"error": "Invalid video URL"}), 400

    comments = fetch_comments(video_id, api_key)
    if not comments:
        return jsonify({"error": "No comments found"}), 404

    stats = analyze_sentiments(comments)
    total = sum(stats.values())

    if total == 0:
        summary = "No significant data found."
    elif stats["positive"] > stats["negative"]:
        summary = "This video has mostly positive comments!"
    elif stats["negative"] > stats["positive"]:
        summary = "This video has mostly negative comments!"
    else:
        summary = "Mixed or neutral feedback."

    return jsonify({"summary": summary, "stats": stats})
