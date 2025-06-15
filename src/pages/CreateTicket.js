import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import Snackbar from '../components/Snackbar';

const CreateTicket = () => {
  const navigate = useNavigate();
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = (formData) => {
    const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const newTicket = {
      id: Date.now(),
      ...formData
    };
    existingTickets.push(newTicket);
    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    // Set snackbar message
    setSnackbarMessage('Ticket created and stored in local storage!');

    // Redirect to the home page after successful submission
   setTimeout( ()=> {navigate('/')}, 5000);
  };

  return (
    <div>
      <h2>Create a Ticket</h2>
      <TicketForm onSubmit={handleSubmit} />
      <Snackbar message={snackbarMessage} />
    </div>
  );
};

export default CreateTicket;
