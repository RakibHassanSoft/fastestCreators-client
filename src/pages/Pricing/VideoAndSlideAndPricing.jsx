import React from "react";
import Slider from "./Slider";
import Tab from "./Tab";
import MainPrice from "./MainPrice";
import FrequentlyAsked from "./FrequentlyAsked";
import AboutGig from "./AboutGig";
import GigTitle from "./GigTitle";
import Feedback from "./Feedback";

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

  return (
    <div className="">
      <div className="flex flex-col md:flex-col lg:flex-col   justify-between mt-20 gap-3">
        {/* video and image  */}
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* slide  */}

          <Slider media={media}></Slider>
          <Tab
            feature={feature}
            pricing={pricing}
            offerings={offerings}
            highlights={highlights}
          ></Tab>
          {/* <AboutGig whyChooseUs={whyChooseUs}  offerings={offerings} highlights={highlights}/> */}
        </div>
        {/* pricing  */}
        <div className="w-full flex flex-col lg:flex-row lg:m-0 md:w-full md:m-auto">
          {/* <Tab
            feature={feature}
            pricing={pricing}
            offerings={offerings}
            highlights={highlights}
          ></Tab> */}
          <AboutGig
            whyChooseUs={whyChooseUs}
            offerings={offerings}
            highlights={highlights}
          />
          <FrequentlyAsked frequently={frequently} />
        </div>
      </div>
    </div>
  );
};

export default VideoAndSlideAndPricing;
