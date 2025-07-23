const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const { Op } = require('sequelize');

// GET all products with optional search and sort
router.get('/', async (req, res) => {
  try {
    const { search, sort } = req.query;
    let where = {};
    let order = [];

    if (search) {
      where.title = { [Op.iLike]: `%${search}%` };
    }

    if (sort === 'name') order.push(['title', 'ASC']);
    else if (sort === 'price-low') order.push(['price', 'ASC']);
    else if (sort === 'price-high') order.push(['price', 'DESC']);

    const products = await Product.findAll({ where, order });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// POST: Create a new product
router.post('/', async (req, res) => {
  try {
    const { title, image, price, quantity, category, description } = req.body;
    const newProduct = await Product.create({ title, image, price, quantity, category, description });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to create product' });
  }
});

// PUT: Update a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update product' });
  }
});

// DELETE: Remove a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

module.exports = router;
