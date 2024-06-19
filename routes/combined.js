// routes/combined.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/combined', async (req, res) => {
  const { month } = req.query;
  try {
    const [transactions, statistics, barChart, pieChart] = await Promise.all([
      axios.get(`http://localhost:5000/transactions?month=${month}`),
      axios.get(`http://localhost:5000/statistics?month=${month}`),
      axios.get(`http://localhost:5000/bar-chart?month=${month}`),
      axios.get(`http://localhost:5000/pie-chart?month=${month}`)
    ]);

    res.json({
      transactions: transactions.data,
      statistics: statistics.data,
      barChart: barChart.data,
      pieChart: pieChart.data
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
