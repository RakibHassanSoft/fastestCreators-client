import { useState } from "react";
import useService from "../../hook/useService";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const PortfolioTab = () => {
  const { data, isLoading, isError, error } = useService();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleData, setTitleData] = useState(null);
  // console.log(titleData);
  const links = {
  
    "Logo design": "service/logo-design",
    "Logo animation": "service/logo-animation",
    "Video editing": "service/video-editing",
    "Web development": "service/web-development",
    "App Development": "service/app-development",
  };

  if (isLoading) {
    return   <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full ">
    {/* Skeleton Item 1 */}
    <div className="animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
    {/* Skeleton Item 2 */}
    <div className="animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
    {/* Skeleton Item 3 */}
    <div className="animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
    {/* Skeleton Item 4 */}
    <div className="animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
    {/* Skeleton Item 5 */}
    <div className="animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
  </div>;
  }

  // if (isError) {
  //   return <p className="text-red-600 text-center">Error: {error.message}</p>;
  // }

  // if (!data || data.length === 0) {
  //   return (
  //     <p className="text-gray-600 text-center">No portfolio items available.</p>
  //   );
  // }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filtered data based on active tab
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.title === activeTab);

  return (
    <div className="p-6 mt-16 lg:mt-32 mb-16 lg:mb-32">
      <Header
        title={"Portfolio"}
        description={"This is the best choice for you"}
      />

      {/* Tab buttons with responsive design */}
      <div className="flex justify-center gap-4 mb-6 overflow-x-auto flex-wrap">
        <button
          className={`py-2 px-4 rounded-full ${
            activeTab === "All"
              ? "bg-green-600 text-white"
              : "bg-white sha text-green-700 text-xl"
          }`}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        {Array.from(new Set(data.map((item) => item.title))).map((title) => (
          <button
            key={title}
            className={`py-2 px-4 rounded-full ${
              activeTab === title
                ? "bg-green-600 text-white"
                : "bg-white sha text-green-700 text-xl"
            }`}
            onClick={() => handleTabClick(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-6">
        {filteredData.map((item) => (
          <div
            key={item._id || Math.random()}
            className="relative group w-full sm:w-full md:w-1/3 lg:w-1/4 md:h-56 lg:h-64 bg-gray-200 flex items-center justify-center cursor-pointer mb-4"
            onClick={() => {
              setSelectedImage(item.serviceImage);
              setTitleData(item.title);
            }}
          >
            <img
              src={item.serviceImage}
              alt={item.title || "Portfolio Item"}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-lg font-bold">
                {item.title || "Untitled"}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation
          >
            {/* Image Section */}
            <img
              src={selectedImage}
              alt="Large View"
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-gray-800 text-white hover:bg-gray-600 rounded-full p-3 shadow-md focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Title Link Section */}
            {titleData && links[titleData] && (
              <Link
                to={links[titleData]}
                className="block mt-6 text-center bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                onClick={() => setSelectedImage(null)}
              >
                {titleData}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTab;
