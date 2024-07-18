import React, { useContext } from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { ThemeContext } from "../Themes/ThemeContext";
import "./Services.css";

function Services() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container maxWidth="md" className={`services-container ${theme}`}>
      <Box className="services-box">
        <Typography variant="h4" component="h1" gutterBottom className="services-title">
          Services
        </Typography>
        <List className="services-list">
          {["Personal Trainers", "Modern Facilities", "Supplements", "Free Wifi", "Lockers"].map((service, index) => (
            <ListItem key={index} className="services-item">
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default Services;
