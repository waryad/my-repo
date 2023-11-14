import React from "react";
import "./Footer.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-content">
        <div className="f-icons">
          <a href="https://github.com/waryad" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/deepinderw/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="f-contact">
          <p>Email: <a href="mailto:dwarya8@gmail.com">dwarya8@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
