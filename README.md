# 🔥 Confidence Forge - AI-Powered Confidence Tracker

> Built with **Google Gemini 3 Flash Preview** for real-time activity analysis and confidence scoring.

A stunning, interactive web app that tracks your daily activities and provides AI-powered confidence scoring. Features a beautiful 3D liquid capsule interface with parallax effects, particle animations, and persistent storage.

![Confidence Forge Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Gemini 3](https://img.shields.io/badge/Powered%20by-Gemini%203-blue) ![React](https://img.shields.io/badge/React-18-61dafb) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

---

## ✨ Features

- 🤖 **AI-Powered Analysis**: Google Gemini 3 analyzes your activities and provides witty, personalized feedback
- 🎨 **3D Interactive Capsule**: Beautiful liquid-filled capsule with mouse/touch parallax tilt effects
- 💾 **Persistent Storage**: Your progress is automatically saved to localStorage
- 🎉 **Titan Mode**: Unlock golden particle effects and special visuals at 100% confidence
- 🎤 **Voice Input**: Speak your activities using the Web Speech API
- 📊 **Activity History**: Track all your logged activities in the Insights tab
- 📱 **Haptic Feedback**: Vibration feedback on mobile devices
- 🌓 **Dark Mode**: Seamless light/dark theme switching
- ⚡ **6 Quick Actions**: Pre-configured habit buttons for instant logging

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Google Gemini API Key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alampolee/Confidence_Booster_Gemini-3-App.git
   cd Confidence_Booster_Gemini-3-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env` file in the root directory:
   ```bash
   # On Windows (PowerShell)
   New-Item .env
   
   # On macOS/Linux
   touch .env
   ```
   
   Add your Gemini API key to the `.env` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   
   > ⚠️ **Important**: Never commit your `.env` file to Git. It's already in `.gitignore`.

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open the app**
   
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎮 How to Use

### Text Input
1. Type your activity in the input field (e.g., "I went to the gym")
2. Press **Enter** or click the **arrow button**
3. Watch as Gemini 3 analyzes your activity and updates your confidence score

### Voice Input
1. Click the **microphone icon** in the bottom navigation
2. Speak your activity when prompted
3. The app will transcribe and analyze your speech automatically

### Quick Actions
- Click any of the **6 habit buttons** for instant logging:
  - 💪 Gym Session (+5%)
  - 📱 Doomscrolling (-3%)
  - 👥 Social Event (+8%)
  - 📚 Learning (+4%)
  - 🧘 Self-Care (+6%)
  - ✅ Productivity (+5%)

### 3D Capsule Interaction
- **Hover/Touch** the capsule to see the parallax tilt effect
- Watch **particles burst** when your score increases
- Reach **100%** to unlock **Titan Mode** with golden effects!

---

## 📁 Project Structure

```
Confidence_Booster_Gemini-3-App/
├── Confidence Booster index.html   # Main frontend (React app)
├── server.js                        # Express backend (API proxy)
├── package.json                     # Dependencies
├── .env                             # API key (create this yourself)
├── .gitignore                       # Ignored files
└── README.md                        # You are here!
```

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Backend**: Node.js, Express
- **AI**: Google Gemini 3 Flash Preview
- **Storage**: localStorage (browser-based)
- **Voice**: Web Speech API

---

## 🔒 Security

- API keys are stored in `.env` and **never** exposed to the frontend
- Backend proxy (`server.js`) handles all Gemini API requests
- `.gitignore` prevents accidental commits of sensitive data

---

## 🎯 Hackathon Highlights

This project showcases:
- ✅ Advanced **Gemini 3 API integration** with custom prompts
- ✅ **3D CSS animations** and parallax effects
- ✅ **Particle systems** using pure CSS/JS
- ✅ **Persistent state management** with localStorage
- ✅ **Voice recognition** integration
- ✅ **Responsive design** with dark mode support

---

## 📝 License

MIT License - feel free to use this project for learning or your own hackathons!

---

## 👨‍💻 Author

**Alan Polee** ([@alampolee](https://github.com/alampolee))

Built for the **Gemini 3 Hackathon** 🚀

---

## 🙏 Acknowledgments

- Google Gemini team for the amazing API
- React & Tailwind CSS communities
- Everyone who believes in building confidence! 💪
