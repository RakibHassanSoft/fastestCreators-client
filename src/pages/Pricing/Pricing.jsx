import React, { useEffect, useState } from "react";
import MainPrice from "./MainPrice";
import VideoAndSlideAndPricing from "./VideoAndSlideAndPricing";
import LogoDesignForm from "../LogoDesignForm/LogoDesignForm";
import FrequentlyAsked from "../LogoDesignForm/FrequentlyAsked";
import Feedback from "./Feedback";
import PaymentTab from "../../components/paymentTab/PaymentTab";
import GigTitle from "./GigTitle";
import { useParams } from "react-router-dom";
import { getPublicData } from "../../BcckendConnection/getData";
import Header from "../../components/Header/Header";

const Pricing = () => {
  const { slug } = useParams(); // You can use this id to fetch your data by ID or slug
  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        // Construct the URL with the ID/slug
        const endpoint = `/gigs/single-gig/slug/${slug}`; // Assuming the slug is passed as the 'id'
        const data = await getPublicData(endpoint);

        // Set the fetched data into the state
        setGig(data?.data);
        // console.log(data?.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGigData();
  }, [slug]); // Fetch the data again if the ID changes

  // console.log(gig)

  if (loading) {
    return (
      <div className="animate-pulse px-6 py-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Left Column: Main Gig Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title */}
          <div className="h-8 bg-gray-300 rounded w-3/4" />

          {/* Seller Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="space-y-2">
              <div className="w-24 h-4 bg-gray-300 rounded" />
              <div className="w-16 h-4 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Gig Image */}
          <div className="w-full h-[400px] bg-gray-300 rounded-xl" />

          {/* Description */}
          <div className="space-y-4">
            <div className="w-full h-4 bg-gray-300 rounded" />
            <div className="w-5/6 h-4 bg-gray-300 rounded" />
            <div className="w-2/3 h-4 bg-gray-300 rounded" />
            <div className="w-full h-4 bg-gray-300 rounded" />
          </div>

          {/* FAQ */}
          <div className="space-y-3 pt-6">
            <div className="w-40 h-6 bg-gray-300 rounded" />
            <div className="w-full h-4 bg-gray-200 rounded" />
            <div className="w-5/6 h-4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Right Column: Pricing Card */}
        <div className="space-y-6">
          <div className="w-full h-80 bg-gray-200 rounded-xl" />
          <div className="h-10 bg-gray-300 rounded" />
          <div className="h-10 bg-gray-300 rounded" />
          <div className="h-10 bg-green-300 rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // console.log(gig?.feature)

  return (
    <div className="max-w-7xl m-auto mt-12">
     
      <VideoAndSlideAndPricing
        media={gig?.media}
        whyChooseUs={gig?.whyChooseUs}
        images={gig?.images}
        pricing={gig?.pricing}
        feature={gig?.feature}
        frequently={gig?.frequently}
        offerings={gig?.offerings}
        highlights={gig?.highlights}
      />
      <Header
        title="Feature Comparison"
        description="Compare our pricing plans and features to find the best fit for your needs."
      />
      <MainPrice feature={gig?.feature} />

      <Feedback />
      <PaymentTab feature={gig?.feature} />
    </div>
  );
};

export default Pricing;
