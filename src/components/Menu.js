import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>    
        <li><Link to="/create-ticket">Create Ticket</Link></li>    
      </ul>
    </nav>
  );
};

export default Menu;
