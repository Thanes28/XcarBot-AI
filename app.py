from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("OPENAI_API_KEY"))

print(os.getenv("OPENAI_API_KEY")) 
conversation_history = []

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "What is wrong with my car?")
    image_data = data.get("image")

    if not user_message and not image_data:
        return jsonify({"error": "No message or image provided"}), 400

    if image_data:
        base64_image = image_data.split(",")[1]
        image_media_type = image_data.split(";")[0].split(":")[1]
        content = [
            {
                "type": "image_url",
                "image_url": {
                    "url": f"data:{image_media_type};base64,{base64_image}"
                }
            },
            {
                "type": "text",
                "text": user_message
            }
        ]
    else:
        content = user_message

    conversation_history.append({
        "role": "user",
        "content": content
    })

    response = client.chat.completions.create(
        model="meta-llama/llama-4-scout-17b-16e-instruct",
        messages = [
          {"role": "system", "content": """You are XcarBot, an intelligent and friendly car expert assistant. 
            Your role:
            - Answer questions about car problems, maintenance, repairs, and troubleshooting
            - Give buying advice and car comparisons
            - Help with fuel efficiency, tyre care, and general vehicle upkeep
            - Provide advice specific to Malaysian roads and conditions when relevant

            Your rules:
            - Only answer car and vehicle related questions
            - If someone asks something unrelated to cars, politely say: "I'm only able to help with car-related questions! 🚗"
            - Keep answers clear, structured, and easy to understand
            - Use bullet points or numbered lists when explaining steps
            - Be friendly and professional
            """},
            *conversation_history
            ]
    )

    bot_reply = response.choices[0].message.content

    conversation_history.append({
        "role":"assistant",
        "content": bot_reply
    })

    return jsonify({"reply": bot_reply})

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/clear", methods=["POST"])
def clear():
    global conversation_history
    conversation_history = []
    return jsonify({"status": "cleared"})

if __name__ == "__main__":
    app.run(debug=True)


