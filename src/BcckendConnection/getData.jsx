import axiosPublic from './axiosPublic';
import axiosSecure from './axiosSecure';

// Public GET Request (No Authentication)
const getPublicData = async (endpoint) => {
  try {
    const response = await axiosPublic.get(endpoint,{ withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching public data:', error);
    throw error;
  }
};

// Secure GET Request (Authentication required)
const getSecureData = async (endpoint) => {
  try {
    const response = await axiosSecure.get(endpoint,{ withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching secure data:', error);
    throw error;
  }
};

export { getPublicData, getSecureData };
