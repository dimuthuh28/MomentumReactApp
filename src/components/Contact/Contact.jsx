import React, { useContext, useEffect } from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import ContactForm from '../ContactForm/ContactForm';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';
import { ThemeContext } from "../Themes/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" className="contact-container">
        <Typography variant="h4" component="h1" gutterBottom className="contact-title">
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph className="contact-description">
          We'd love to hear from you! Reach out to us using the contact information below or fill out our contact form.
        </Typography>

        <Grid container spacing={4} className="contact-info">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1">
              Momentum Fitness Center<br />
              456 Fitness Way<br />
              Cityville, Stateville 12345<br />
              United States
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Phone Numbers
            </Typography>
            <Typography variant="body1">
              Main Line: <Link href="tel:+15551234567">+1 (555) 123-4567</Link><br />
              Customer Service: <Link href="tel:+15559876543">+1 (555) 987-6543</Link><br />
              Membership Inquiries: <Link href="tel:+15552345678">+1 (555) 234-5678</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1">
              General Inquiries: <Link href="mailto:info@momentumfitness.com">info@momentumfitness.com</Link><br />
              Support: <Link href="mailto:support@momentumfitness.com">support@momentumfitness.com</Link><br />
              Membership: <Link href="mailto:membership@momentumfitness.com">membership@momentumfitness.com</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body1">
              Stay connected with us through social media:<br />
              <Link href="https://www.facebook.com/momentumfitness" target="_blank" rel="noopener noreferrer">Facebook</Link> | 
              <Link href="https://www.instagram.com/momentumfitness" target="_blank" rel="noopener noreferrer">Instagram</Link> | 
              <Link href="https://www.twitter.com/momentumfitness" target="_blank" rel="noopener noreferrer">Twitter</Link> | 
              <Link href="https://www.linkedin.com/company/momentumfitness" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
