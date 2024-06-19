// src/components/BarChart.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchBarChart } from '../services/api';

const BarChart = ({ month }) => {
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    fetchBarChart(month).then(response => {
      setBarData(response.data);
    });
  }, [month]);

  const data = {
    labels: barData.map(item => item.range),
    datasets: [
      {
        label: '# of Items',
        data: barData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Bar Chart</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
