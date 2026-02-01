🔗 URL Shortener with QR Code Support

A full-stack URL shortener web application that converts long URLs into short, shareable links with instant QR code generation.
Built with modern web technologies and deployed on the cloud for global access.

🚀 Features

🔗 Shorten long URLs into compact links

📋 One-click copy to clipboard

📱 QR code generation for every short URL

🌍 Publicly accessible (cloud deployed)

⚡ Fast and lightweight REST API

🛠 Tech Stack
Frontend

React

Axios

QRCode (Canvas-based generation)

Backend

Flask (Python)

SQLite

Flask-CORS

Deployment & Tools

Frontend Hosting: Vercel

Backend Hosting: Render

Version Control: Git & GitHub

🏗 Architecture Overview
React Frontend (Vercel)
        |
        |  REST API (HTTP)
        |
Flask Backend (Render)
        |
     SQLite Database

📸 Screenshots

Add your screenshots here

![UI Screenshot](screenshots/ui.png)
![QR Code Screenshot](screenshots/qr.png)

⚙️ How It Works

User enters a long URL in the React UI

Frontend sends request to Flask API

Backend generates a unique short code

URL mapping is stored in SQLite

Short URL and QR code are returned

Accessing the short URL redirects to the original link

🧪 Run Locally
Backend
pip install -r requirements.txt
python app.py

Frontend
npm install
npm start

🌍 Live Demo

Frontend: https://your-vercel-url.vercel.app

Backend: https://your-render-url.onrender.com

📈 Future Enhancements

📊 Click analytics dashboard

✏️ Custom short URLs

⏳ Expiry for links

🔐 User authentication

🙌 Acknowledgements

This project was built to strengthen real-world full-stack development skills, cloud deployment understanding, and production debugging experience.

📬 Feedback

Suggestions and improvements are always welcome!

✅ WHAT THIS DOES FOR YOU

✔ Makes your LinkedIn post scroll-stopping
✔ Makes your GitHub look recruiter-ready
✔ Shows real deployment + engineering maturity

If you want next, I can:

Optimize this README for ATS keywords

Write resume bullet points from this project

Help you pin this repo properly on GitHub

Write a “final year project” version description

Just tell me 👌