/* eslint-disable react/no-unknown-property */

const AnimatedText = () => {
  return (
    <div className="relative bg-gray-50  mb-16 pb-2 w-full overflow-hidden mt-8 lg:mt-32  lg:mb-32">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {[...Array(2)].flatMap((_, repeatIndex) =>
          ['App Development', 'Web Development', 'Logo Design', 'Video Editing', 'Graphic Design'].map(
            (text, index) => (
              <div
                key={`${repeatIndex}-${index}`}
                className="relative text-5xl lg:text-7xl font-bold text-gray-300 hover:text-green-900 cursor-pointer transition-colors duration-300 px-16"
              >
                <span className="absolute -left-12 text-xl lg:text-5xl text-yellow-300">★</span>
                {text}
              </div>
            )
          )
        )}
      </div>

      {/* CSS for infinite loop animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
