import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Container,
  Typography
} from '@mui/material';

const TicketForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low'
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      title: !formData.title.trim(),
      description: !formData.description.trim(),
    };

    setErrors(newErrors);

    // Check if there are any errors
    isValid = !Object.values(newErrors).some(error => error);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        priority: 'Low'
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            required
            error={errors.title}
            helperText={errors.title ? "Title is required" : ""}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
            error={errors.description}
            helperText={errors.description ? "Description is required" : ""}
          />
          <TextField
            select
            fullWidth
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            margin="normal"
            required
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TicketForm;
