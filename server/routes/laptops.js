
const express = require('express');
const router = express.Router();
const db = require('../db/config');

// GET all laptops
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM laptops ORDER BY created_at DESC');
    
    // Parse JSON images field
    const laptops = rows.map(laptop => ({
      ...laptop,
      images: JSON.parse(laptop.images)
    }));
    
    res.json(laptops);
  } catch (error) {
    console.error('Error fetching laptops:', error);
    res.status(500).json({ message: 'Failed to fetch laptops', error: error.message });
  }
});

// GET laptop by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM laptops WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    
    // Parse JSON images field
    const laptop = {
      ...rows[0],
      images: JSON.parse(rows[0].images)
    };
    
    res.json(laptop);
  } catch (error) {
    console.error('Error fetching laptop:', error);
    res.status(500).json({ message: 'Failed to fetch laptop', error: error.message });
  }
});

// CREATE new laptop
router.post('/', async (req, res) => {
  try {
    const { company, model, size, price, hdd, ram, cpu, vga, images } = req.body;
    
    // Validate required fields
    if (!company || !model || !price) {
      return res.status(400).json({ message: 'Company, model, and price are required' });
    }
    
    const imagesJSON = JSON.stringify(images);
    
    const [result] = await db.query(
      'INSERT INTO laptops (company, model, size, price, hdd, ram, cpu, vga, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [company, model, size, price, hdd, ram, cpu, vga, imagesJSON]
    );
    
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Error creating laptop:', error);
    res.status(500).json({ message: 'Failed to create laptop', error: error.message });
  }
});

// UPDATE laptop
router.put('/:id', async (req, res) => {
  try {
    const { company, model, size, price, hdd, ram, cpu, vga, images } = req.body;
    const id = req.params.id;
    
    // Validate required fields
    if (!company || !model || !price) {
      return res.status(400).json({ message: 'Company, model, and price are required' });
    }
    
    const imagesJSON = JSON.stringify(images);
    
    const [result] = await db.query(
      'UPDATE laptops SET company = ?, model = ?, size = ?, price = ?, hdd = ?, ram = ?, cpu = ?, vga = ?, images = ? WHERE id = ?',
      [company, model, size, price, hdd, ram, cpu, vga, imagesJSON, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating laptop:', error);
    res.status(500).json({ message: 'Failed to update laptop', error: error.message });
  }
});

// DELETE laptop
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM laptops WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting laptop:', error);
    res.status(500).json({ message: 'Failed to delete laptop', error: error.message });
  }
});

module.exports = router;
