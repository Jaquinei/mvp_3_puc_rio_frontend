import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Alert,
  Snackbar
} from '@mui/material';
import Ticket from '../components/Ticket';
import MuiAlert from '@mui/material/Alert';

const BlueAlert = React.forwardRef(function BlueAlert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
      sx={{
        backgroundColor: '#1976d2',
        color: '#fff',
        justifyContent: 'center',
        width: '100%',
      }}
    />
  );
});

const Home = ({ searchTerm }) => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
    setFilteredTickets(storedTickets);
  }, []);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      setFilteredTickets(tickets);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();
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
    setSnackbarOpen(true);
    setSelectedTicket(null); // If the selected ticket is deleted, go back to list
  };

  const handleEdit = (updatedTicket) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    setSnackbarOpen(true);
  };

  // Handler for clicking the ticket title
  const handleTitleClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  // Handler to go back to the list
  const handleBackToList = () => {
    setSelectedTicket(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ mb: 8, zIndex: (theme) => theme.zIndex.drawer + 2 }}
      >
        <BlueAlert onClose={() => setSnackbarOpen(false)} severity="info">
          Ticket updated successfully!
        </BlueAlert>
      </Snackbar>

      <Typography variant="h4" component="h1" sx={{ flexGrow: 1, mb: 2 }}>
        {searchTerm ? `Ticket List - filtered for "${searchTerm}"` : 'Ticket List'}
      </Typography>

      {selectedTicket ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Ticket
              ticket={selectedTicket}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onTitleClick={null}
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{ mt: 2, cursor: 'pointer', textDecoration: 'underline' }}
              onClick={handleBackToList}
            >
              ← Back to ticket list
            </Typography>
          </Grid>
        </Grid>
      ) : filteredTickets.length === 0 ? (
        <Alert severity="info" sx={{ width: '100%', mt: 2 }}>
          {searchTerm ? `No tickets found for "${searchTerm}"` : 'No tickets found.'}
        </Alert>
      ) : (
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          {filteredTickets.map(ticket => (
            <Grid item xs={12} sm={6} key={ticket.id} sx={{ minWidth: 400 }}>
              <Ticket
                ticket={ticket}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onTitleClick={() => handleTitleClick(ticket)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
