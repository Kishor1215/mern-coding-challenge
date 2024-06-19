// routes/pieChart.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/pie-chart', async (req, res) => {
  const { month } = req.query;

  const filter = {
    dateOfSale: {
      $gte: new Date(`${month}-01`),
      $lt: new Date(`${month}-31`)
    }
  };

  const pieChartData = await Transaction.aggregate([
    { $match: filter },
    { $group: { _id: '$category', count: { $sum: 1 } } }
  ]);

  res.json(pieChartData);
});

module.exports = router;
