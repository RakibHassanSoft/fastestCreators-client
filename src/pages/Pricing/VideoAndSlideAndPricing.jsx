import React, { useState } from "react";
import Slider from "./Slider";
import Tab from "./Tab";
import AboutGig from "./AboutGig";
import FrequentlyAsked from "./FrequentlyAsked";

const VideoAndSlideAndPricing = (props) => {
  const {
    whyChooseUs,
    feature,
    pricing,
    frequently,
    offerings,
    highlights,
    media,
  } = props;

  const isLoading =
    !feature?.length &&
    !pricing?.length &&
    !frequently?.length &&
    !offerings?.length &&
    !highlights?.length &&
    !media?.length;

  const [showMore, setShowMore] = useState(false);

  if (isLoading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-green-800">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-lg font-medium animate-pulse">Loading, please wait...</p>
    </div>
  );
}


  return (
    <div className="container mx-auto mt-12 px-4 ">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side: Slider + AboutGig */}
        <div className="flex flex-col gap-8">
          <Slider media={media} />

          <div
            className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
              showMore ? "max-h-full" : "max-h-[300px]"
            }`}
          >
            <AboutGig
              whyChooseUs={whyChooseUs}
              offerings={offerings}
              highlights={highlights}
            />
          </div>
          {/* See More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="inline-block px-6 py-2 mb-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white font-semibold shadow-lg hover:from-green-900 hover:to-green-700 transition-colors duration-300"
        >
          {showMore ? "Hide Extra Details" : "See More About This Service"}
        </button>
      </div>
        </div>

        {/* Right side: Tab + FrequentlyAsked */}
        <div className="flex flex-col lg:w-full  gap-8">
          <Tab
            feature={feature}
            pricing={pricing}
            offerings={offerings}
            highlights={highlights}
          />

          <div
            className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
              showMore ? "max-h-[1000px]" : "max-h-[300px]"
            }`}
          >
            <FrequentlyAsked frequently={frequently} />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default VideoAndSlideAndPricing;
