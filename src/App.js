import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import "./App.css";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro /> 
      <Portfolio />
      <Services />
      <Experience />
      <Certification/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;