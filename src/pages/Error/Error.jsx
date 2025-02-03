import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'; // Import custom CSS for animations

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative px-6 sm:px-12 lg:px-24 overflow-hidden ">
      <div className="text-center w-full bg-transparent text-gray-800 rounded-full  p-8 z-20 shadow-xl ">
        {/* 404 Title with Animation */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[23rem] font-extrabold text-green-500 mb-6 animate-crash">
          <span className="animate-shatter">4</span>
          <span className="animate-shatter delay-200">0</span>
          <span className="animate-shatter delay-400">4</span>
        </h1>

        {/* Description */}
        <p className="text-xl font-medium mb-6 text-gray-600 animate-fadeIn delay-600">
          We can't seem to find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Main Button - Go Back */}
        <div className="mb-8 animate-fadeIn delay-800">
          <Link to="/">
            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>

      {/* Balls */}
    
      
      <div className="absolute w-12 h-12 bg-sky-300 rounded-full ball-animation-top"></div>
      <div className="absolute w-12 h-12 bg-yellow-500 rounded-full ball-animation-bottom"></div>
      <div className="absolute w-12 h-12 bg-red-600 rounded-full ball-animation-top-left"></div>
      <div className="absolute w-12 h-12 bg-blue-600 rounded-full ball-animation-top-right"></div>
      <div className="absolute w-12 h-12 bg-purple-700 rounded-full ball-animation-bottom-left"></div>
      <div className="absolute w-12 h-12 bg-orange-600 rounded-full ball-animation-bottom-right"></div>
    </div>
  );
};

export default Error;
