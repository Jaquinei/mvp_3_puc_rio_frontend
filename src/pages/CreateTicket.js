import React from 'react';
import { useNavigate } from 'react-router-dom';
import TicketForm from '../components/TicketForm';

const CreateTicket = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Retrieve existing tickets from local storage or initialize an empty array
    const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];

    // Add the new ticket to the array
    const newTicket = {
      id: Date.now(), // Use a simple timestamp as a unique ID
      ...formData
    };
    existingTickets.push(newTicket);

    // Save the updated array back to local storage
    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    // Redirect to the home page after successful submission
    navigate('/');

    // Optional: Show an alert or notification
    alert('Ticket created and stored in local storage!');
  };

  return (
    <div>
      <h2>Create a Ticket</h2>
      <TicketForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTicket;
