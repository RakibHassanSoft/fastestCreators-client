import React from "react";
import { FaStar } from "react-icons/fa"; // For rating stars

const GigTitle = (props) => {
  const {title, owner} = props;
  const {bio,image,name} = owner
 
    const rating = 4; // Rating out of 5

  return (
    <div className="  bg-white rounded-lg ">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center text-green-800 mb-4">
        {title}
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt="Gig"
          className="w-32 h-32 object-cover rounded-full border-4 border-green-500 shadow-lg"
        />
      </div>

      {/* Name and Rating */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-green-700 mb-2">{name}</h2>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < rating ? "text-yellow-500" : "text-gray-300"
              } text-xl`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center">
        High-quality video editing with fast delivery and customizable packages. Tailored to your specific needs.
      </p>

      
    </div>
  );
};

export default GigTitle;
