import React from "react";
// Importing specific Font Awesome icons from react-icons
import { FaCode, FaMobileAlt, FaPaintBrush, FaFilm } from 'react-icons/fa6';  // Import icons

const HeroSection = () => {
  return (
    <div className="container mx-auto px-8 py-16 flex flex-col lg:flex-row items-center">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2">
        <img
          src="./public/img/hero-main.jpg"
          alt="Creative Solutions"
          className="rounded-lg shadow-lg"
        />
        <img
          src="./public/img/hero-small.jpg"
          alt="Fastest Creators Services"
          className="absolute bottom-[-20px] right-[-20px] border-4 border-white rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
        <h4 className="uppercase text-sm tracking-widest text-yellow-500">Welcome to Fastest Creators</h4>
        <h2 className="text-4xl font-bold mt-2">Building Your Brand with Speed & Creativity</h2>
        <p className="mt-4 text-lg">
          Offering expert Web Development, App Development, Logo Design, Logo Animation, and Video Editing services that will take your brand to the next level.
        </p>
        
        <div className="flex gap-4 mt-6">
          <span className="px-4 py-2 bg-yellow-500 text-blue-600 font-semibold rounded-lg">
            <FaCode className="mr-2" /> Web Development
          </span>
          <span className="px-4 py-2 bg-yellow-500 text-blue-600 font-semibold rounded-lg">
            <FaMobileAlt className="mr-2" /> App Development
          </span>
        </div>

        <div className="flex gap-4 mt-6">
          <span className="px-4 py-2 bg-yellow-500 text-blue-600 font-semibold rounded-lg">
            <FaPaintBrush className="mr-2" /> Logo Design
          </span>
          <span className="px-4 py-2 bg-yellow-500 text-blue-600 font-semibold rounded-lg">
            <FaFilm className="mr-2" /> Video Editing
          </span>
        </div>

        <div className="flex mt-8 space-x-12">
          <div>
            <h3 className="text-3xl font-bold">3500+</h3>
            <p className="text-gray-300">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-gray-300">Team Experts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
