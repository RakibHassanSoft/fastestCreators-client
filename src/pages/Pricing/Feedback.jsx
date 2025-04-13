import React, { useState, useEffect } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa"; // For rating stars and verified symbol
import Flag from "react-world-flags"; // For displaying flags based on country code

const DemoData = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    country: "US", // Country code (ISO 3166-1 alpha-2)
    comment:
      "The web development service was seamless, and the website turned out exactly as I envisioned!",
    isVerified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    country: "GB", // Country code (ISO 3166-1 alpha-2)
    comment:
      "Absolutely loved the logo design! It's modern and professional, perfectly reflecting our brand.",
    isVerified: true,
  },
  {
    id: 3,
    name: "Tom Lee",
    rating: 3,
    country: "CA", // Country code (ISO 3166-1 alpha-2)
    comment:
      "App development was decent, but there were some minor delays in delivery. However, the final result was functional.",
    isVerified: false,
  },
  {
    id: 4,
    name: "Alice Brown",
    rating: 4,
    country: "AU", // Country code (ISO 3166-1 alpha-2)
    comment:
      "The video editing service was great. The final video met our expectations, though a few more revisions would have been helpful.",
    isVerified: true,
  },
  {
    id: 5,
    name: "Mark Taylor",
    rating: 5,
    country: "DE", // Country code (ISO 3166-1 alpha-2)
    comment:
      "Highly recommend for web development projects. The team is professional and always delivers on time!",
    isVerified: false,
  },
  {
    id: 6,
    name: "Sarah Connor",
    rating: 2,
    country: "FR", // Country code (ISO 3166-1 alpha-2)
    comment:
      "The app development service did not meet my expectations. The user interface was not intuitive enough for my audience.",
    isVerified: true,
  },
];

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState(DemoData);

  // Function to cycle through items every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackData((prevData) => {
        // Move the last item to the front of the array
        const newData = [...prevData];
        const lastItem = newData.pop(); // Remove the last item
        newData.unshift(lastItem); // Add the last item to the front
        return newData;
      });
    }, 4000); // Change order every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full bg-gray-50 p-6">
      <h1 className="text-center font-bold text-2xl text-green-600 border-2 border-green-500 rounded-2xl p-4 mb-6">
        Feedback
      </h1>
      <div className="overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6">
          {feedbackData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col items-center p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-72 sm:w-1/4 mx-2 mb-6 bg-white border border-gray-200 transform hover:scale-105"
            >
              {/* Flag */}
              <Flag code={item.country} style={{ width: "50px", height: "50px" }} className="mb-4" />

              {/* Name with Verified Badge */}
              <div className="flex items-center mb-3">
                <h3 className="text-lg font-semibold text-green-800 mr-2">
                  {item.name}
                </h3>
                {item.isVerified && (
                  <FaCheckCircle className="text-blue-500 text-xl" />
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < item.rating ? "text-yellow-500" : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-green-800 text-center mb-4 px-3">
                {item.comment}
              </p>

              {/* Country */}
              <div className="text-xs text-gray-500 mt-2">
                <span className="font-semibold">Country: </span>{item.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
