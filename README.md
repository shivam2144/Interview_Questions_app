# 🚀 Interview Pre-Question App  

A full-stack **AI-powered web application** that helps students and professionals prepare for interviews by generating practice questions based on topics and difficulty levels.  

Built with **MERN stack + Gemini API**, it features user authentication, question generation, and answer tracking with a clean and modern React frontend.  

---

## 📂 Project Structure  

interview-pre-question-app
├── backend
│   ├── .env
│   ├── package.json
│   ├── server.js                  # Backend entry point
│   ├── config
│   │   └── db.js                   # Database configuration
│   ├── Controllers
│   │   ├── authController.js       # Auth logic
│   │   └── questionController.js   # Question logic
│   ├── middleware
│   │   └── authMiddleware.js       # JWT middleware
│   ├── models
│   │   ├── Question.js             # Question schema
│   │   └── User.js                 # User schema
│   ├── routes
│   │   ├── authRoutes.js           # Auth routes
│   │   └── questionRoutes.js       # Question routes
│   └── utils
│       └── geminiService.js        # Gemini API service
│
└── frontend
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── public
    └── src
        ├── App.jsx                 # Frontend entry point
        ├── Homepage1.jsx
        ├── Generater.jsx
        ├── api                     # API integration
        ├── components              # Reusable UI components
        ├── context                 # Global state
        ├── pages                   # Page components
        └── styles                  # Tailwind CSS styles



---

## ✨ Features  

✅ **User Authentication** – Secure signup/login using JWT  

✅ **AI-Powered Question Generation** – Get questions by topic & difficulty (via Gemini API)  

✅ **Answer Tracking** – Monitor responses & accuracy  

✅ **Text & Speech Answers** – Users can read answers in text or listen via text-to-speech for better understanding  

✅ **Modern UI** – Built with React + Tailwind CSS  

---

## ⚡ Getting Started  

###  🔹 Frontend Setup  And 🔹 Backend Setup  

Navigate to the backend folder:  
```
cd backend
npm install
Create a .env file:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
Run the backend server:


npm run dev
🔹 Frontend Setup
Navigate to the frontend folder:


cd frontend
npm install
Start the frontend dev server:


npm run dev
Open in browser → http://localhost:5173

🌍 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT authentication
GEMINI_API_KEY	Google Gemini API key for AI features
PORT	Backend server port (default: 5000)

🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

AI Service: Google Gemini API

Authentication: JWT (JSON Web Tokens)

📌 Future Enhancements
📊 Admin dashboard with analytics

📱 Mobile-responsive design improvements

📑 Save & export practice sets

🎯 Smart difficulty adjustment (adaptive learning)

✨ Made with ❤️ by Shivram

