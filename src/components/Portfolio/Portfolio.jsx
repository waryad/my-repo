import React, { useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import HtmlJavascript from "../../img/htmlJavascript.png";
import Java2 from "../../img/Java2.png";
import Xaml from "../../img/Xaml.jpg";
import WPF from "../../img/WPF.png";
import Ajax from "../../img/Ajax.jpg";
import Reactjs from "../../img/Reactjs.jpg";
import Mysql from "../../img/Mysql.png";

import ThymleafJava from "../../img/ThymleafJava.jpg";

const projects = [
  {
    title: "Java Project",
    image: Java2,
    youtubeLinks: [
      "https://youtu.be/U9Idb6E8T08",
    ],
    githubLink: "https://github.com/waryad/JavaProject",
    heading: "Java",
    paragraph: "Technologies Used: Spring Frameworks, PostgreSQL, RestAPI.",
  },
  {
    title: "SpringBoot cine reviews",
    image: ThymleafJava,
    youtubeLink: "https://youtu.be/wVLPfRX98GU",
    githubLink: "https://github.com/waryad/JavaEnterprise1",
    heading: "SpringBoot cine reviews",
    paragraph: "Technologies Used: Spring Boot, Spring MVC, Thymeleaf, and more.",
  },
    {
   
    title: "HTML, CSS, and Javascript Project",
    image: HtmlJavascript,
    youtubeLink: "https://youtu.be/rI3e9fGIdGk",
    githubLink: "https://github.com/waryad/WebDevelopment-Registeration-form1",
    heading: "HTML, CSS, and Javascript",
    paragraph: "Technologies Used: HTML, CSS, and Javascript skills used in the registration form.",
  },

  {
    title: "WPF Product Management System",
    image: Xaml,
    youtubeLink: "https://youtu.be/PZLF4XlxFUk",
    githubLink: "https://github.com/waryad/Xaml-.Net-Project-Add-Product",
    heading: "WPF Product Management System",
    paragraph: "Technologies Used: WPF, XAML, C#, and more.",
  },
  {
    title: "ADO.NET Sample Application",
    image: WPF,
    youtubeLink: "https://youtu.be/LmojQtEXoKo",
    githubLink: "https://github.com/waryad/WPF--Add-Continents-country-city",
    heading: "ADO.NET Sample Application",
    paragraph: "Technologies Used:ADO.NET, C#, SQL Server, and more.",
  },
 
  {
    title: "Ajax",
    image: Ajax,
    youtubeLink: "https://youtu.be/PQ6jKjqKdwo",
    githubLink: "https://github.com/waryad/Mobile-Web-AJAX",
    heading: "Mobile Web Application",
    paragraph: "Technologies Used: JavaScript for client-side web scripting, AJAX for fetching JSON data, and HTML/CSS for web page layout and styling.",
  },
 
  {
    title: "My Personal Portfolio ",
    image: Reactjs,
    youtubeLink: "https://youtu.be/BCcaB10wfIk",
    githubLink: "https://github.com/waryad/deepinder-portfolio/tree/master",
    heading: "ReactJs",
    paragraph: "Technologies Used:Node.js, React.Js, JavaScript (ES6+), HTML5, CSS3, and frameworks like Bootstrap or Flexbox/Grid to help with responsiveness, Git for development and deployment.",
  },
  {
    title: "MySQL WorkBench ",
    image: Mysql,
    youtubeLink: " https://youtu.be/4W3e7Sg7H38",
    heading: "Database Book Shop",
    paragraph: "Technologies Used: Database queries, MySql workbench.",
  },


];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`} id="portfolio">
      {/* heading */}
      <div className="center-container">
        <span>Recent </span>
        <span>Projects</span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className={`project-details ${darkMode ? 'dark' : 'light'}`}>
              <h1>{project.heading}</h1>
              <p>{project.paragraph}</p>
              <div className="video-links">
  {Array.isArray(project.youtubeLinks) ? (
    project.youtubeLinks.map((youtubeLink, linkIndex) => (
      <button key={linkIndex} onClick={() => openLink(youtubeLink)}>Watch Live Demo</button>
    ))
  ) : (
    <button onClick={() => openLink(project.youtubeLink)}>Watch Live Demo</button>
  )}
  {project.title !== "MySQL WorkBench" && project.githubLink && (
    <button onClick={() => openLink(project.githubLink)}>View Code</button>
  )}
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;