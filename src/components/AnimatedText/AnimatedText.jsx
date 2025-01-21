/* eslint-disable react/no-unknown-property */

const AnimatedText = () => {
  return (
    <div className="relative w-full 16 mt-32 mb-32">
      <div className="overflow-hidden whitespace-nowrap flex items-center justify-center">
        {/* Running text effect */}
        <div className="flex gap-10 animate-marquee justify-center items-center space-x-16">
          {/* Each service item with hover effect */}
          {['App Development', 'Web Development', 'Logo Design', 'Video Editing', 'Graphic Design'].map((text, index) => (
            <div
              key={index}
              className="relative pb-4 text-5xl lg:text-7xl font-bold  text-gray-100 hover:text-green-200 cursor-pointer transition-colors duration-300"
            >
              <span className="absolute -left-16 text-5xl lg:text-7xl text-yellow-300 ">★</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for running animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 10px;
          animation: marquee 30s linear infinite;
        }

        /* Pause animation when hovering */
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
