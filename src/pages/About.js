import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About this MVP
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              MVP for the Sprint 3
            </Typography>
            <Typography variant="body1" paragraph>
              This is the Minimum Viable Product (MVP) for the Ticket Management System, developed as part of the Sprint 3 project at PUC-Rio. 
            </Typography>
            <Typography variant="body1" paragraph>
              The system is designed to help users manage their tickets efficiently, providing a simple and effective way to track requests and issues.
            </Typography>
            <Typography variant="body1" paragraph>
              You can easily create, prioritize, and search for tickets. Our system ensures that you never miss an important request and can focus on delivering service.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
