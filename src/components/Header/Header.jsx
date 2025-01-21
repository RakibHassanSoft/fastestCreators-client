/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const AnimatedTitle = ({ title,description }) => {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl  lg:text-6xl font-extrabold text-gray-600 hover:text-green-400  relative">
        <span className="relative z-5"> ~{title}~</span>
        <span className="absolute inset-0 border-b-4 border-gray-600 w-1/3 m-auto opacity-20 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default AnimatedTitle;
