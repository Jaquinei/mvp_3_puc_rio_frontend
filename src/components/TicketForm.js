import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Container,
  Typography
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enGB } from 'date-fns/locale'; // Import locale for DAY/MONTH/YEAR format

const TicketForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    type: '',
    priority: 'Low',
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    // Check if initialData is provided and update formData only if necessary
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(prevFormData => {
        // Only update if initialData is different from current formData
        const shouldUpdate =
          prevFormData.name !== initialData.name ||
          prevFormData.product !== initialData.product ||
          prevFormData.type !== initialData.type ||
          prevFormData.priority !== initialData.priority ||
          prevFormData.startDate !== initialData.startDate ||
          prevFormData.endDate !== initialData.endDate;

        if (shouldUpdate) {
          return {
            name: initialData.name || '',
            product: initialData.product || '',
            type: initialData.type || '',
            priority: initialData.priority || 'Low',
            startDate: initialData.startDate || null,
            endDate: initialData.endDate || null,
          };
        }
        return prevFormData;
      });
    }
  }, [initialData]); // Only re-run the effect if initialData changes

  const [errors, setErrors] = useState({
    name: false,
    product: false,
    type: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: false
      }));
    }
  };

  const handleDateChange = (name, date) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: date
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: !formData.name.trim(),
      product: !formData.product.trim(),
      type: !formData.type.trim(),
    };

    setErrors(newErrors);
    isValid = !Object.values(newErrors).some(error => error);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />
        <TextField
          fullWidth
          label="Product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          margin="normal"
          required
          error={errors.product}
          helperText={errors.product ? "Product is required" : ""}
        />
        <TextField
          fullWidth
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          margin="normal"
          required
          error={errors.type}
          helperText={errors.type ? "Type is required" : ""}
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
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enGB}>
          <DatePicker
            label="Start Date"
            value={formData.startDate}
            onChange={(date) => handleDateChange('startDate', date)}
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" required />
            )}
          />
          <DatePicker
            label="End Date"
            value={formData.endDate}
            onChange={(date) => handleDateChange('endDate', date)}
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" required />
            )}
          />
        </LocalizationProvider>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default TicketForm;
