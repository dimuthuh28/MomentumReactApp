import React from "react";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import HomeBody from "./components/HomeBody/HomeBody";
import { useEffect, useContext } from "react";
import { ThemeContext } from "./components/Themes/ThemeContext";


function App(){
  
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return(
    <>
      <Navbar/>
      <HomeBody/>
      <Footer/>
    </>
  );

}

export default App;