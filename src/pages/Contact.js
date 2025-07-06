import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Save contact form data to local storage
    localStorage.setItem('contactForm', JSON.stringify(formData));
    setOpen(true);
  };

  // Create a custom Alert for blue color
  const BlueAlert = React.forwardRef(function BlueAlert(props, ref) {
    return (
      <MuiAlert
        elevation={6}
        ref={ref}
        variant="filled"
        {...props}
        sx={{
          mb: 4,
          backgroundColor: '#1976d2', // Material-UI blue
          color: '#fff',
          justifyContent: 'center',
          width: '100%',
        }}
      />
    );
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              We'd love to hear from you! Please fill out the form below to get in touch with us.
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'botton', horizontal: 'center' }} // Centered
      >
        <BlueAlert onClose={() => setOpen(false)} severity="info">
          Contact data was successfully sent!
        </BlueAlert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
