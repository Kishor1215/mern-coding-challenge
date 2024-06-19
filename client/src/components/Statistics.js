// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../services/api';

const Statistics = ({ month }) => {
  const [stats, setStats] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

  useEffect(() => {
    fetchStatistics(month).then(response => {
      setStats(response.data);
    });
  }, [month]);

  return (
    <div>
      <h3>Statistics</h3>
      <p>Total Sale Amount: {stats.totalSaleAmount}</p>
      <p>Total Sold Items: {stats.totalSoldItems}</p>
      <p>Total Not Sold Items: {stats.totalNotSoldItems}</p>
    </div>
  );
};

export default Statistics;
