import React, { useContext, useEffect } from "react";
import "./Herosection.css";
import { ThemeContext } from "../Themes/ThemeContext";
import Clock from "../Clock/Clock"
import WelcomeMessage from "../Welcome/Welcome";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Momentum</h1>
        <WelcomeMessage/>
        <p>Discover your strength and achieve your fitness goals at Momentum, where every workout brings you closer to a healthier you.</p>
        <a href="/contact" className="cta-button">Get Started</a>
        <Clock/>
      </div>
    </div>
  );
};

export default HeroSection;
