import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const Menu = () => {
  return (
    <nav>
      <List style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
        <ListItem component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon style={{ color: 'white' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon style={{ color: 'white' }}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon style={{ color: 'white' }}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem component={Link} to="/create-ticket" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemIcon style={{ color: 'white' }}>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Create Ticket" />
        </ListItem>
      </List>
    </nav>
  );
};

export default Menu;
