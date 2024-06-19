// src/components/PieChart.js
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchPieChart } from '../services/api';

const PieChart = ({ month }) => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    fetchPieChart(month).then(response => {
      setPieData(response.data);
    });
  }, [month]);

  const data = {
    labels: pieData.map(item => item._id),
    datasets: [
      {
        data: pieData.map(item => item.count),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Pie Chart</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
