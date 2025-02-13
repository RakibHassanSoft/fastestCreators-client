import axiosSecure from './axiosSecure';

// Secure DELETE Request (Authentication required)
const deleteSecureData = async (endpoint) => {
  try {
    const response = await axiosSecure.delete(endpoint);
    return response;
  } catch (error) {
    console.error('Error deleting secure data:', error);
    throw error;
  }
};

export default deleteSecureData;
