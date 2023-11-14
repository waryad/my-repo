import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const experiences = [
  {
    title: "Software Engineer Research Assistant Intern",
    company: "Health and Rehab Research Inc. | Mississauga, ON",
    date: "Jan 2023 - Apr 2023",
    link: "http://www.health-rehab-research.ca",
    points: [
      "Contributed significantly to a cutting-edge project that utilized MediaPipe, Pandas, and Keras to develop machine learning models for motion capture and human pose detection.",
      "Effectively utilized extensive training datasets, including MPII and MSCOCO, to facilitate precise human pose estimation.",
      "Proficiently implemented and rigorously tested machine learning models in Python, with a primary emphasis on TensorFlow, in collaboration with the project team.",
    ],
  },
  {
    title: "Laboratory Department - Laboratory Technician",
    company: "Life Labs | Brampton, ON",
    date: "Mar 2021 - Aug 2021",
    link: "https://www.lifelabs.com/",
    points: [
      "Proficiently managed laboratory information using Laboratory Information Management System (LIMS) software for systematic and efficient data management, showcasing expertise in information systems.",
      "Efficiently managed laboratory information using GUI-based software like Intralab and Apex.",
      "Demonstrated multitasking capabilities by juggling various tasks concurrently.",
    ],
  },
  {
    title: "Production Department - Production Technician",
    company: "Apotex Inc. | Vaughn, ON",
    date: "Nov 2014 - Mar 2018",
    link: "https://www.apotex.com/ca/en",
    points: [
      "Utilized SAP software for comprehensive start-to-end batch procedures, showcasing proficiency in software applications.",
      "Conducted in-process tests, meticulously logging data into our LIMS, showcasing software and data management skills.",
    ],
  },
];

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      {experiences.map((experience, index) => (
        <div className={`achievement achievement${index + 1}`} key={index}>
          <div className="circle" style={{ color: darkMode ? "black" : "white" }}>
            {experience.title.charAt(0)}
          </div>
          <div className="content">
            <span className="title" style={{ color: darkMode ? "white" : "black" }}>{experience.title}</span>
            <span className="company">{experience.company}</span>
            <span className="date" style={{ color: darkMode ? "white" : "black" }}>{experience.date}</span>
            <a href={experience.link} target="_blank" rel="noopener noreferrer" className="link">
              {experience.link}
            </a>
            <ul className="points">
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
