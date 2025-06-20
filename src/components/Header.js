import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Box,
  Tooltip,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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
              height: '100px',
              width: '40%',
              position: 'relative', // Ensure badge floats relative to this box
            }}
          >
            <Badge
              color="info"
              badgeContent={searchTerm ? 'Filtered' : null}
              sx={{
                position: 'absolute',
                top: '18%',
                right: '10%',
                zIndex: 1,
                pointerEvents: 'none', // Prevent interference with mouse events
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search Tickets"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                width: '80%',
                height: '65%',
                marginTop: 0,
                alignSelf: 'center',
                display: 'flex',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end"                  
                  >               
                    <Tooltip title="Click for search Tickets">
                      <IconButton type="submit"
                        sx={{
                          display: 'flex',
                          alignItems: 'center', // Ensures vertical alignment
                          marginTop: '50%',
                          height: '100%', // Matches the height of the TextField
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
                  marginLeft: '1rem',
                  height: '45%',
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