import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import MediumPriorityIcon from '@mui/icons-material/Error';
import HighPriorityIcon from '@mui/icons-material/PriorityHigh';
import { format } from 'date-fns';
import TicketForm from './TicketForm';

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

const Ticket = ({ ticket, onDelete, onEdit, onTitleClick }) => {
  const [open, setOpen] = useState(false);

  const [editFormData, setEditFormData] = useState(null);

  const handleOpen = (item) =>{
    console.log('Editing ticket:', item);

      setEditFormData({
      ...item,
      startDate: item.startDate ? new Date(item.startDate) : null,
      endDate: item.endDate ? new Date(item.endDate) : null,
    });

    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (formData) => {
    onEdit({ ...ticket, ...formData });
    handleClose();
  };

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ cursor: onTitleClick ? 'pointer' : 'default', textDecoration: onTitleClick ? 'underline' : 'none' }}
          onClick={onTitleClick}
        >
          {ticket.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Product:</strong> {ticket.product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Type:</strong> {ticket.type}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Priority:</strong>
          </Typography>
            {getPriorityIcon(ticket.priority)}
          <Typography variant="body2" color="text.secondary">
            {ticket.priority}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Start Date:</strong> {ticket.startDate ? format(new Date(ticket.startDate), 'dd/MM/yyyy') : 'N/A'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>End Date:</strong> {ticket.endDate ? format(new Date(ticket.endDate), 'dd/MM/yyyy') : 'N/A'}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Tooltip title="Edit Ticket">
          <IconButton aria-label="edit" onClick={() => handleOpen(ticket)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Ticket">
          <IconButton aria-label="delete" onClick={() => onDelete(ticket.id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Ticket</DialogTitle>
        <DialogContent>
           {editFormData && (
            <TicketForm
              onSubmit={handleFormSubmit}
              formData={editFormData}
              setFormData={setEditFormData}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Ticket;
