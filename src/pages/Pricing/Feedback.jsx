import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // For rating stars

const DemoData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/97.jpg",
    name: "John Doe",
    rating: 4,
    comment:
      "The web development service was seamless, and the website turned out exactly as I envisioned!",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Jane Smith",
    rating: 5,
    comment:
      "Absolutely loved the logo design! It's modern and professional, perfectly reflecting our brand.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Tom Lee",
    rating: 3,
    comment:
      "App development was decent, but there were some minor delays in delivery. However, the final result was functional.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    name: "Alice Brown",
    rating: 4,
    comment:
      "The video editing service was great. The final video met our expectations, though a few more revisions would have been helpful.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Mark Taylor",
    rating: 5,
    comment:
      "Highly recommend for web development projects. The team is professional and always delivers on time!",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Sarah Connor",
    rating: 2,
    comment:
      "The app development service did not meet my expectations. The user interface was not intuitive enough for my audience.",
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
              className="flex-shrink-0 flex flex-col items-center p-6 rounded-lg shadow-md w-72 sm:w-1/4 mx-2 mb-6"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-green-300 mb-4"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-green-800">{item.name}</h3>

              {/* Rating */}
              <div className="flex items-center space-x-1 mt-2">
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
              <p className="text-sm text-green-800 text-center mt-2">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
