import axios from 'axios';

const axiosSecure = axios.create({
  
  
  baseURL: 'https://fastest-creators-server.vercel.app/api/v1',  
  // baseURL: 'http://localhost:3000/api/v1',                     
  withCredentials: true,               
});

// Add a response interceptor to handle unauthorized access (401)
axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized. Please log in again.');
      
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
