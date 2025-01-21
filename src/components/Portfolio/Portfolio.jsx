import { useState } from 'react';
import useService from '../../hook/useService';
import Header from "../Header/Header";

const PortfolioTab = () => {
  const { data, isLoading, isError, error } = useService();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // To handle modal
  console.log(data);

  if (isLoading) {
    return <p className="text-teal-600 text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-600 text-center">Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p className="text-gray-600 text-center">No portfolio items available.</p>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filtered data based on active tab
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.title === activeTab);

  return (
    <div className="p-6 mt-44 mb-44">
      <Header
        title={"Portfolio"}
        description={"This is the best choice for you"}
      />
      
      {/* Tab buttons with responsive design */}
      <div className="flex justify-center gap-4 mb-6 overflow-x-auto flex-wrap">
        <button
          className={`py-2 px-4 rounded-full ${activeTab === "All" ? "bg-green-600 text-white" : "bg-white sha text-green-700 text-xl"}`}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        {Array.from(new Set(data.map((item) => item.title))).map((title) => (
          <button
            key={title}
            className={`py-2 px-4 rounded-full ${activeTab === title ? "bg-green-600 text-white" : "bg-white sha text-green-700 text-xl"}`}
            onClick={() => handleTabClick(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredData.map((item) => (
          <div
            key={item._id || Math.random()}
            className="relative group w-full sm:w-80 md:w-96 h-64 bg-gray-200 flex items-center justify-center cursor-pointer mb-4"
            onClick={() => setSelectedImage(item.serviceImage)}
          >
            <img
              src={item.serviceImage}
              alt={item.title || "Portfolio Item"}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-lg font-bold">{item.title || "Untitled"}</h3>
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
          <div className="relative">
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTab;
