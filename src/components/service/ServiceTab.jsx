import React, { useEffect, useState } from "react";
import { FaCross, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGigs from "../../hook/useGigs";
import Feedback from "../../pages/Pricing/Feedback";
import { ImCross } from "react-icons/im";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

const ServiceGrid = ({ services, onServiceClick }) => {
    // console.log(services)
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {services.length > 0
        ? services.map((service) => (
            <div
              key={service?._id} // Unique key based on the service ID
              className="service-card bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center relative border-4 border-gray-300 border-b-8 border-b-green-400 border-r-4 border-r-green-400 w-full md:w-64 lg:w-96"
            >
              <div className="w-full h-[20rem] md:h-[10rem] lg:h-[14rem] relative">
                {/* Image */}
                <img
                  src={service?.bannerImage || "default-image-url"} // Add a default image if imageUrl is missing
                  alt={service?.title || "Service"} // Default alt text if title is missing
                  className="w-full h-full object-cover transition-all duration-300 cursor-pointer"
                  onClick={() => onServiceClick(service)} // Open sidebar on image click
                />
                {/* Green Overlay on Hover */}
              </div>
            </div>
          ))
        : Array(9)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="service-card bg-gray-200 animate-pulse transition-shadow duration-300 flex flex-col items-center relative border-4 border-gray-300 border-b-8 border-b-gray-400 border-r-4 border-r-gray-400 w-96"
              >
                <div className="w-full h-[20rem] md:h-[10rem] lg:h-[14rem] relative">
                  {/* Skeleton Placeholder */}
                  <div className="bg-gray-300 w-full h-full"></div>
                </div>
              </div>
            ))}
    </div>
  );
};
const ServiceTab = () => {
  const { data, isLoading, isError, error, refetch } = useGigs();

  // Initialize the state to store services
  const [services, setServices] = useState([]);

  // Handle loading and data fetching
  useEffect(() => {
    if (data && data.data) {
      setServices(data.data); // Set services if data is available
    }
  }, [data]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Dynamic tab names based on the unique titles of the services
  const tabNames = [
    "All",
    ...new Set(services.map((service) => service.title)), // Unique service titles for tabs
  ];

  const [selectedTab, setSelectedTab] = useState("All");

  // Filter the services based on the selected tab
  const filteredServices =
    selectedTab === "All"
      ? services
      : services.filter((service) => service.title === selectedTab);

  // Loading and Error UI
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Open the sidebar and set the selected service
  const openSidebar = (service) => {
    setSelectedService(service); // Set the clicked service as the selected service
    setIsSidebarOpen(true); // Open the sidebar
  };

  // console.log(selectedService);

  return (
    <div className="container mx-auto p-6 mt-44 md:mt-28 lg:mt-44 ">
      <h1 className="text-center font-sans text-4xl mb-4 text-green-500 border-b lg:w-1/3 m-auto border-green-500 rounded-2xl p-4">
        Portfolio
      </h1>

      {/* Tabs */}
      <div className="tabs flex flex-wrap justify-center mb-6">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-6 py-2 text-lg font-semibold w-full sm:w-auto shadow-xl rounded-full ${
              selectedTab === tab
                ? "bg-green-500 text-white border"
                : "bg-white text-green-500 border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Service Cards */}

      <ServiceGrid services={filteredServices} onServiceClick={openSidebar} />

      {isSidebarOpen && selectedService && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div
            className="fixed right-0 top-0 w-1/2 sm:w-full lg:w-1/2 bg-white h-full shadow-lg transform transition-all duration-300 ease-in-out"
            style={{
              transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <button
              className="absolute top-4 left-4 text-2xl text-green-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <ImCross />
            </button>
            <div className="p-6 overflow-y-auto h-full">
              {/* Service Title */}
              <h2 className="text-2xl mt-10 font-semibold mb-4 text-green-500">
                {selectedService.title}
              </h2>
              {selectedService.media && selectedService.media.length > 0 && (
                <div className="mb-6 w-11/12 m-auto">
                  <h3 className="font-semibold text-xl text-green-500 mb-2 mt-4">
                    Media
                  </h3>
                  <div className="space-y-4">
                    {/* Show video if the first media item is a video */}
                    {selectedService.media[0].type === "video" && (
                      <div className="relative w-full rounded-lg overflow-hidden shadow-xl">
                        <video
                          controls
                          className="w-full h-72 object-cover"
                          src={selectedService.media[0].url}
                          poster={selectedService.media[0].poster} // Optional poster image
                          alt="Service Video"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Service Description */}
              <p className="text-gray-700 mb-6">
                {selectedService.description}
              </p>

              {/* Offerings Section */}
              {selectedService.offerings &&
                selectedService.offerings.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-xl text-green-500 mb-2">
                      Our Offerings
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {selectedService.offerings.map((offering, index) => (
                        <li key={index} className="text-lg text-gray-800">
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Why Choose Us Section */}
              {selectedService.whyChooseUs &&
                selectedService.whyChooseUs.points && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-xl text-green-500 mb-2">
                      {selectedService.whyChooseUs.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {selectedService.whyChooseUs.details}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      {selectedService.whyChooseUs.points.map(
                        (point, index) => (
                          <li key={index} className="text-lg text-gray-800">
                            {point}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

              {/* Link to Full Service */}
              <Link
                to={`/service/${selectedService.slug}`}
                className="mt-4 inline-block bg-blue-500 text-white rounded-full border-4 p-4 font-semibold  gap-3"
              >
                <div className="flex justify-center items-center gap-2">
                  See More <FaRightLong />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceTab;
