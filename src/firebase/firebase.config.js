// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdn-_RmXV72epM0oAK0jTaieZetk-pxxw",
  authDomain: "fastestcreators-de6f3.firebaseapp.com",
  projectId: "fastestcreators-de6f3",
  storageBucket: "fastestcreators-de6f3.firebasestorage.app",
  messagingSenderId: "231389454910",
  appId: "1:231389454910:web:73d0c38371b6c241efa76f",
  measurementId: "G-H9NVYBX4JX"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);