# sentiment.py
from urllib.parse import urlparse, parse_qs
import requests
from textblob import TextBlob

def extract_video_id(url):
    parsed = urlparse(url)
    if parsed.hostname == 'youtu.be':
        return parsed.path[1:]
    elif parsed.hostname in ('www.youtube.com', 'youtube.com'):
        if parsed.path == '/watch':
            return parse_qs(parsed.query).get('v', [None])[0]
    return None

import requests

def fetch_comments(video_id, api_key, max_results=100):
    comments = []
    url = "https://www.googleapis.com/youtube/v3/commentThreads"
    params = {
        "part": "snippet",
        "videoId": video_id,
        "key": api_key,
        "maxResults": max_results,
        "textFormat": "plainText"
    }

    while True:
        response = requests.get(url, params=params)
        if response.status_code != 200:
            print("❌ Error fetching comments:", response.status_code)
            break

        data = response.json()
        for item in data["items"]:
            comment = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
            comments.append(comment)

        print(f"🟢 Fetched {len(data['items'])} comments, total so far: {len(comments)}")

        if "nextPageToken" in data:
            params["pageToken"] = data["nextPageToken"]
        else:
            break

    print(f"✅ Total comments fetched: {len(comments)}")
    return comments




def analyze_sentiments(comments):
    stats = {"positive": 0, "neutral": 0, "negative": 0}
    for comment in comments:
        polarity = TextBlob(comment).sentiment.polarity
        if polarity > 0.1:
            stats["positive"] += 1
        elif polarity < -0.1:
            stats["negative"] += 1
        else:
            stats["neutral"] += 1
    return stats
