import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
   <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          404 - Page Not Found
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom align="center ">
              The page you are looking for does not exist.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>  
  );
};

export default NotFound;