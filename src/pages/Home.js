import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Alert
} from '@mui/material';
import Ticket from '../components/Ticket';

const Home = ({ searchTerm }) => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
    setFilteredTickets(storedTickets);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTickets(tickets);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = tickets.filter(ticket =>
      (ticket.name?.toLowerCase().includes(lowercasedSearchTerm) || false) ||
      (ticket.product?.toLowerCase().includes(lowercasedSearchTerm) || false) ||
      (ticket.type?.toLowerCase().includes(lowercasedSearchTerm) || false) ||
      (ticket.priority?.toLowerCase().includes(lowercasedSearchTerm) || false)
    );
    setFilteredTickets(filtered);
  }, [searchTerm, tickets]);

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const handleEdit = (updatedTicket) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Ticket List
      </Typography>
      {filteredTickets.length === 0 ? (
        <Alert severity="info" sx={{ width: '100%' }}>
          No tickets found.
        </Alert>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {filteredTickets.map(ticket => (
            <Grid item xs={12} sm={6} key={ticket.id} sx={{ minWidth: 400 }}>
              <Ticket ticket={ticket} onDelete={handleDelete} onEdit={handleEdit} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
