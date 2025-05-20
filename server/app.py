from flask import Flask, request, jsonify
from analyzer import analyze_sentiments
from sentiment import fetch_comments
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/analyze', methods=['GET'])
def analyze():
    video_url = request.args.get('url')

    # For now, use mock comments until we hook into YouTube
    comments = [
        "I love this video!",
        "This was okay.",
        "Terrible. Waste of time.",
        "Amazing content!",
        "Not bad, not great."
    ]

    stats = analyze_sentiments(comments)

    return jsonify({
        "summary": "This video has mostly positive comments!",
        "stats": stats
    })

if __name__ == '__main__':
    app.run(port=5000)
