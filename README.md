# 🚀 Interview Pre-Question App  

A full-stack **AI-powered web application** that helps students and professionals prepare for interviews by generating practice questions based on topics and difficulty levels.  

Built with **MERN stack + Gemini API**, it features user authentication, question generation, and answer tracking with a clean and modern React frontend.  

---

## 📂 Project Structure  

```plaintext
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
```
##  Screenshot

<img width="1895" height="910" alt="Screenshot 2025-12-05 021522" src="https://github.com/user-attachments/assets/cdd0f0fc-8f92-46bc-a1e4-5a3d2df2e872" />


<img width="1910" height="913" alt="Screenshot 2025-12-05 021226" src="https://github.com/user-attachments/assets/8eb01c81-5ef5-46f1-8903-26f0d7f0eb60" />

<img width="1886" height="927" alt="Screenshot 2025-12-05 021301" src="https://github.com/user-attachments/assets/5c9bad25-c1bf-4ec2-93f2-aa8b9ec739a0" />


<img width="1909" height="923" alt="Screenshot 2025-12-05 021320" src="https://github.com/user-attachments/assets/fe36d958-fe42-4b45-8311-35145def1619" />

<img width="1904" height="913" alt="Screenshot 2025-12-05 021337" src="https://github.com/user-attachments/assets/5fcae0ad-01fe-4383-b830-2c9e8a6a3913" />



<img width="1917" height="891" alt="Screenshot 2025-12-05 021348" src="https://github.com/user-attachments/assets/47134b26-769b-45b3-89bb-3d6e8df30b4d" />

<img width="1917" height="927" alt="Screenshot 2025-12-05 021359" src="https://github.com/user-attachments/assets/ea7769a5-2bd6-419e-92ff-aa23303ee145" />


<img width="1911" height="884" alt="Screenshot 2025-12-05 021410" src="https://github.com/user-attachments/assets/b54451eb-f161-4ff7-adda-af834e495319" />


<img width="1911" height="901" alt="Screenshot 2025-12-05 021435" src="https://github.com/user-attachments/assets/36ec4be3-935d-4995-bb30-cdf49e683ff6" />

<img width="1917" height="911" alt="Screenshot 2025-12-05 021453" src="https://github.com/user-attachments/assets/92512a55-a5ff-4d9b-af79-5974e4285786" />


<img width="1909" height="931" alt="Screenshot 2025-12-05 021502" src="https://github.com/user-attachments/assets/5b3f9f61-937b-423b-a611-02b69f1f604b" />











