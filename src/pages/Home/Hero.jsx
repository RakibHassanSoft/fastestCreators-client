import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen lg:min-h-[calc(100vh-320px)]  overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/d4CBvHT3/GPP066.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-5 max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-block text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4">
            Built for Ambitious Startups
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Power Up Your Product with
            <span className="text-green-400"> Bangladeshi Talent</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            From MVP to enterprise — we design, build, and scale your digital products with agility and quality.
          </p>

          <Link
            to="/meeting"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          >
            <CalendarDays className="w-5 h-5" />
            Schedule a Meeting
          </Link>
        </motion.div>

        {/* Right stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 gap-6 flex-1 w-full max-w-lg"
        >
          <StatBox title="25+ Projects" subtitle="Delivered Worldwide" />
          <StatBox title="10+ Experts" subtitle="MERN, DevOps, UI/UX" />
          <StatBox title="4.9/5 Rating" subtitle="Across Platforms" />
          <StatBox title="Based in Dhaka" subtitle="Serving Clients Globally" />
        </motion.div>
      </div>
    </div>
  );
};

const StatBox = ({ title, subtitle }) => (
  <div className="bg-green-500 bg-opacity-90 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center backdrop-blur-sm">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm mt-1">{subtitle}</p>
  </div>
);

export default Hero;
