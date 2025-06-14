import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default Ticket;
