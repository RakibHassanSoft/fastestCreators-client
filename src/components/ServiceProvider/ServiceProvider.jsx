import React from "react";
import { FaChartLine, FaNetworkWired } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceProvider = () => (
  <div className="flex flex-col lg:flex-row items-center px-6 lg:px-24 py-12 bg-white justify-center">
    {/* Left: Image collage + badge + video thumbnail */}
    <div className="relative w-full lg:w-1/2 max-w-lg">
      {/* Base image */}
      <img
        src="https://images.pexels.com/photos/3182767/pexels-photo-3182767.jpeg"
        alt="Team at desk"
        className="rounded-lg shadow-lg w-full"
      />

      {/* Badge */}
      <div className="absolute -top-4 -left-4 bg-green-900 text-white px-5 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all duration-500 hover:bg-white hover:text-black hover:translate-x-2">
        <span className="text-2xl transition-colors duration-500">🏅</span>
        <div>
          <div className="font-bold text-lg">7 Years</div>
          <div className="text-sm">Professional Excellence</div>
        </div>
      </div>

      {/* Video thumbnail */}
      <div className="absolute -bottom-12 left-12 w-72 h-44 bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white">
        <img
          src="https://images.pexels.com/photos/1181313/pexels-photo-1181313.jpeg"
          alt="Video thumbnail"
          className="object-cover w-full h-full"
        />
        <button className="absolute inset-0 bg-green-900/60 hover:bg-green-800/70 flex items-center justify-center text-white text-4xl transition">
          <BsFillPlayFill />
        </button>
      </div>
    </div>

    {/* Right: Text content */}
    <div className="mt-16 lg:mt-0 lg:ml-12 w-full lg:w-1/2 max-w-xl">
      <div className="uppercase text-green-800 font-semibold tracking-wider mb-2">
        About Us
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
        Selecting the Finest IT Service Provider
      </h2>
      <p className="text-gray-700 mb-6">
        With a proven track record of delivering cutting-edge solutions, we help
        businesses scale, innovate, and lead in their industries. From cloud
        strategies to digital transformation, our dedicated team of professionals
        ensures technology drives your success.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 text-green-800 p-3 rounded-md">
            <FaChartLine size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">Business Growth</h4>
            <p className="text-gray-600 text-sm">
              We empower businesses with scalable, reliable, and strategic
              solutions designed to unlock growth and increase profitability.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-green-100 text-green-800 p-3 rounded-md">
            <FaNetworkWired size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Technology Consultancy
            </h4>
            <p className="text-gray-600 text-sm">
              From infrastructure to innovation, our consultants guide you in
              making smart tech decisions that future-proof your organization.
            </p>
          </div>
        </div>
      </div>

      <Link to={"/about"}>
        <button className="mt-8 px-6 py-3 bg-green-900 text-white rounded-md font-semibold hover:text-gray-800 hover:bg-white transition duration-200">
          ABOUT US →
        </button>
      </Link>
    </div>
  </div>
);

export default ServiceProvider;
