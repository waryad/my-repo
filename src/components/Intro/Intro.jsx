// Intro.js
import React, { useContext } from "react";
import "./Intro.css";
import MyPicture from "../../img/MyPicture.JPG";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from './resume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Deepinder Kaur Warya</span>
          <div className="m-aboutme">
            <span>
              Dynamic software engineer in Brampton, ON, specializing in impactful solutions with expertise in software development and machine learning. Holds a CST-Software Engineering diploma, a Master's in Applied Sciences, and Microsoft Azure Fundamentals certification. Recognized for a hardworking and optimistic nature, ensuring precision and quality in every task. Excited about contributing to your team's success through innovative solutions and a commitment to excellence. Whether in a team or individually, I bring a positive attitude and a strong commitment to excellence. Let's connect and explore how I can contribute to your team's success!
            </span>
          </div>
        </div>
        <div className="button-container">
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          <a href={Resume} download style={{ marginTop: "1rem" }}>
            <button className="button s-button">Download CV</button>
          </a>
        </div>
        {/* social icons */}
        <div className="i-icons">
         
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <motion.img
          initial={{ left: "0%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
          src={MyPicture}
          alt=""
        />
        <motion.div
          initial={{ rotate: 95, left: "9rem", top: "20rem" }}
          whileInView={{ rotate: 0, left: "0rem" }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1, type: "spring" }}
          className="floating-div"
        ></motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
