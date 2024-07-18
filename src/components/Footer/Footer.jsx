import React from 'react';
import { Container, Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-content">
          <Grid item xs={12} md={4} className="footer-section">
            <Typography variant="h6" className="footer-title">About Us</Typography>
            <Typography variant="body2">
              Momentum Fitness is dedicated to providing top-notch fitness services. Our goal is to inspire and empower our members to achieve their fitness goals.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} className="footer-section">
            <Typography variant="h6" className="footer-title">Quick Links</Typography>
            <Link href="/" color="inherit" underline="none" className="footer-link">Home</Link><br />
            <Link href="/about" color="inherit" underline="none" className="footer-link">About</Link><br />
            <Link href="/contact" color="inherit" underline="none" className="footer-link">Contact</Link>
          </Grid>

          <Grid item xs={12} md={4} className="footer-section">
            <Typography variant="h6" className="footer-title">Follow Us</Typography>
            <Box className="social-icons">
              <IconButton href="https://www.facebook.com/momentumfitness" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.instagram.com/momentumfitness" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.twitter.com/momentumfitness" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.linkedin.com/company/momentumfitness" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} className="footer-bottom">
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; 2023 Momentum Fitness. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
