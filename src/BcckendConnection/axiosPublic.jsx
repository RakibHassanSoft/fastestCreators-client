import axios from 'axios';

const axiosPublic = axios.create({



  //vercel
   baseURL: 'https://fastest-creators-server.vercel.app/api/v1',  
   // baseURL: 'http://localhost:3000/api/v1',  
                   
});

export default axiosPublic;
