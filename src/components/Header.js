import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
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
    <header style={{ background: 'linear-gradient(135deg, #6e8efb, #a777e3)', padding: '1rem', color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>My React App</h1>
      <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search Tickets"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            marginRight: '0.5rem'
          }}
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<SearchIcon />} sx={{ backgroundColor: '#4a4a4a', color: 'white' }}>
          Search
        </Button>
      </Box>
    </header>
  );
};

export default Header;
