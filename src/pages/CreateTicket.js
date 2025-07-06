import React, { useState } from 'react';
import { getItemFromNotion, mapPrioridadeToString } from '../assets/js/scripts';
import { useNavigate } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import Snackbar from '../components/Snackbar';

import {  
  Typography  
} from '@mui/material';

const CreateTicket = () => {
  const navigate = useNavigate();
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [formData, setFormData] = useState({  
    id: '',
    nome: '',
    produto: '',
    prioridade: '',
    dataInicio: '',
    dataFim: '',
    tipo: ''
  });

  const handleSubmit = (formData) => {
    const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    // Check if a ticket with the same id exists
    const existingIndex = existingTickets.findIndex(ticket => ticket.id === formData.id);
    if (existingIndex !== -1) {
      // Replace the existing ticket
      existingTickets[existingIndex] = { ...formData };    
    } else {
      const newTicket = {
        id: Date.now(),
        ...formData
      };  
      existingTickets.push(newTicket);
    }

    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    // Set snackbar message
    setSnackbarMessage('Ticket created and stored in local storage!');

    // Redirect to the home page after successful submission
    setTimeout( ()=> {navigate('/')}, 5000);
  };

  async function handleGetDataFromNotion() {
    const item = await getItemFromNotion();
    if (item) {
      setFormData({
        id: item.id || '',
        name: item.nome || '',
        product: item.produto || '',
        priority: mapPrioridadeToString(item.prioridade) || '',
        startDate: item.dataInicio ? new Date(item.dataInicio) : null,
        endDate: item.dataFim ? new Date(item.dataFim) : null,
        type: item.tipo || ''
      });
    }
  };

  return (
    <div>  
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Create Ticket
        </Typography>
      <TicketForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
      <Snackbar message={snackbarMessage} />
      <button
        type="button"
        className="floating-notion-btn"
        onClick={handleGetDataFromNotion}
      >
        Get data from Notion
      </button>
      <input
        type="text"
        value={formData.nome}
        onChange={e => setFormData({ ...formData, nome: e.target.value })}
      />
    {

    }
    </div>
  );
};

export default CreateTicket;
