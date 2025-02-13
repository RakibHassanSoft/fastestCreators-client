import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Animated Background - Optional, but adds a lot of visual flair */}
      <div className="absolute inset-0 bg-cover bg-center animate-pulse" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?grayscale')" }}></div> {/* Grayscale Background Image */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="bg-white/70 p-12 rounded-3xl shadow-xl backdrop-blur-lg backdrop-filter max-w-md">
          <h1 className="text-center font-extrabold text-black tracking-wide mb-6 drop-shadow-lg text-7xl">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-8">Oops! Page Not Found</p>
          <p className="text-gray-600 mb-12 text-center">The page you're looking for doesn't exist or has been moved.</p>
        <div className='flex justify-center items-center gap-4'>
        <button
            onClick={goBack}
            className="flex justify-center items-center gap-4 w-1/2 px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-3xl transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <FaBackward/>
            Go Back
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Error;