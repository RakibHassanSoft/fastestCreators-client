/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Header = ({ title,description }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-sm uppercase font-semibold text-green-600 mb-2">
         {description}
        </p>
        <h2 className="text-4xl font-bold text-gray-900 ">
          {title}
        </h2>
    </div>
    
  );
};

export default Header;
