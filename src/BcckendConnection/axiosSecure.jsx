import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000/api/v1',  // Replace with your actual API base URL
  timeout: 10000,                      // Optional timeout for requests
  withCredentials: true,               // Enable sending cookies with requests
});

// Add a response interceptor to handle unauthorized access (401)
axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized. Please log in again.');
      // Redirect to login page or handle it accordingly
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
