import axios from 'axios';

const API = axios.create({
  baseURL: 'https://suka-charitable-trust-full-backend.onrender.com',
  withCredentials: true, // if you're using cookies for auth
});

export default API;
