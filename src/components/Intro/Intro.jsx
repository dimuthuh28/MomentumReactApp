import React, { useEffect, useContext } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { ThemeContext } from "../Themes/ThemeContext";
import "./Intro.css";
import Aos from "aos";
import 'aos/dist/aos.css';



function Intro() {
  useEffect(()=>{
    Aos.init({duration:1000});

  },[]) 
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0', padding: '20px', color: theme === 'dark' ? '#fff' : '#333' }} className="intro-container">
      <Box sx={{ padding: '40px', borderRadius: '8px' }} className="intro-box">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold', color: theme === 'dark' ? '#fff' : '#333', textAlign: 'left' }} className="intro-title" data-aos = "fade-left">
          WE'RE HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem', color: theme === 'dark' ? '#ccc' : '#666', textAlign: 'left' }} className="intro-paragraph" data-aos="fade-right">
          Momentum Fitness is more than just a gym; it's a destination where passion meets performance.
          We empower our members to achieve their fitness goals through personalized training programs,
          state-of-the-art facilities, and a supportive community. At Momentum Fitness, every workout
          is an opportunity to elevate your strength, health, and well-being.
        </Typography>
        <Grid container spacing={2} className="intro-images">
          <Grid item xs={12} sm={6} className="intro-img-container">
            <img src="/intro/intro1.jpg" alt="intro1" className="intro-img" />
          </Grid>
          <Grid item xs={12} sm={6} className="intro-img-container">
            <img src="/intro/intro2.jpg" alt="intro2" className="intro-img" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Intro;
