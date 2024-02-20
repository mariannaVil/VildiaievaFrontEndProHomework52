import axios from 'axios';

const api = axios.create({
  baseURL: 'https://65b907a7b71048505a8a0645.mockapi.io',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
