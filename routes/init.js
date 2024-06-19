// routes/init.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Transaction = require('../models/Transaction');

router.get('/init', async (req, res) => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.insertMany(data);
    res.status(200).send('Database initialized with data.');
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).send('Error initializing database.');
  }
});

module.exports = router;
