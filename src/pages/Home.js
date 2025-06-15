import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Alert
} from '@mui/material';
import Ticket from '../components/Ticket';

const Home = ({ searchTerm }) => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTickets(tickets);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(lowercasedSearchTerm) ||
      ticket.description.toLowerCase().includes(lowercasedSearchTerm) ||
      ticket.priority.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredTickets(filtered);
  }, [searchTerm, tickets]);

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== id);
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
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Ticket ticket={ticket} onDelete={handleDelete} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
