import React from 'react';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import MediumPriorityIcon from '@mui/icons-material/Error';
import HighPriorityIcon from '@mui/icons-material/PriorityHigh';
import { Card, CardContent, Typography } from '@mui/material';

const getPriorityIcon = (priority) => {
  switch (priority.toLowerCase()) {
    case 'low':
      return <LowPriorityIcon style={{ color: '#4CAF50' }} />;
    case 'medium':
      return <MediumPriorityIcon style={{ color: '#FFC107' }} />;
    case 'high':
      return <HighPriorityIcon style={{ color: '#F44336' }} />;
    default:
      return null;
  }
};

const Ticket = ({ ticket }) => {
  return (
    <Card className="ticket">
      <CardContent>
        <Typography variant="h5" component="h2">
          {ticket.title}
        </Typography>
        <Typography color="textSecondary">
          {ticket.description}
        </Typography>
        <Typography variant="body2" component="p" style={{ display: 'flex', alignItems: 'center' }}>
          Priority: {getPriorityIcon(ticket.priority)} {ticket.priority}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ticket;
