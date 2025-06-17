import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Production Automation Tool
          </Typography>
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              height: '100px', // Set a fixed height for the white area
              width: '40%', // Adjusted width
            }}
          >
           <TextField
              variant="outlined"
              size="small"
              placeholder="Search Tickets"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                width: '80%', // Adjusted width
                height: '65%', // Explicit height for the TextField
                margin: 0, // Remove margin-bottom
                alignSelf: 'center', // Ensure vertical alignment
                display: 'flex', // Ensure proper alignment
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"
                    sx={{
                        display: 'flex',
                        alignItems: 'center', // Center the icon vertically
                        justifyContent: 'center', // Center the icon horizontally
                        height: '100%', // Ensure it takes the full height of the TextField
                      }}
                    >
                    <IconButton type="submit" edge="end"
                    sx={{
                        display: 'flex',
                        alignItems: 'center', // Center the icon vertically
                        justifyContent: 'center', // Center the icon horizontally
                        marginTop: '80%', // Remove top margin
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;