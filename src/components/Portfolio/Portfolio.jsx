import { useState } from "react";
import useService from "../../hook/useService";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioTab = () => {
  const { data, isLoading, error, isError } = useService();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleData, setTitleData] = useState(null);
  // Handle error state
  if (isError || error) {
    return (
      <div className="text-red-500 text-center py-8">
        Network problem. Please try again later.
      </div>
    );
  }

  const links = {
    "Logo design": "service/logo-design",
    "Logo animation": "service/logo-animation",
    "Video editing": "service/video-editing",
    "Web development": "service/web-development",
    "App Development": "service/app-development",
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-1 lg:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded-md"></div>
            <div className="mt-4 space-y-2">
              <div className="w-3/4 h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handleTabClick = (tab) => setActiveTab(tab);

  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.title === activeTab);

  return (
    <div className="p-1 lg:p-6 mt-16 lg:mt-32 mb-16 lg:mb-32 max-w-7xl mx-auto">
      <Header title="Portfolio" description="This is the best choice for you" />

      {/* Tabs */}
      <div className="flex justify-center gap-2  mb-6 flex-wrap">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className={`py-2 px-4 rounded-full ${
            activeTab === "All"
              ? "bg-green-600 text-white"
              : "bg-white sha text-green-700 text-xl"
          }`}
          onClick={() => handleTabClick("All")}
        >
          All
        </motion.button>

        {Array.from(new Set(data.map((item) => item.title))).map((title) => (
          <motion.button
            key={title}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`py-2 px-4 rounded-full ${
              activeTab === title
                ? "bg-green-600 text-white"
                : "bg-white sha text-green-700 text-xl"
            }`}
            onClick={() => handleTabClick(title)}
          >
            {title}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="flex flex-wrap justify-center gap-2 lg:gap-6">
        {filteredData.map((item) => (
          <motion.div
            key={item._id}
            className="relative group w-full sm:w-full md:w-1/3 lg:w-1/4 md:h-56 lg:h-64  bg-gray-200 flex items-center justify-center cursor-pointer mb-4"
            onClick={() => {
              setSelectedImage(item.serviceImage);
              setTitleData(item.title);
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Large View"
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-gray-800 text-white hover:bg-gray-600 rounded-full p-3 shadow-md focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              {titleData && links[titleData] && (
                <Link
                  to={links[titleData]}
                  className="block mt-6 text-center bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  onClick={() => setSelectedImage(null)}
                >
                  {titleData}
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioTab;
