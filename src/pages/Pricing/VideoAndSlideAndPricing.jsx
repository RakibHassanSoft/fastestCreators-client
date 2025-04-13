import React from "react";
import Slider from "./Slider";
import Tab from "./Tab";
import AboutGig from "./AboutGig";
import FrequentlyAsked from "./FrequentlyAsked";

// Skeleton block with adjustable size
const SkeletonBox = ({ className }) => (
  <div className={`bg-green-200 rounded-md animate-pulse ${className}`}></div> // Updated color to light green
);

// Skeleton layout that mimics the actual component structure
const SkeletonLoader = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-col justify-between mt-20 gap-3 px-4">
      {/* video and tab row */}
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Slider placeholder */}
        <SkeletonBox className="w-full lg:w-1/2 h-[300px]" />

        {/* Tab placeholder */}
        <div className="w-full lg:w-1/2 space-y-4">
          <SkeletonBox className="h-6 w-3/4" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-6 w-2/3" />
          <SkeletonBox className="h-40 w-full" />
        </div>
      </div>

      {/* AboutGig and FAQ row */}
      <div className="w-full flex flex-col lg:flex-row lg:m-0 md:w-full md:m-auto gap-10 mt-10">
        {/* AboutGig placeholder */}
        <div className="w-full lg:w-1/2 space-y-4">
          <SkeletonBox className="h-6 w-2/3" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-32 w-full" />
        </div>

        {/* FAQ placeholder */}
        <div className="w-full lg:w-1/2 space-y-4">
          <SkeletonBox className="h-6 w-1/2" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-6 w-full" />
          <SkeletonBox className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
};

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

  return (
    <div className="">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="flex flex-col md:flex-col lg:flex-col justify-between mt-20 gap-3">
          {/* video and image  */}
          <div className="w-full flex flex-col lg:flex-row gap-10">
            <Slider media={media} />
            <Tab
              feature={feature}
              pricing={pricing}
              offerings={offerings}
              highlights={highlights}
            />
          </div>

          {/* pricing and gig info */}
          <div className="w-full flex flex-col lg:flex-row lg:m-0 md:w-full md:m-auto">
            <AboutGig
              whyChooseUs={whyChooseUs}
              offerings={offerings}
              highlights={highlights}
            />
            <FrequentlyAsked frequently={frequently} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAndSlideAndPricing;
