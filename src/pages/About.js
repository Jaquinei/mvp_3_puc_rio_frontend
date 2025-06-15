import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Welcome to Our Ticket Management System
            </Typography>
            <Typography variant="body1" paragraph>
              Our Ticket Management System is designed to help you efficiently manage and track tickets. Whether you're handling customer support requests, bug reports, or any other type of tickets, our system provides the tools you need to stay organized and productive.
            </Typography>
            <Typography variant="body1" paragraph>
              With a user-friendly interface and powerful features, you can easily create, prioritize, and search for tickets. Our system ensures that you never miss an important request and can focus on delivering excellent service.
            </Typography>
            <Typography variant="body1">
              Thank you for choosing our Ticket Management System. We are committed to providing you with the best tools to manage your tickets effectively.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
