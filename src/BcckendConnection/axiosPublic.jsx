import axios from 'axios';

const axiosPublic = axios.create({
 // Render server
  // baseURL: 'https://fastestcreators-server.onrender.com/api/v1',
  //Vercel server  
  // baseURL: 'https://fastest-creators-server.vercel.app/api/v1',  


  // baseURL: 'http://localhost:3000/api/v1',  



   baseURL: 'https://fastestcreators-server.onrender.com/api/v1',  
                   
});

export default axiosPublic;
