// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchTransactions = (month, page = 1, perPage = 10, search = '') => {
  return axios.get(`${API_URL}/transactions`, {
    params: { month, page, perPage, search }
  });
};

export const fetchStatistics = (month) => {
  return axios.get(`${API_URL}/statistics`, {
    params: { month }
  });
};

export const fetchBarChart = (month) => {
  return axios.get(`${API_URL}/bar-chart`, {
    params: { month }
  });
};

export const fetchPieChart = (month) => {
  return axios.get(`${API_URL}/pie-chart`, {
    params: { month }
  });
};

export const fetchCombined = (month) => {
  return axios.get(`${API_URL}/combined`, {
    params: { month }
  });
};
