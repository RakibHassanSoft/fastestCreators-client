import React, { useState, useEffect } from "react";
import { FaTrophy, FaProjectDiagram, FaUsers } from "react-icons/fa";

const AboutCompany = () => {
  const [data, setData] = useState({
    totalSuccess: 0,
    totalProjects: 0,
    totalBuyers: 0,
  });

  const finalValues = {
    totalSuccess: 99,
    totalProjects: 11,
    totalBuyers: 5,
  };

  const animateNumbers = (target, label) => {
    let currentValue = 0;
    const increment = Math.ceil(target / 80);
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= target) {
        clearInterval(interval);
        currentValue = target;
      }
      setData((prevData) => ({
        ...prevData,
        [label]: currentValue,
      }));
    }, 16);
  };

  useEffect(() => {
    animateNumbers(finalValues.totalSuccess, "totalSuccess");
    animateNumbers(finalValues.totalProjects, "totalProjects");
    animateNumbers(finalValues.totalBuyers, "totalBuyers");
  }, []);

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      <img
        src="https://res.cloudinary.com/dlixbyylv/image/upload/v1737786835/OIP_me6hip.jpg"
        alt="Team Work"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Build Experiences, Not Just Projects
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          At Fastest Creators, we transform creative ideas into scalable digital
          products. With passion, precision, and a results-driven approach, we
          serve clients globally with design, development, animation, and editing services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Success */}
          <div className="bg-gray-900 hover:bg-green-600 transition duration-300 p-8 rounded-2xl shadow-lg text-white">
            <div className="text-5xl mb-4 text-green-400">
              <FaTrophy />
            </div>
            <h3 className="text-lg font-semibold mb-1">Project Success Rate</h3>
            <p className="text-4xl font-bold">{data.totalSuccess}%</p>
          </div>

          {/* Projects */}
          <div className="bg-gray-900 hover:bg-blue-600 transition duration-300 p-8 rounded-2xl shadow-lg text-white">
            <div className="text-5xl mb-4 text-blue-400">
              <FaProjectDiagram />
            </div>
            <h3 className="text-lg font-semibold mb-1">Projects Delivered</h3>
            <p className="text-4xl font-bold">{data.totalProjects}+</p>
          </div>

          {/* Buyers */}
          <div className="bg-gray-900 hover:bg-yellow-500 transition duration-300 p-8 rounded-2xl shadow-lg text-white">
            <div className="text-5xl mb-4 text-yellow-400">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold mb-1">Trusted Clients</h3>
            <p className="text-4xl font-bold">{data.totalBuyers}+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
