import React, { useState, useEffect } from "react";
import useService from "../../hook/useService";

const Hero = () => {
  const { data, isLoading, isError, error } = useService();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        data && data.length > 0 ? (prevSlide + 1) % data.length : 0
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [data]);

  if (isLoading) {
    return <p className="text-teal-600 text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-600 text-center">Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-gray-600 text-center">No images available.</p>;
  }

  return (
    <div className="relative h-[38rem] bg-gray-800">
      {/* Slider */}
      <div className="absolute inset-0 flex items-center justify-center">
        {data.map((item, index) => (
          <img
            key={item._id || Math.random()}
            src={item.serviceImage}
            alt={item.title || "Portfolio Image"}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl">Showcasing Creativity and Expertise</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute w-full bottom-8 flex justify-center gap-4">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-teal-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

/**
 import React from 'react';
import useAdmin from '../../hook/useAdmin';
import useAuth from '../../hooks/useAuth';
import useService from '../../hook/useService';

const Hero = () => {

    const { data, isLoading, isError, error } = useService();
    console.log(data)

    return (
        <section className="bg-gray-100 text-green-600">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Ac mattis
                        <span className="text-green-600"> senectus </span>
                        erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-800">
                        Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-white"
                        >
                            Suspendisse
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border rounded border-green-600 text-green-600"
                        >
                            Malesuada
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-evenly p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="https://th.bing.com/th?id=OIF.GP84o%2fmkw0EpVYzurCWdVw&rs=1&pid=ImgDetMain"
                        alt="Business Illustration"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

 */