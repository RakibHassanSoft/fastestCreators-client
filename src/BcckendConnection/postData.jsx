import axiosPublic from './axiosPublic';
import axiosSecure from './axiosSecure';
import axios from "axios";


// Public POST Request (No Authentication)
const postPublicData = async (endpoint, data) => {
  try {
    const response = await axiosPublic.post(endpoint, data, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error posting public data:', error);
    throw error;
  }
};


// Secure POST Request (Authentication required)
const postSecureData = async (endpoint, data) => {
  try {
    const response = await axiosSecure.post(endpoint, data,{ withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error posting secure data:', error);
    throw error;
  }
};


// Reusable function to upload images
export const uploadImages = async (files) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file); // Append each file to the FormData object
    });

    const response = await axios.post(
      "https://cloudenary-upload-api.onrender.com/files/multiple-video",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true, // Include credentials in the request
      }
    );

    // Return the uploaded file URLs
    return response.data.data; // Assumes the response contains `data` with an array of URLs
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error; // Propagate the error for the caller to handle
  }
};
// Reusable function to upload images
export const uploadSingleImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file); // Append the file to the FormData object

    console.log(formData)
    const response = await axios.post(
      "https://cloudenary-upload-api.onrender.com/files/single",
      formData, // Send FormData
      {
        headers: { "Content-Type": "multipart/form-data" },
        
      }
    );

    console.log("Upload successful:", response);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Propagate the error for the caller to handle
  }
};



export { postPublicData, postSecureData };
