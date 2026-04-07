const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = 3003;

// MongoDB connection string - replace with your own URI if needed
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/lab11_db';

// ─── Connect to MongoDB ───────────────────────────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// Middleware
app.use(express.json());

// ─── CRUD Routes ─────────────────────────────────────────────────────────────

// Root - list all available routes
app.get('/', (req, res) => {
  res.json({
    message: 'Exercise 3: MongoDB CRUD API',
    endpoints: [
      'POST   /api/users         - Create a user',
      'GET    /api/users         - Get all users',
      'GET    /api/users/:id     - Get user by ID',
      'PUT    /api/users/:id     - Update user by ID',
      'DELETE /api/users/:id     - Delete user by ID',
    ],
  });
});

// CREATE - Insert a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json({ success: true, message: 'User created', data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// READ - Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// READ - Get a single user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// UPDATE - Update user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return updated doc + validate
    );
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User updated', data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE - Delete user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted', data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`MongoDB CRUD server running on http://localhost:${PORT}`);
});
