import React, { useContext } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { ThemeContext } from "../Themes/ThemeContext";
import "./Training.css";

function Training() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container maxWidth="md" sx={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', padding: '20px', color: theme === 'dark' ? '#fff' : '#333' }} className="training-container">

        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold', color: theme === 'dark' ? '#fff' : '#333' }} className="training-title">
          Training
        </Typography>
        <List className="training-list">
          {[
            "Strength Training",
            "Functional Training",
            "Yoga",
            "Cardiovascular Training",
            "CrossFit",
            "Sports-Specific Training",
            "Flexibility and Stretching"
          ].map((training, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
              <ListItemText primary={training} className="training-item" sx={{ color: theme === 'dark' ? '#ccc' : '#666' }} />
            </ListItem>
          ))}
        </List>
    </Container>
  );
}

export default Training;
