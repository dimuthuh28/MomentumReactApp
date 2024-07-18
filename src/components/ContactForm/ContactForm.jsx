import React, { useState, useEffect, useContext, useMemo } from "react";
import { TextField, Button, Container, Typography, Box, Grid } from "@mui/material";
import "./ContactForm.css";
import { ThemeContext } from "../Themes/ThemeContext";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  // Memoize initialValues to prevent re-evaluation on every render
  const initialValues = useMemo(() => ({ name: "", email: "", message: "" }), []);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      console.log(formValues);

      setFormValues(initialValues); 
      setIsSubmit(false);
    }
  }, [formErrors, formValues, initialValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.length < 4) {
      errors.message = "Message must be at least 4 characters long";
    }

    return errors;
  };

  return (
    <Container maxWidth="sm" className={`form-container ${theme === 'dark' ? 'form-container-dark' : ''}`}>
      <Box>
        <Typography variant="h5" className={`form-title ${theme === 'dark' ? 'form-title-dark' : ''}`}>Contact Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                className={`form-input ${theme}`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                className={`form-input ${theme}`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="dense"
                label="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                error={!!formErrors.message}
                helperText={formErrors.message}
                multiline
                rows={4}
                className={`form-input ${theme}`}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={`submit-button ${theme === 'dark' ? 'submit-button-dark' : ''}`}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
