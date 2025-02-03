import React, { useState, useEffect } from "react";
import { FaTrophy, FaProjectDiagram, FaUsers } from "react-icons/fa"; // React Icons

const AboutCompany = () => {
  const workTogether = "/img/team-work.jpg";

  // Dynamic Data with initial values of 0
  const [data, setData] = useState({
    totalSuccess: 0,
    totalProjects: 0,
    totalBuyers: 0,
  });

  // The actual dynamic values for display
  const finalValues = {
    totalSuccess: 90,
    totalProjects: 119,
    totalBuyers: 89,
  };

  // Function to animate number increases
  const animateNumbers = (target, label) => {
    let currentValue = 0;
    let increment = Math.ceil(target / 100); // Control the speed of animation
    let interval = setInterval(() => {
      if (currentValue < target) {
        currentValue += increment;
        setData((prevData) => ({
          ...prevData,
          [label]: currentValue,
        }));
      } else {
        clearInterval(interval); // Stop when target is reached
        setData((prevData) => ({
          ...prevData,
          [label]: target, // Ensure it ends at the target value
        }));
      }
    }, 20); // Adjust the time interval for smoother animation
  };

  useEffect(() => {
    // Trigger the number animation once component mounts
    animateNumbers(finalValues.totalSuccess, "totalSuccess");
    animateNumbers(finalValues.totalProjects, "totalProjects");
    animateNumbers(finalValues.totalBuyers, "totalBuyers");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative w-full h-[500px] mt-44 mb-44">
      <img
        src="https://res.cloudinary.com/dlixbyylv/image/upload/v1737786835/OIP_me6hip.jpg"
        alt="Team Work"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="text-white text-center space-y-8 pb-16">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-10">
    About Our Company
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xl md:text-2xl">
    <div className="space-y-4 flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <FaTrophy className="text-3xl md:text-4xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Total Success</h2>
      </div>
      <p className="font-semibold text-5xl md:text-6xl lg:text-7xl">
        {data.totalSuccess}+
      </p>
    </div>
    <div className="space-y-4 flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <FaProjectDiagram className="text-3xl md:text-4xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Total Projects</h2>
      </div>
      <p className="font-semibold text-5xl md:text-6xl lg:text-7xl">
        {data.totalProjects}+
      </p>
    </div>
    <div className="space-y-4 flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <FaUsers className="text-3xl md:text-4xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Total Buyers</h2>
      </div>
      <p className="font-semibold text-5xl md:text-6xl lg:text-7xl">
        {data.totalBuyers}+
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutCompany;
