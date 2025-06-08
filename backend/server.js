const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mern-crud');

// Get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create user
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Update user
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
});

// Delete user
app.delete('/users/:id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.listen(5000, () => console.log('Server running on port 5000'));
