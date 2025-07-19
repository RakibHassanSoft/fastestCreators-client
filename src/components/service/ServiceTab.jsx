import React, { useEffect, useState } from "react";
import { FaCross, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGigs from "../../hook/useGigs";
import Feedback from "../../pages/Pricing/Feedback";
import { ImCross } from "react-icons/im";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Header from "../Header/Header";

const ServiceGrid = ({ services, onServiceClick }) => {
  return (
    <section className="h-full px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {services && services.length > 0
            ? services.map((service, i) => (
                <motion.div
                  key={service?._id || i}
                  className="cursor-pointer group  bg-white border border-gray-100 rounded-xl shadow hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onClick={() => onServiceClick(service)}
                >
                  <div className="overflow-hidden rounded-t-xl h-52 w-full">
                    <img
                      src={
                        service?.bannerImage ||
                        "https://via.placeholder.com/400x300"
                      }
                      alt={service?.title || "Service"}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-5 py-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {service?.title || "Untitled Service"}
                    </h3>
                  </div>
                </motion.div>
              ))
            : Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 animate-pulse rounded-xl h-[300px] w-full"
                  >
                    <div className="h-1/2 bg-gray-300 rounded-t-xl" />
                    <div className="h-1/2 flex flex-col items-center justify-center p-4">
                      <div className="w-1/2 h-5 bg-gray-400 rounded mb-2" />
                      <div className="w-1/3 h-4 bg-gray-300 rounded" />
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
};

const ServiceTab = () => {
  const { data, isLoading, isError, error, refetch } = useGigs();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setServices(data.data);
    }
  }, [data]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const tabNames = [
    "All",
    ...new Set(services.map((service) => service.title)),
  ];

  const [selectedTab, setSelectedTab] = useState("All");

  const filteredServices =
    selectedTab === "All"
      ? services
      : services.filter((service) => service.title === selectedTab);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 pt-16 pb-16">
        {/* Title Skeleton */}
        <div className="h-8 w-56 bg-green-300 rounded mb-10 animate-pulse"></div>

        {/* Tabs Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((tab) => (
            <div
              key={tab}
              className="h-10 w-28 bg-green-300 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl px-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="animate-pulse bg-green-100 p-6 rounded-3xl shadow-xl flex flex-col gap-5"
            >
              <div className="h-40 bg-green-300 rounded-xl w-full"></div>
              <div className="h-6 bg-green-300 rounded-lg w-3/4"></div>
              <div className="h-4 bg-green-300 rounded w-full"></div>
              <div className="h-4 bg-green-300 rounded w-5/6"></div>
              <div className="h-10 bg-green-300 rounded w-1/2 mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Handle error state
if (isError || error) {
  return <div className="text-red-500 text-center py-8">Network problem. Please try again later.</div>;
}


  const openSidebar = (service) => {
    setSelectedService(service);
    setIsSidebarOpen(true);
  };

  return (
    <div className="max-w-[1280px] pt-4 mx-auto p-12 bg-white mt-12 mb-12">
      <Header
        title="Our Services"
        description="Explore our wide range of services designed to meet your needs."   
      />

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-2 py-1 text-base rounded-full shadow-md font-medium transition-all duration-300 ${
              selectedTab === tab
                ? "bg-green-900 text-white"
                : "bg-white text-green-900 border"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      <ServiceGrid services={filteredServices} onServiceClick={openSidebar} />

      {isSidebarOpen && selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 top-0 w-full max-w-[640px] bg-white h-full shadow-2xl transform"
          >
            <button
              className="absolute top-4 left-4 text-2xl text-green-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <ImCross />
            </button>
            <div className="p-8 overflow-y-auto h-full">
              <h2 className="text-2xl mt-10 font-semibold mb-4 text-green-500">
                {selectedService.title}
              </h2>

              {selectedService.media && selectedService.media.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Media
                  </h3>
                  {selectedService.media[0].type === "video" && (
                    <video
                      controls
                      className="w-full h-72 object-cover rounded-xl shadow-md"
                      src={selectedService.media[0].url}
                      poster={selectedService.media[0].poster}
                    />
                  )}
                </div>
              )}

              <Link
                to={`/service/${selectedService.slug}`}
                className="inline-flex items-center gap-2 bg-green-500 text-white rounded-full px-6 py-3 mt-4 font-medium hover:bg-green-600 transition"
              >
                See More <FaRightLong />
              </Link>

              <p className="text-gray-700 my-6">
                {selectedService.description}
              </p>

              {selectedService.offerings && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    Our Offerings
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {selectedService.offerings.map((item, i) => (
                      <li key={i} className="text-lg text-gray-800">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedService.whyChooseUs?.points && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">
                    {selectedService.whyChooseUs.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {selectedService.whyChooseUs.details}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {selectedService.whyChooseUs.points.map((point, i) => (
                      <li key={i} className="text-lg text-gray-800">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServiceTab;
