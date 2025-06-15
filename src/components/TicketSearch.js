import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TicketSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex', mb: 2 }}>
      <TextField
        label="Search Tickets"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary" startIcon={<SearchIcon />}>
        Search
      </Button>
    </Box>
  );
};

export default TicketSearch;
