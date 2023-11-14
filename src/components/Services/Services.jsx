import React, { useContext, useState } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import { motion, AnimateSharedLayout } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Delivering end-to-end solutions with a combination of frontend and backend technologies.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive websites using React, Vue, and Angular.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Creating robust backends with Node.js, Express, and databases like MongoDB and SQL.",
  },
  {
    id: 4,
    title: "Version Control",
    description: "Expertise in Git and collaboration tools like GitHub and GitLab.",
  },
];

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // State to track the selected service
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle service selection
  const handleServiceClick = (id) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <div className="services" id="services">
      <div className="services-header">
        <h2 style={{ color: darkMode ? "White" : "black" }}>My Awesome Services</h2>
        <div className="blur s-blur1"></div>
      </div>
      <div className="services-cards">
        <AnimateSharedLayout>
          {servicesData.map((service) => (
            <div className="card-container" key={service.id}>
              <motion.div
                layout
                className={`card ${selectedService === service.id ? "selected" : ""}`}
                onClick={() => handleServiceClick(service.id)}
              >
                <h3 className="card-heading">{service.title}</h3>
                {selectedService === service.id && (
                  <p className="card-detail">{service.description}</p>
                )}
              </motion.div>
            </div>
          ))}
        </AnimateSharedLayout>
      </div>
      <div className="blur s-blur2"></div>
    </div>
  );
};

export default Services;






// import React, { useContext } from "react";
// import "./Services.css";
// import { themeContext } from "../../Context";
// import { motion, AnimateSharedLayout } from "framer-motion";

// const Services = () => {
//   // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   return (
//     <div className="services" id="services">
//       <div className="services-header">
//         <h2 style={{ color: darkMode ? "black" : "black" }}>My Awesome Services</h2>
//         <div className="blur s-blur1"></div>
//       </div>
//       <div className="services-cards">
//         <AnimateSharedLayout>
//           <div className="card-container">
//             <motion.div layout className="card">
//               <p className="card-detail">
//                 <h3 className="card-heading">Full Stack Development</h3>
//                 Delivering end-to-end solutions with a combination of frontend and backend technologies.
//               </p>
//             </motion.div>
//           </div>
//           <div className="card-container">
//             <motion.div layout className="card">
//               <p className="card-detail">
//               <h3 className="card-heading">Frontend Development</h3>
//                 Building responsive and interactive websites using React, Vue, and Angular.
//               </p>
//             </motion.div>
//           </div>
//           <div className="card-container">
//             <motion.div layout className="card">
//               <p className="card-detail">
//               <h3 className="card-heading">Backend Development</h3>
//                 Creating robust backends with Node.js, Express, and databases like MongoDB and SQL.
//               </p>
//             </motion.div>
//           </div>
//           <div className="card-container">
//             <motion.div layout className="card">
//               <p className="card-detail">
//               <h3 className="card-heading">Version Control</h3>
//                 Expertise in Git and collaboration tools like GitHub and GitLab.
//               </p>
//             </motion.div>
//           </div>
//         </AnimateSharedLayout>
//       </div>
//       <div className="blur s-blur2"></div>
//     </div>
//   );
// };

// export default Services;
