import React from "react";
import "./HomeBody.css";
import HeroSection from "../HeroSection/Herosection";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Trainig from "../Training/Training";
import Gallery from "../Gallery/Gallery";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../Themes/ThemeContext";


function HomeBody(){
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return(
    <>
      <HeroSection/>
      <Intro/>
      <Services/>
      <Trainig/>
      <Gallery/>

      
    </>
  );
}

export default HomeBody;