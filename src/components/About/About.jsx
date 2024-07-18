import React, { useContext, useEffect } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./About.css";
import { ThemeContext } from "../Themes/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const teamMembers = [
    { name: "Mr.John Stones,Owner", img: "ceo.jpg" },
    { name: "Mr.Alex hales, Crossfit", img: "m1.jpg" },
    { name: "Ms.Ellena Rhodes, Yoga", img: "f1.jpg" },
    { name: "Mr.Jake Paul, Strength", img: "m2.jpg" },
    { name: "Mr.Willson Show, Sports", img: "m3.jpg" }
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="md" className="about-container">
        <Typography variant="h4" component="h1" gutterBottom className="about-title">
          About Momentum Fitness
        </Typography>
        <Box className="about-section">
          <Typography variant="body1" paragraph className="about-intro">
            Welcome to Momentum Fitness, where passion meets performance. We are dedicated to empowering our members to achieve their fitness goals through personalized training programs and a supportive community environment.
          </Typography>
        </Box>

        <Box className="about-section">
          <Typography variant="h5" component="h2" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center" className="team-images">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="ceo-member">
              <div className="team-member">
                <img
                  src={`./team/${teamMembers[0].img}`}
                  alt={teamMembers[0].name}
                  className="team-img"
                />
                <Typography variant="subtitle2" align="center" className="team-member-name">
                  {teamMembers[0].name}
                </Typography>
              </div>
            </Grid>
            {teamMembers.slice(1).map((member, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index} className="regular-member">
                <div className="team-member">
                  <img
                    src={`./team/${member.img}`}
                    alt={member.name}
                    className="team-img"
                  />
                  <Typography variant="subtitle2" align="center" className="team-member-name">
                    {member.name}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default About;
