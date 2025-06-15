import React, { useState } from 'react';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing tickets from local storage or initialize an empty array
    const existingTickets = JSON.parse(localStorage.getItem('tickets')) || [];

    // Add the new ticket to the array
    const newTicket = {
      id: Date.now(), // Use a simple timestamp as a unique ID
      ...formData
    };
    existingTickets.push(newTicket);

    // Save the updated array back to local storage
    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    // Log the form data to the console
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      priority: 'Low'
    });

    alert('Ticket created and stored in local storage!');
  };

  return (
    <div>
      <h2>Create a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTicket;
