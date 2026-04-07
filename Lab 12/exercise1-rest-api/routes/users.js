const express = require('express');
const router = express.Router();

// In-memory data store
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];
let nextId = 3;

// GET all users
router.get('/', (req, res) => {
  res.json({ success: true, data: users });
});

// GET user by ID (route parameter)
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
});

// POST - create a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required' });
  }
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});

// PUT - update user by ID
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'User not found' });
  users[index] = { ...users[index], ...req.body };
  res.json({ success: true, data: users[index] });
});

// DELETE - delete user by ID
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'User not found' });
  const deleted = users.splice(index, 1);
  res.json({ success: true, message: 'User deleted', data: deleted[0] });
});

module.exports = router;
