# 📰 Gazette Chronicles | Editorial & Musical Blog

A professional editorial web application and content management system inspired by the layout and typographic elegance of a classic traditional gazette. Built as an advanced full-stack project, it features a complete CRUD architecture, custom hooks, and a robust strongly-typed backend.

![Project Status](https://img.shields.io/badge/status-completed-success)
![React](https://img.shields.io/badge/frontend-React%20%2B%20Vite-blue)
![TypeScript](https://img.shields.io/badge/backend-Node.js%20%2B%20TypeScript-blueviolet)

---

## ✨ Key Features

- **Classic Editorial Design:** Clean, newspaper-inspired aesthetic featuring custom CSS layouts, structured columns, and high-contrast typography.
- **Complete CRUD Lifecycle:**
  - **Create:** Dedicated publication form to write and submit new musical articles.
  - **Read:** Asynchronous data fetching to display chronicles dynamically.
  - **Update:** Seamless inline editing directly within the card interface powered by a custom hook (`useEditArticle`) and `PUT` requests.
  - **Delete:** Instant record removal with real-time local state synchronization.
- **Dynamic Search & Filtering:** Interactive exploration tool allowing users to query works and authors instantly.
- **Optimized Navigation:** Client-side routing managed via React Router DOM, complete with a custom 404 fallback page for unassigned paths.

---

## 🛠️ Tech Stack

### Frontend

- **React & Vite:** Fast component-based architecture and modern development environment.
- **React Router DOM:** Fluid multi-page navigation and view management.
- **CSS3 / JavaScript (ES6+):** Highly customized modular styles simulating print media layout.

### Backend

- **Node.js & TypeScript:** Structured REST API built with scalable architecture (Controllers, Models, Routes) and strict type safety.
- **Package Manager:** `pnpm`

---

## 📂 Project Structure

```text
portfolio-web/
├── public/               # Static assets & logos (e.g., imagen-rp.svg)
├── src/
│   ├── assets/           # Images and static media files
│   ├── component/        # Reusable components (Header, Footer, etc.)
│   ├── data/             # Data files and mock information
│   ├── router/           # Application routing configuration
│   ├── App.css           # Root component styles
│   ├── App.jsx           # Main application wrapper
│   ├── index.css         # Global styles & font imports
│   └── main.jsx          # Entry point
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
└── pnpm-lock.yaml
💻 Getting Started
To run this project locally on your machine, follow these steps:

Clone the repository:

Bash
git clone [https://github.com/Rapdev12/Master-en-React.git](https://github.com/Rapdev12/Master-en-React.git)
cd "Master-en-React/15-Proyecto 3")
Navigate to the project directory:

Bash
Install dependencies:

Bash
npm install
# or using pnpm:
pnpm install
Run the development server:

Bash Front-end
npm run dev
# or:
pnpm dev
Open your browser:
Visit http://localhost:5173 to view the app.

Bash Back-end
npm run dev
# or:
pnpm dev
Open your browser:
Visit  http://localhost:3000.

#Setting up the development environment on Linux
# Give execution permissions (if needed)
  chmod +x your-script-name.sh
# Run the script in BlogFrontend
./start.sh
and Edit
```

---

## 🤖 AI Collaboration & Development

This project was built collaboratively through a human-AI workflow. The CSS styling and layout architecture were iteratively designed and supervised by me using **Gemini** and **Claude** as a technical pair-programmer and design assistant.

Every design choice, color scheme adjustment, code review, and implementation step was thoroughly reviewed, tested, and integrated by me to ensure full comprehension and ownership of the codebase.

---

## 👤 Author

**Ronald Palacios**

- GitHub: [@Rapdev12](https://github.com/Rapdev12/Rapdev12)
- LinkedIn: [Ronald Palacios](https://www.linkedin.com/in/ronald-palacios-311a6b155/)
