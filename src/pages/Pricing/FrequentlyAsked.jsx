import React, { useState } from "react";

const faqData = [
  {
    question: "What is the purpose of this service?",
    answer:
      "Our service provides high-quality video editing with features like animation, 4K resolution, sound effects, and more, designed to meet various customer needs.",
  },
  {
    question: "How do I know which package to choose?",
    answer:
      "You can compare the features offered in each package. The Basic package offers essential features, while the Premium package provides all features and more advanced options.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Delivery times vary depending on the package chosen. The Basic package typically takes 5 days, while the Premium package may take up to 10 days.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes! The Basic package includes 1 revision, while the Standard package offers 2 revisions. The Premium package includes up to 5 revisions.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. There are no hidden fees. All costs are clearly outlined in the package details, and we aim to offer transparent pricing for all our customers.",
  },
];

const FrequentlyAsked = ({ frequently }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mb-12 mt-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Frequently Asked Questions</h2>
      <div className="">
        {frequently.map((item, index) => (
          <div key={index} className="border-b border-green-300">
            <div
              className="flex justify-between items-center p-4 bg-green-100 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold text-green-800">{item.question}</h3>
              <span className="text-green-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white text-green-800">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
