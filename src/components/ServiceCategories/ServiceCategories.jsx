import { Link } from "react-router-dom";
import { FiCode, FiShoppingCart, FiPenTool, FiVideo, FiCpu, FiSmartphone } from "react-icons/fi";

const services = [
  { icon: <FiCode size={28} />, label: "Web Development", to: "/service/web-development" },
  { icon: <FiShoppingCart size={28} />, label: "Shopify", to: "/service/web-development" },
  { icon: <FiPenTool size={28} />, label: "Logo Design", to: "/service/logo-design" },
  { icon: <FiCpu size={28} />, label: "Logo Animation", to: "/service/logo-animation" },
  { icon: <FiVideo size={28} />, label: "Video Editing", to: "/service/video-editing" },
  { icon: <FiSmartphone size={28} />, label: "App Development", to: "service/app-development" },
];

const ServiceCategories = () => {
  return (
    <div className="w-full px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.to}
            className="bg-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center transition-transform transform hover:-translate-y-1 hover:shadow-xl group"
          >
            <div className="text-white group-hover:text-green-500">{service.icon}</div>
            <span className="text-white group-hover:text-green-500 text-sm font-medium">
              {service.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
