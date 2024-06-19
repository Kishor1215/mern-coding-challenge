// routes/transactions.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/transactions', async (req, res) => {
  const { page = 1, perPage = 10, search = '', month } = req.query;
  const regex = new RegExp(search, 'i');
  const filter = {
    dateOfSale: {
      $gte: new Date(`${month}-01`),
      $lt: new Date(`${month}-31`)
    },
    $or: [
      { title: regex },
      { description: regex },
      { price: regex }
    ]
  };

  const transactions = await Transaction.find(filter)
    .skip((page - 1) * perPage)
    .limit(parseInt(perPage));

  res.json(transactions);
});

module.exports = router;
