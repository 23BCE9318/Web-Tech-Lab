const express = require('express');
const router = express.Router();

// In-memory data store
let products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 499.99, category: 'Electronics' },
];
let nextId = 3;

// GET all products
router.get('/', (req, res) => {
  res.json({ success: true, data: products });
});

// GET product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

// POST - create a new product
router.post('/', (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Name and price are required' });
  }
  const newProduct = { id: nextId++, name, price, category };
  products.push(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

// PUT - update product by ID
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json({ success: true, data: products[index] });
});

// DELETE - delete product by ID
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  const deleted = products.splice(index, 1);
  res.json({ success: true, message: 'Product deleted', data: deleted[0] });
});

module.exports = router;
