import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../zustand/useStore";

const Tab = ({ feature, pricing }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, setData } = useStore();
  const navigete = useNavigate();
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Creating the active features based on the active tab
  const activeFeatures = feature?.map((item) => ({
    feature: item?.title, // Using the title for the feature name
    value: item?.features[activeTab], // Access features based on the activeTab index
  }));

  // Extracting the active package (pricing) based on the tab
  const activePackageKey = ["basic", "standard", "premium"][activeTab];
  const activePackage = pricing[activePackageKey];

  const handleSubmitForPayment = (data) => {
    // console.log(data)
    setData(data);

    navigete("/order-for-payment");
  };

  return (
    <div className="w-full md:w-full mt-12 md:mt-0 lg:mt-0  ">
      {/* Tab Headers */}
      <div className="flex w-full justify-center shadow-lg rounded-t-lg overflow-hidden">
        {["Basic", "Standard", "Premium"].map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 w-full transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick(index)}
            aria-selected={activeTab === index}
            role="tab"
          >
            <h1 className="text-center font-bold">
              {tab}
              <span className="block text-xl font-semibold">
                {pricing[tab.toLowerCase()]?.price}
              </span>
            </h1>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white border-t border-gray-300 rounded-b-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
          {["Basic", "Standard", "Premium"][activeTab]} Package
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          {activePackage?.description}
        </p>

        <ul className="space-y-2">
          {activeFeatures.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {typeof item.value === "boolean" ? (
                item.value ? (
                  <span className="text-green-500 text-md">✔</span>
                ) : (
                  <span className="text-red-500 text-md ">✖</span>
                )
              ) : (
                <span className="text-blue-500 font-semibold text-sm">
                  {item.value}
                </span>
              )}
              <p className="text-gray-700 font-medium text-md">
                {item.feature}
              </p>
            </li>
          ))}
        </ul>

        {/* Revisions and Delivery Time */}
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Revisions: </span>
            {activePackage?.revisions}
          </p>
          {activePackage?.FootageProvidedByBuyer && (
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-bold">Footage Provided By Buyer: </span>
              {activePackage?.FootageProvidedByBuyer}
            </p>
          )}
          {activePackage?.RunningTime != null && (
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-bold">Running Time: </span>
              {activePackage?.RunningTime}
            </p>
          )}
          {activePackage?.pages && (
            <p className="text-lg font-semibold text-gray-700">
              <span className="font-bold">Pages: </span>
              {activePackage?.pages}
            </p>
          )}
          <p className="text-lg font-semibold text-gray-700">
            <span className="font-bold">Delivery Time: </span>
            {activePackage?.deliveryTime}
          </p>
          <div className="mt-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              {/* Primary Continue Button */}
              <button
                onClick={() => handleSubmitForPayment(activePackage)}
                className="bg-green-600 hover:bg-black text-white  font-semibold py-2 px-2 rounded-lg shadow-lg transition-all duration-300"
              >
                Continue
              </button>

              {/* Privacy Policy Link Button */}
              <Link to="/privacy-policy">
                <button className="bg-blue-500 hover:bg-black text-white font-medium py-2 px-2 rounded-lg shadow-md transition-all duration-300">
                  Privacy & Policy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
