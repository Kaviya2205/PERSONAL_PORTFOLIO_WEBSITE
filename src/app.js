import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>🚀 My Portfolio</h1>
        <p>Full Stack Developer | AI Enthusiast</p>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
      </header>

      <section>
        <h2>📌 Projects</h2>
        <ul>
          <li><b>AI Chatbot 🤖</b> - NLP-based chatbot using GPT</li>
          <li><b>Expense Tracker 💰</b> - Budget management web app</li>
        </ul>
      </section>

      <footer>
        <p>© 2024 Your Name. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;
