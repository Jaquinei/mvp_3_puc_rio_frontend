import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <h2>Ticket List</h2>
      {filteredTickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="ticket-list">
          {filteredTickets.map(ticket => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
