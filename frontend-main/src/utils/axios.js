import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', 
  withCredentials: true, // Ensure credentials are sent with requests
});

export default instance;
