import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:3000/api/v1',  // Replace with your actual API base URL
  timeout: 10000,                      // Optional timeout for requests
});

export default axiosPublic;
