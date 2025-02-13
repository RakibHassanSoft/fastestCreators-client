import React, { useState } from "react";

const CustomSlider = ({ media }) => {
  const demoMediaData = media;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === demoMediaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? demoMediaData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto">
      {/* Main Slider */}
      <div className="w-full  h-auto flex items-center justify-center overflow-hidden relative">
        {demoMediaData[currentIndex].type === "video" ? (
          <video
            src={demoMediaData[currentIndex].url}
            controls
            className="w-full max-w-[1920px] h-auto max-h-[1080px] object-cover rounded-lg shadow-lg"
            poster={demoMediaData[currentIndex].poster || ""}
          />
        ) : (
          <img
            src={demoMediaData[currentIndex].url}
            alt={`slide-${currentIndex}`}
            className="w-full max-w-[1920px] h-auto max-h-[1080px] object-cover rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-28 md:top-44 lg:top-64 left-4 transform -translate-y-1/2 bg-green-500 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-28 md:top-44 lg:top-64 right-4 transform -translate-y-1/2 bg-green-500 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
      >
        &#8594;
      </button>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center overflow-x-auto mt-4 gap-2 px-4">
        {demoMediaData.map((media, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            } rounded overflow-hidden flex-shrink-0 transition-all duration-300`}
          >
            <img
              src={media?.thumbnail || media?.url}
              alt={`thumbnail-${index}`}
              className="h-[60px] w-[100px] object-cover rounded-md shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
