// Certification.js
import React from "react";
import "./Certification.css"; // Create a CSS file for styling

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    institution: "University of Calgary",
    date: "Dec 2022",
    link: "https://www.credly.com/badges/5e6aa1c8-a23d-42be-828c-f3c0e7a43d18",
  },
  // Add more certifications if needed
];

const Certification = () => {
  return (
    <div className="certification" id="certification">
      <h1>CERTIFICATIONS</h1>
      {certifications.map((certification, index) => (
        <div className="certification-item" key={index}>
          <h2>{certification.title}</h2>
          <p>{certification.institution}</p>
          <p>{certification.date}</p>
          <a href={certification.link} target="_blank" rel="noopener noreferrer">
            {certification.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certification;
