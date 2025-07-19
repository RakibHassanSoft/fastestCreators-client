import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FrequentlyAsked = ({ frequently }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mb-12 mt-16 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center text-green-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {frequently.map((item, index) => (
          <div
            key={index}
            className="border border-green-200 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center text-left px-5 py-4 bg-green-50 hover:bg-green-100 transition duration-200"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-sm md:text-base font-medium text-green-900">
                {item.question}
              </span>
              <span className="text-green-500 text-xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-sm text-gray-700 bg-white"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
