// src/components/Combined.js
import React, { useState, useEffect } from 'react';
import { fetchCombined } from '../services/api';

const Combined = ({ month }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCombined(month).then(response => {
      setData(response.data);
    });
  }, [month]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3>Combined Data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Combined;
