![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0-38BDF8)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
# 🚀 3D Portfolio Website

A modern, fully responsive **3D Developer Portfolio Website** built using **React.js, Vite, Tailwind CSS, Three.js, Framer Motion, and MongoDB**.

This portfolio showcases my technical skills, projects, certifications, education, and professional experience through an interactive and visually appealing interface.

🌐 **Live Demo:** https://satwik-12-dev.vercel.app/

---

## 📖 About The Project

This portfolio website serves as my personal digital presence where recruiters, developers, and potential clients can learn more about me, explore my projects, and contact me directly.

The website includes:

- Interactive 3D Hero Section
- About Me Section
- Technical Skills Showcase
- Work Experience Timeline
- Certifications
- Project Portfolio
- Contact Form with MongoDB Integration
- Responsive Design for All Devices

---

## ✨ Features

### 🎨 Frontend Features

- Modern UI/UX Design
- Fully Responsive Layout
- Smooth Animations with Framer Motion
- Interactive 3D Elements using Three.js
- Project Showcase
- Skills & Technologies Section
- Experience Timeline
- Certificates Showcase
- Resume Download
- Contact Form

### ⚙ Backend Features

- Node.js Backend
- MongoDB Database Integration
- Contact Form Data Storage
- API-Based Communication
- Secure Environment Variables

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Three.js
- React Three Fiber
- Framer Motion

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Deployment

- Vercel

---

## 📁 Project Structure

```bash
3D_PORTFOLIO
│
├── public
│   ├── planet
│   ├── logo.svg
│   ├── Resume2.pdf
│   └── vite.svg
│
├── server
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── config
│   └── server.js
│
├── src
│   │
│   ├── assets
│   │   ├── cert
│   │   ├── company
│   │   ├── icons
│   │   ├── tech
│   │   └── images
│   │
│   ├── components
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   ├── TrueFocus.jsx
│   │   └── Works.jsx
│   │
│   ├── constants
│   │   └── index.js
│   │
│   ├── hoc
│   │   └── SectionWrapper.jsx
│   │
│   ├── utils
│   │   └── motion.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.js
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB

---

## 🔧 Installation

### Clone Repository

```bash
git clone https://github.com/satwik12dev/Portfolio-Website.git
```

### Navigate to Project

```bash
cd Portfolio-Website
```

### Install Dependencies

```bash
npm install
```

---

## ▶ Running Frontend

Start the React Development Server:

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## ▶ Running Backend

Move to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
npm start
```

Backend will run on:

```bash
http://localhost:5000
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5000
```

---

## 🗄 MongoDB Integration

The contact form is connected to MongoDB.

When a visitor submits the contact form:

1. Data is sent to the backend API.
2. Backend validates the request.
3. Information is stored in MongoDB.
4. Admin can access submitted contact details from the database.

---

## 📸 Screenshots

Add screenshots inside a folder named:

```bash
screenshots/
```

Example:

```md
![Home Page](screenshots/home.png)

![About Section](screenshots/about.png)

![Projects Section](screenshots/projects.png)

![Contact Section](screenshots/contact.png)
```

---

## 🌍 Live Website

### Portfolio

👉 https://satwik-12-dev.vercel.app/

---

## 👨‍💻 Author

### Satwik Saxena

🎓 B.Tech Computer Science

📍 India

### Connect With Me

- GitHub: https://github.com/satwik12dev
- LinkedIn: https://www.linkedin.com/in/satwik-saxena-36391a262/
- Portfolio: https://satwik-12-dev.vercel.app/

---

## 📬 Contact

If you'd like to discuss:

- Software Development
- Full Stack Development
- Backend Engineering
- Internships
- Freelance Opportunities
- Collaborations

Feel free to connect through the contact form available on the portfolio.

---

## ⭐ Support

If you found this project useful, please give it a ⭐ on GitHub.

It helps support my work and motivates me to build more open-source projects.

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by Satwik Saxena