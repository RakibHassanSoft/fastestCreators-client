import { useEffect, useState } from "react";
import useGigs from "../../hook/useGigs";
import { ImCheckmark, ImCross } from "react-icons/im";
import Header from "../Header/Header";
import useStore from "../../zustand/useStore";
import { useNavigate } from "react-router-dom";

const PaymentTab = () => {
  const navigete = useNavigate();
  // Fetching the services data
  const { data, isLoading, isError, error, refetch } = useGigs();
  const { data: storeData, setData } = useStore();

  // Initialize the state to store services
  const [allServices, setAllServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // Set initial state to null
  // console.log(selectedService)
  const [payableData, setpayableData] = useState(null);
  const handlePayable = (data) => {
    setData(data);

    navigete("/order-for-payment");
  };
  // Handle loading and data fetching
  // console.log(payableData);
  useEffect(() => {
    if (data && data.data) {
      setAllServices(data.data); // Set services if data is available
    }
  }, [data]);

  // Once the allServices data is available, set the first service as the selected one
  useEffect(() => {
    if (allServices.length > 0 && !selectedService) {
      setSelectedService(allServices[0]); // Set default selected service after data is loaded
    }
  }, [allServices, selectedService]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700 pt-32 pb-32">
        {/* Title Skeleton */}
        <div className="h-8 w-48 bg-green-300 rounded mb-8 animate-pulse"></div>

        {/* Tabs Skeleton */}
        <div className="flex gap-4 mb-12">
          {[1, 2, 3, 4].map((tab) => (
            <div
              key={tab}
              className="h-10 w-24 bg-green-300 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Cards Skeleton */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl px-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex-1 bg-green-200 p-6 rounded-2xl shadow-md animate-pulse"
            >
              <div className="h-6 bg-green-300 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-green-300 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-green-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-green-300 rounded w-1/3 mb-4"></div>
              <div className="h-10 bg-green-300 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Handle error state
 // Handle error state
if (isError || error) {
  return <div className="text-red-500 text-center py-8">Network problem. Please try again later.</div>;
}


  // If no services are available yet, return early to prevent errors
  if (!selectedService) {
    return <div>Loading services...</div>;
  }

  // Process the data to create the structure you need for displaying services
  const myServices = data?.data.map((service) => {
    return {
      title: service?.title,
      features: service.feature.map((f) => ({
        title: f.title,
        features: f.features, // Features array for each pricing tier
      })),
      pricing: {
        basic: {
          price: service.pricing?.basic?.price,
          description: service.pricing?.basic?.description,
          revisions: service.pricing?.basic?.revisions,
          deliveryTime: service.pricing?.basic?.deliveryTime,
        },
        standard: {
          price: service.pricing?.standard?.price,
          description: service.pricing?.standard?.description,
          revisions: service.pricing?.standard?.revisions,
          deliveryTime: service.pricing?.standard?.deliveryTime,
        },
        premium: {
          price: service.pricing?.premium?.price,
          description: service.pricing?.premium?.description,
          revisions: service.pricing?.premium?.revisions,
          deliveryTime: service.pricing?.premium?.deliveryTime,
        },
      },
    };
  });

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="container  p-1 lg:p-6 mt-16 lg:mt-32 mb-16 lg:mb-32 mx-auto">
      <Header
        title={"Payment Plans"}
        description={"This is the best choice for you"}
      />

      {/* Service selection buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {myServices.map((service, index) => (
          <button
            key={index}
            onClick={() => handleServiceSelect(service)} // Select service on click
            className={`px-2 py-2 rounded-full ${
              selectedService?.title === service?.title
                ? "bg-green-900 text-white"
                : "bg-from-slate-50 shadow-sm text-green-900 font-semibold"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Payment Cards */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {["basic", "standard", "premium"].map((plan) => (
          <div
            key={plan}
            className={`w-full sm:w-[300px] bg-white rounded-3xl border border-gray-200 shadow-md flex flex-col items-center  text-center transition-all duration-300 cursor-pointer overflow-hidden group ${
              plan === "standard"
                ? "scale-105 shadow-2xl border-green-500"
                : "hover:shadow-xl"
            }`}
          >
            {/* Plan Header */}
            <div
              className={`${
                plan === "standard"
                  ? // bg-gradient-to-r mt-36 from-green-500 to-teal-400
                    "bg-gradient-to-r from-green-500 to-teal-400 pt-10 "
                  : "bg-gradient-to-r from-gray-400 to-gray-500"
              } text-white  text-2xl text-center w-full `}
            >
              <h2 className="font-extrabold mb-2 capitalize">{plan} Plan</h2>
              {plan === "standard" && (
                <span className="text-xs font-semibold bg-black text-white py-1 lg:py-2 px-3 rounded-full absolute top-0 right-1 lg:top-2 lg:right-2">
                  Recommended
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="p-1 flex-1 overflow-y-auto">
              {/* Description */}
              <p className="text-center h-24 text-sm text-gray-600 mt-2  ml-6 mr-6 font-sm mb-2">
                {selectedService?.pricing?.[plan]?.description ||
                  [plan]?.description}
              </p>
              <div className=" bg-green-400 border w-11/12 m-auto"></div>

              {/* Price */}
              <div className="mt-4 font-extrabold text-green-600 text-r">
                <div className="gap-2 flex items-center justify-center">
                  <span className="ml-2 text-3xl">
                    {selectedService?.pricing?.[plan]?.price || "N/A"}
                  </span>
                  <span className="line-through text-gray-400 text-xl">
                    {parseFloat(
                      selectedService?.pricing?.[plan]?.price.replace("$", "")
                    ) + 200}
                    $
                  </span>
                </div>
              </div>

              {/* Delivery Time */}
              <p className="text-gray-500 text-md text-center mt-4">
                Delivery Time:{" "}
                {selectedService?.pricing?.[plan]?.deliveryTime || "N/A"}
              </p>

              {/* Features List */}
              <ul className="mt-2 space-y-1 text-center text-gray-700 ">
                {selectedService?.features?.length > 0
                  ? selectedService?.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex  justify-left ml-4 space-x-3"
                      >
                        <span
                          className={`${
                            feature.features[
                              ["basic", "standard", "premium"].indexOf(plan)
                            ]
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.features[
                            ["basic", "standard", "premium"].indexOf(plan)
                          ] ? (
                            <ImCheckmark className="text-md text-green-600" />
                          ) : (
                            <ImCross className="text-md text-red-400" />
                          )}
                        </span>
                        <span className=" text-left text-sm">
                          {feature.title}
                        </span>
                      </li>
                    ))
                  : allServices[0].feature.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center  space-x-1 ml-2"
                      >
                        <span
                          className={`${
                            feature.features[
                              ["basic", "standard", "premium"].indexOf(plan)
                            ]
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.features[
                            ["basic", "standard", "premium"].indexOf(plan)
                          ] ? (
                            <ImCheckmark className="text-md text-green-600" />
                          ) : (
                            <ImCross className="text-md text-red-400" />
                          )}
                        </span>
                        <span className="text-md">{feature.title}</span>
                      </li>
                    ))}
              </ul>
            </div>

            {/* Button */}
            <div className="p-1">
              <button
                onClick={() =>
                  handlePayable({
                    price: selectedService?.pricing?.[plan]?.price || "N/A",
                    plan: plan,
                    description:
                      selectedService?.pricing?.[plan]?.description || "N/A",
                    deliveryTime:
                      selectedService?.pricing?.[plan]?.deliveryTime || "N/A",
                    revisions:
                      selectedService?.pricing?.[plan]?.revisions || "N/A",
                  })
                }
                className="mt-1 w-full px-2 py-2 bg-gradient-to-r bg-green-950 text-white hover:bg-white hover:text-green-950 border rounded-md transition-all duration-500 "
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentTab;
