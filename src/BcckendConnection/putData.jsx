import axiosSecure from './axiosSecure';

// Secure PUT Request (Authentication required)
const putSecureData = async (endpoint, data) => {
  try {
    const response = await axiosSecure.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating secure data:', error);
    throw error;
  }
};

export default putSecureData;
