import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import MenuLinks from "../MenuLinks/MenuLinks";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ThemeToggleButton from "../Themes/ThemeToggleButton";
import { ThemeContext } from "../Themes/ThemeContext";


function Navbar() {

  
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div id="navcontent" className={`navbar ${navActive ? "nav-active" : ""}`}>
      <a href="/" id="logolink">
      <img 
          src={theme === 'dark' ? '/logo/logo-w.png' : '/logo/logo-r.png'} 
          alt="Logo" 
          id="logoimg" 
        />
      </a>

      <div className={`nav-links ${navActive ? "nav-active" : ""}`}>
        <MenuLinks linkname="Home" url="/" />
        <MenuLinks linkname="About" url="/about" />
        <MenuLinks linkname="Contact" url="/contact" />
        <ThemeToggleButton />
      </div>

      <div
        className={`burger ${navActive ? "toggle" : ""}`}
        onClick={toggleNav}
      >
        <DensityMediumIcon />
      </div>
    </div>
  );
}

export default Navbar;
