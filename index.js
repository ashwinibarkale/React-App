const express = require('express');
const app = express();
const port = 5000;

// Define a sample data object
const jsonData = {
  intensity: 8,
  likelihood: 7,
  relevance: 9,
  year: 2022,
  country: 'United States',
  topics: ['Technology', 'Finance', 'Healthcare'],
  region: 'North America',
  city: 'New York'
};

// Define an API endpoint to retrieve the data
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
