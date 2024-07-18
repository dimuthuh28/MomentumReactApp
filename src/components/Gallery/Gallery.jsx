import React, { useContext } from "react";
import { Container, Typography, Box, Grid, TextField, Button } from "@mui/material";
import { ThemeContext } from "../Themes/ThemeContext";
import "./Gallery.css";

function Gallery() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container maxWidth="md" sx={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', padding: '20px', color: theme === 'dark' ? '#fff' : '#333' }} className="gallery-container">
      <Box className="gallery-box">
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold', color: theme === 'dark' ? '#fff' : '#333' }} className="gallery-title">
          Gallery
        </Typography>
        <Grid container spacing={2} className="gallery-images">
          {[1, 2, 3, 4, 5].map((num) => (
            <Grid item xs={12} sm={4} key={num}>
              <img src={`/Gallery/g${num}.jpg`} alt={`g${num}`} className="gallery-img" />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="signup-box" sx={{ backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" gutterBottom sx={{ color: theme === 'dark' ? '#fff' : '#333' }}>
          Stay Updated
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: theme === 'dark' ? '#ccc' : '#666' }}>
          Stay updated with the latest fitness tips, exclusive offers, and exciting events by subscribing to our email list. Receive personalized workout plans, nutritional advice, and motivational content straight to your inbox. Don't miss out on your journey to a healthier lifestyle – sign up today!
        </Typography>
        <form>
          <TextField
            type="email"
            name="email"
            label="Your Email"
            variant="outlined"
            margin="dense"
            fullWidth
            required
            className="email-input"
            InputProps={{
              style: { backgroundColor: theme === 'dark' ? '#666' : '#fff' }
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Gallery;
