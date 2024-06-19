// routes/statistics.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

router.get('/statistics', async (req, res) => {
  const { month } = req.query;

  const filter = {
    dateOfSale: {
      $gte: new Date(`${month}-01`),
      $lt: new Date(`${month}-31`)
    }
  };

  const totalSaleAmount = await Transaction.aggregate([
    { $match: filter },
    { $group: { _id: null, total: { $sum: '$price' } } }
  ]);

  const totalSoldItems = await Transaction.countDocuments({ ...filter, sold: true });
  const totalNotSoldItems = await Transaction.countDocuments({ ...filter, sold: false });

  res.json({
    totalSaleAmount: totalSaleAmount[0] ? totalSaleAmount[0].total : 0,
    totalSoldItems,
    totalNotSoldItems
  });
});

module.exports = router;
