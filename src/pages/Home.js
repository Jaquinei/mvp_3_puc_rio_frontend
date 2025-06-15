import React, { useState, useEffect } from 'react';
import Ticket from '../components/Ticket';

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Retrieve tickets from local storage when the component mounts
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
  }, []);

  return (
    <div>
      <h2>Ticket List</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="ticket-list">
          {tickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
