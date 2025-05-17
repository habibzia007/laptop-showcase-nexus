
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const laptopRoutes = require('./routes/laptops');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/laptops', laptopRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Laptop Showcase API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
