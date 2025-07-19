import React from "react";
import Header from "../../components/Header/Header";

const AboutGig = ({ whyChooseUs, offerings, highlights }) => {
  // console.log(offerings)

  return (
    <div className="mx-auto p-6 lg:mt-12  ">
      <Header
        title="About This Gig"
        description="Learn more about our services and what makes us the best choice for your
        project."
      />

      <p className="text-lg text-green-800 mb-4">
        Welcome to our amazing gig where you get the highest quality video
        editing services tailored to your needs. Whether you're a business, a
        content creator, or anyone in between, we've got something for you!
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 text-lg text-green-800">
          {offerings?.length > 0 ? (
            offerings.map((offering, index) => <li key={index}>{offering}</li>)
          ) : (
            <>
              <li>Custom website design</li>
              <li>Responsive web applications</li>
              <li>E-commerce solutions</li>
            </>
          )}
        </ul>
      </div>

      {/* Highlighted Features Section */}
      <div className="bg-green-100 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Highlighted Features
        </h2>
        <ul className="list-decimal pl-6">
          {highlights?.length > 0 ? (
            highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-lg font-semibold text-green-800 mb-2"
              >
                <span className="bg-green-300 px-2 py-1 rounded-lg">
                  {highlight?.feature}
                </span>
                : {highlight?.detail}
              </li>
            ))
          ) : (
            <>
              <li className="text-lg font-semibold text-green-800 mb-2">
                <span className="bg-green-300 px-2 py-1 rounded-lg">
                  Mobile Friendly
                </span>
                : Our websites are optimized for all screen sizes.
              </li>
              <li className="text-lg font-semibold text-green-800 mb-2">
                <span className="bg-green-300 px-2 py-1 rounded-lg">
                  SEO Optimized
                </span>
                : We ensure your site ranks well on search engines.
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-green-200 p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          {whyChooseUs?.title ?? "Why Choose Us?"}
        </h2>
        <p className="text-lg text-green-800">
          {whyChooseUs?.details ??
            "We provide a unique and professional service that is tailored to meet the needs of all our clients. Our team works tirelessly to ensure that your project is completed on time, within budget, and exceeds your expectations."}
        </p>
        <ul className="list-disc pl-6 text-lg text-green-800 mt-4">
          {whyChooseUs?.points?.length > 0 ? (
            whyChooseUs.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))
          ) : (
            <>
              <li>Personalized support every step of the way.</li>
              <li>Attention to detail with every project.</li>
              <li>Quick turnaround and delivery on time.</li>
            </>
          )}
        </ul>
      </div>

    
    </div>
  );
};

export default AboutGig;
