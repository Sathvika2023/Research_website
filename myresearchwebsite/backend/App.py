from flask import Flask, request, jsonify
from flask_cors import CORS  # Allow cross-origin requests (important for React)
import requests
from scholarly import scholarly
import os  # For environment variables

app = Flask(__name__)
CORS(app)  # Enable CORS for React

# Fetch Google Scholar Data
def fetch_google_scholar_data(author_id):
    try:
        author = scholarly.search_author_id(author_id)
        author = scholarly.fill(author)

        if not author:
            return {"error": "Google Scholar author not found."}

        scholar_data = {
            "Researcher": author.get("name", "Unknown"),
            "Affiliations": author.get("affiliation", "Unknown"),
            "H-Index": author.get("hindex", "N/A"),
            "Publications": []
        }

        for pub in author.get("publications", []):
            pub = scholarly.fill(pub)
            scholar_data["Publications"].append({
                "Title": pub.get("bib", {}).get("title", "No Title"),
                "Year": pub.get("bib", {}).get("pub_year", "Unknown Year"),
                "Citations": pub.get("num_citations", "No Citations")
            })

        return scholar_data
    except Exception as e:
        return {"error": f"Google Scholar fetch failed: {str(e)}"}

# Fetch Scopus Data
def fetch_scopus_data(author_id):
    try:
        SCOPUS_API_KEY = "6dd68cc0a9b5300686e59849b38d56d9"  # Load API Key from environment

        base_url = "https://api.elsevier.com/content/search/scopus"
        params = {
            "query": f"AU-ID({author_id})",
            "apiKey": SCOPUS_API_KEY,
            "httpAccept": "application/json",
            "count": 10
        }

        response = requests.get(base_url, params=params)

        if response.status_code == 200:
            data = response.json()
            entries = data.get("search-results", {}).get("entry", [])

            if not entries:
                return {"error": "No Scopus publications found."}

            scopus_data = {
                "Researcher": f"Scopus Author {author_id}",
                "Publications": []
            }

            for entry in entries:
                scopus_data["Publications"].append({
                    "Title": entry.get("dc:title", "No title available"),
                    "Authors": entry.get("dc:creator", "Unknown author"),
                    "Published in": entry.get("prism:publicationName", "Unknown journal"),
                    "Publication Year": entry.get("prism:coverDate", "Unknown date"),
                    "Link": entry.get("link", [{}])[0].get("@href", "No link available")
                })

            return scopus_data
        else:
            return {"error": f"Scopus fetch failed. Status Code: {response.status_code}"}
    except Exception as e:
        return {"error": f"Scopus fetch failed: {str(e)}"}

# API Endpoint to Fetch Data
@app.route("/fetch-publications", methods=["POST"])
def fetch_publications():
    try:
        data = request.json
        google_scholar_id = data.get("google_scholar_id")
        scopus_id = data.get("scopus_id")

        if not google_scholar_id or not scopus_id:
            return jsonify({"error": "Both Google Scholar ID and Scopus ID are required."}), 400

        google_scholar_json = fetch_google_scholar_data(google_scholar_id)
        scopus_json = fetch_scopus_data(scopus_id)

        return jsonify({
            "google_scholar": google_scholar_json,
            "scopus": scopus_json
        }), 200

    except Exception as e:
        return jsonify({"error": f"Server error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
