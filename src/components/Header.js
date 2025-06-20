import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Box,
  Tooltip, // Import Tooltip
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear'; // Import ClearIcon


const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    navigate('/'); // Navigate to the home page after search
  };

  const handleClearFilter = () => {
    setSearchTerm(''); // Clear the search term
    onSearch(''); // Reset the filter
    navigate('/'); // Navigate to the home page
  };


  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
                    <Tooltip title="Click for search Tickets">
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
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
             <Tooltip title="Clear Filter">
              <IconButton
                onClick={handleClearFilter}
                sx={{
                  marginLeft: '1rem', // Add spacing between the button and the TextField
                  height: '45%', // Match the height of the TextField
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;