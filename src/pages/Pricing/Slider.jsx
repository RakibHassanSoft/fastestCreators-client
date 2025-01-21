import React, { useState } from "react";

const CustomSlider = ({ media }) => {

  const demoMediaData = media

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
    <div className="relative  h-auto">
      {/* Main Slider */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
        {demoMediaData[currentIndex].type === "video" ? (
          <video
            src={demoMediaData[currentIndex].url}
            controls
            className="w-full h-full object-cover"
            poster={demoMediaData[currentIndex].poster || ""}
          />
        ) : (
          <img
            src={demoMediaData[currentIndex].url}
            alt={`slide-${currentIndex}`}
            className="w-[500px] h-[400px] object-cover"
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
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
            } rounded overflow-hidden flex-shrink-0`}
          >
            <img
              src={media?.thumbnail || media?.url}
              alt={`thumbnail-${index}`}
              className="h-[60px] w-[100px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
