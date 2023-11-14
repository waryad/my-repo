import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`contact-form ${darkMode ? "dark-mode" : ""}`} id="contact">
      <div className={`c-right ${darkMode ? "dark-mode" : ""}`}>
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <h2>Contact Me</h2>
          <div className="awesome">
            <p>Email: <a href="mailto:dwarya8@gmail.com" className="contact-link">{darkMode ? "dwarya8@gmail.com" : "dwarya8@gmail.com"}</a></p>
            <p>Phone: 647-907-8425</p>
            <p>Github Info: <img src={Github} alt="GitHub" /><a href="https://github.com/waryad" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/waryad</a></p>
            <p>LinkedIn Info: <img src={LinkedIn} alt="LinkedIn" /><a href="https://linkedin.com/in/deepinderw" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/deepinderw</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
