import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";
import "./App.scss";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <Topbar open={isMenuOpen} toggleMenuOpen={toggleMenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
