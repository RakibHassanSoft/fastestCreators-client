import React, { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import Flag from "react-world-flags";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header";

const DemoData = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    country: "US",
    comment:
      "The web development service was seamless, and the website turned out exactly as I envisioned!",
    isVerified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    country: "GB",
    comment:
      "Absolutely loved the logo design! It's modern and professional, perfectly reflecting our brand.",
    isVerified: true,
  },
  {
    id: 3,
    name: "Tom Lee",
    rating: 3,
    country: "CA",
    comment:
      "App development was decent, but there were some minor delays in delivery. However, the final result was functional.",
    isVerified: false,
  },
  {
    id: 4,
    name: "Alice Brown",
    rating: 4,
    country: "AU",
    comment:
      "The video editing service was great. The final video met our expectations, though a few more revisions would have been helpful.",
    isVerified: true,
  },
  {
    id: 5,
    name: "Mark Taylor",
    rating: 5,
    country: "DE",
    comment:
      "Highly recommend for web development projects. The team is professional and always delivers on time!",
    isVerified: false,
  },
  {
    id: 6,
    name: "Sarah Connor",
    rating: 2,
    country: "FR",
    comment:
      "The app development service did not meet my expectations. The user interface was not intuitive enough for my audience.",
    isVerified: true,
  },
  {
    id: 7,
    name: "Luis Martinez",
    rating: 5,
    country: "ES",
    comment:
      "Fantastic experience! The design team captured our vision perfectly and delivered on schedule.",
    isVerified: true,
  },
  {
    id: 8,
    name: "Hiroshi Tanaka",
    rating: 4,
    country: "JP",
    comment:
      "The software solution improved our workflow dramatically. Support was responsive and helpful.",
    isVerified: true,
  },
  {
    id: 9,
    name: "Amina Ibrahim",
    rating: 5,
    country: "NG",
    comment:
      "Very professional and talented team. They exceeded our expectations in every aspect of the project.",
    isVerified: true,
  },
  {
    id: 10,
    name: "Olivia Johnson",
    rating: 3,
    country: "NZ",
    comment:
      "Overall good service, but some communication gaps delayed the project slightly.",
    isVerified: false,
  },
  {
    id: 11,
    name: "David Kim",
    rating: 4,
    country: "KR",
    comment:
      "Creative and efficient, they helped us launch our app faster than planned.",
    isVerified: true,
  },
  {
    id: 12,
    name: "Mia Chen",
    rating: 5,
    country: "TW",
    comment:
      "The branding package was exactly what our company needed. Very happy with the results.",
    isVerified: true,
  },
  {
    id: 13,
    name: "Carlos Silva",
    rating: 4,
    country: "BR",
    comment:
      "Good communication and solid technical skills. Would hire again for future projects.",
    isVerified: true,
  },
  {
    id: 14,
    name: "Sophia Müller",
    rating: 5,
    country: "CH",
    comment:
      "The UI/UX design transformed our website. The team was attentive to every detail.",
    isVerified: true,
  },
  {
    id: 15,
    name: "Ethan Williams",
    rating: 4,
    country: "IE",
    comment:
      "Highly skilled developers who delivered a great product. Support could be a bit faster though.",
    isVerified: false,
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DemoData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeItems = [
    DemoData[activeIndex],
    DemoData[(activeIndex + 1) % DemoData.length],
    DemoData[(activeIndex + 2) % DemoData.length],
    DemoData[(activeIndex + 3) % DemoData.length],
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      <div className="text-center mb-10">
        <Header
          title="Client Feedback"
          description="What our clients say about us"
          icon={<FaQuoteLeft className="text-3xl text-green-700" />}
        />
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {activeItems.map((item) => {
              const primaryColor = "green";
              const bgLight = "white";

              return (
                <motion.div
                  key={item.id}
                  className="relative w-[330px] overflow-visible"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-20 bg-white">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
                      <path
                        d="M0.00,49.98 C150.00,150.00 349.47,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: primaryColor }}
                      />
                    </svg>
                  </div>

                  <div
                    className="relative rounded-xl shadow-lg border p-5 pt-10 mt-[-20px] z-10"
                    style={{ backgroundColor: bgLight }}
                  >
                    <div
                      className="absolute -left-5 -top-10 w-16 h-16 border-4 bg-white z-20"
                      style={{
                        borderColor: primaryColor,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: primaryColor,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name[0]}
                    </div>

                    <FaQuoteLeft className="text-xl mb-2" style={{ color: primaryColor }} />
                    <p className="text-sm text-gray-800 italic mb-4">{item.comment}</p>

                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`mx-0.5 ${
                            index < item.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="text-center mt-2">
                      <h4 className="text-md font-semibold" style={{ color: primaryColor }}>
                        {item.name}
                      </h4>
                      <span className="text-xs text-gray-500">Client</span>
                      {item.isVerified && (
                        <FaCheckCircle className="inline ml-1 text-sm text-green-500" />
                      )}
                    </div>

                    <div className="flex items-center justify-center mt-2 text-lg text-gray-500">
                      <Flag
                        code={item.country}
                        style={{ width: "20px", height: "14px", marginRight: "6px" }}
                        className="rounded"
                      />
                      <span>{item.country}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Feedback;
