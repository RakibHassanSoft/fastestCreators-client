import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-6 max-w-lg w-full bg-green-500 text-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-4">Oops! Page not found.</p>
        <p className="text-xl mb-6">It seems the page you’re looking for doesn't exist or has been moved. 😕</p>
        <button
        
          className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition-colors duration-300"
        >
         <Link to={'/'}> Go Back Home 🏡</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
