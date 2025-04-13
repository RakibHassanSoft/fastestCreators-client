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

  // Loading Skeleton
  if (isLoading) {
    return (
      <section className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg mb-6">
            We offer a range of services to help your business succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Skeleton Loader */}
            <div className="flex flex-col items-center space-y-4 animate-pulse">
              <div className="w-20 h-20 bg-green-200 rounded-full mb-2"></div>
              <div className="w-32 h-6 bg-green-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-center space-y-4 animate-pulse">
              <div className="w-20 h-20 bg-green-200 rounded-full mb-2"></div>
              <div className="w-32 h-6 bg-green-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-center space-y-4 animate-pulse">
              <div className="w-20 h-20 bg-green-200 rounded-full mb-2"></div>
              <div className="w-32 h-6 bg-green-200 rounded-md"></div>
            </div>
            <div className="flex flex-col items-center space-y-4 animate-pulse">
              <div className="w-20 h-20 bg-green-200 rounded-full mb-2"></div>
              <div className="w-32 h-6 bg-green-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If data is available, render the actual content
  if (!data || data.length === 0) {
    return <p className="text-gray-600 text-center">No images available.</p>;
  }
  
  return (
    <div className="relative h-64 md:h-80 lg:h-screen bg-gray-800">
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl">
          Showcasing Creativity and Expertise
        </p>
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
