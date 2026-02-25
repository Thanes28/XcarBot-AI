<img width="1909" height="947" alt="Full Picture of chatbot" src="https://github.com/user-attachments/assets/c1f2dece-c372-4952-8ef0-8d45d38adcb8" /># 🚗 XcarBot AI
> An intelligent full-stack AI car assistant that diagnoses problems, gives maintenance advice, and analyzes car images.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Groq](https://img.shields.io/badge/Groq-F55036?style=for-the-badge&logo=groq&logoColor=white)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 AI-Powered | Context-aware responses using LLaMA 4 Scout via Groq API |
| 🖼️ Image Analysis | Upload car photos for AI-powered visual diagnosis |
| 💬 Chat History | Bot remembers previous messages in the session |
| 🎯 Car-Focused | System prompt restricts responses to vehicle topics only |
| 📱 Responsive | Works seamlessly on desktop and mobile |
| ⚡ Typing Indicator | Animated indicator while AI is generating a response |
| 🧹 Clear Chat | Reset conversation and history anytime |
| 🌙 Dark UI | Clean, professional dark-themed interface |

---

## 🛠️ Tech Stack
```
├── Backend       → Python, Flask, Flask-CORS
├── AI Model      → LLaMA 4 Scout 17B (via Groq API)
├── Frontend      → HTML5, CSS3, Vanilla JavaScript
├── Markdown      → Marked.js
└── Environment   → Python-dotenv
```

---

## 📁 Project Structure
```
XcarBot/
├── 📄 app.py               # Flask backend & API routes
├── 📄 .env                 # API keys (not committed)
├── 📄 requirements.txt     # Python dependencies
├── 📄 .gitignore
├── 📂 static/
│   ├── 🎨 style.css        # Frontend styling
│   └── ⚡ script.js        # Frontend logic & API calls
└── 📂 templates/
    └── 🌐 index.html       # Main chat UI
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Free Groq API key → [console.groq.com](https://console.groq.com)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/XcarBot.git
cd XcarBot
```

**2. Install dependencies**
```bash
pip install -r requirements.txt
```

**3. Create your `.env` file**
```bash
GROQ_API_KEY=your_groq_api_key_here
```

**4. Run the app**
```bash
python app.py
```

**5. Open in browser**
```
http://127.0.0.1:5000
```

---

## 📦 Dependencies
```
flask
flask-cors
groq
python-dotenv
```

---

## 💡 How to Use

- 💬 **Text Query** — Type any car question and press Enter or click Send
- 📎 **Image Upload** — Click the attach button to upload a car photo for analysis
- 🏆 **Suggestions** — Click suggestion cards on the welcome screen to get started quickly
- 🧹 **Clear Chat** — Click "Clear Chat" in the navbar to reset the conversation

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Your Groq API key from console.groq.com |

> ⚠️ Never commit your `.env` file. It is already excluded via `.gitignore`.

---

## 📸 Screenshots

<img width="1675" height="857" alt="Prompt 2" src="https://github.com/user-attachments/assets/ef1c6c49-e0a4-4593-8c93-64fb5f9e7040" />

<img width="1909" height="947" alt="Full Picture of chatbot" src="https://github.com/user-attachments/assets/87bbb75a-6693-4afa-acc1-10960d45171a" />

<img width="1697" height="860" alt="Prompt 1" src="https://github.com/user-attachments/assets/495e51aa-bbaa-4b55-96fa-3bf4b985c19d" />
<img width="1704" height="849" alt="Prompt 3" src="https://github.com/user-attachments/assets/4abd51a2-2677-4dd3-a339-45385d326378" />

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with 🔥 by Thaneswaren**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](your-linkedin-url)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](your-github-url)

</div>
