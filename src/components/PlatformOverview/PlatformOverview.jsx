import React from "react";
import { Line } from "react-chartjs-2";
import { FaCheckCircle, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaMagic, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlatformOverview = () => {
  return (
    <section className="bg-[#e9fef5] max-w-7xl mx-auto mb-16  p-10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800">
          The <span className="text-green-600">ultimate</span> creative platform for digital services
        </h2>
        <p className="text-gray-600 mt-4">
          Fastest Creators is your all-in-one solution for high-quality digital services. We bring
          together expert talent, modern tools, and flexible collaboration to help your brand stand out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <strong>Expert Professionals</strong>
              <p>Handpicked team with proven expertise across every service.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <strong>Customized Solutions</strong>
              <p>Every project is tailored to meet your unique goals.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <strong>Reliable Communication</strong>
              <p>Stay updated throughout the entire process, from idea to delivery.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <div>
              <strong>Timely Delivery</strong>
              <p>On-time project execution without compromising quality.</p>
            </div>
          </div>
        </div>
         
         <Link to="/services">
         <button className="mt-8 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
          Explore Our Services
        </button>
         </Link>
        
      </div>

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        <ServiceCard icon={<FaLaptopCode size={28} />} title="Web Development" />
        <ServiceCard icon={<FaMobileAlt size={28} />} title="App Development" />
        <ServiceCard icon={<FaPaintBrush size={28} />} title="Logo Design" />
        <ServiceCard icon={<FaMagic size={28} />} title="Logo Animation" />
        <ServiceCard icon={<FaVideo size={28} />} title="Video Editing" />
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white p-4 rounded-lg shadow text-center">
    <div className="text-green-600 mb-2">{icon}</div>
    <h4 className="font-semibold text-gray-800">{title}</h4>
  </div>
);

export default PlatformOverview;
