import { useEffect, useState } from "react";
import useGigs from "../../hook/useGigs";
import { ImCheckmark, ImCross } from "react-icons/im";
import Header from "../Header/Header";
import useStore from "../../zustand/useStore";
import { useNavigate } from "react-router-dom";

const PaymentTab = () => {
  const navigete = useNavigate()
  // Fetching the services data
  const { data, isLoading, isError, error, refetch } = useGigs();
  const { data: storeData, setData } = useStore();

  // Initialize the state to store services
  const [allServices, setAllServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // Set initial state to null
  const [payableData, setpayableData] = useState(null);
  const handlePayable = (data) => {
    setData(data)

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pt-44 pb-44">
      <h2 className="text-3xl font-bold mb-6">Loading Pricing...</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl px-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex-1 animate-pulse bg-green-300 p-6 rounded-2xl shadow-md"
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
  if (isError || error) {
    return <div>Error: {isError?.message || error?.message}</div>;
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
    <div className="container mx-auto p-6 mt-16 lg:mt-32 mb-16 lg:mb-32">
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
            className={`px-6 py-2 rounded-full ${
              selectedService?.title === service?.title
                ? "bg-green-500 text-white"
                : "bg-from-slate-50 text-green-500 font-bold"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Payment Cards */}
      <div className="flex flex-row flex-wrap justify-center gap-8  ">
        {["basic", "standard", "premium"].map((plan) => (
          <div
          key={plan}
          className={`border border-gray-200 bg-white rounded-3xl shadow-lg flex flex-col relative group cursor-pointer overflow-hidden transition-all duration-300 ${
            plan === "standard" ? "scale-105 shadow-2xl" : ""
          } w-full sm:w-auto sm:min-w-[450px] sm:max-w-[350px]`}
        >
            {/* Plan Header */}
            <div
              className={`${
                plan === "standard"
                // bg-gradient-to-r mt-36 from-green-500 to-teal-400
                  ? "bg-gradient-to-r from-green-500 to-teal-400 "
                  : "bg-gradient-to-r from-gray-400 to-gray-500"
              } text-white p-6 text-2xl text-center rounded-t-3xl`}
            >
              <h2 className="font-extrabold mb-2 capitalize">{plan} Plan</h2>
              {plan === "standard" && (
                <span className="text-xs font-semibold bg-black text-white py-2 px-3 rounded-full absolute top-2 right-2">
                  Recommended
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              {/* Description */}
              <p className="text-center h-32 text-md text-gray-600 font-medium mb-4">
                {selectedService?.pricing?.[plan]?.description ||
                  [plan]?.description}
              </p>
              <div className=" bg-green-400 border-2"></div>

              {/* Price */}
              <p className="mt-4 font-extrabold text-green-600 text-center">
                <div className="gap-2 flex items-center justify-center">
                  <span className="ml-2 text-5xl">
                    {selectedService?.pricing?.[plan]?.price || "N/A"}
                  </span>
                  <span className="line-through text-gray-400 text-3xl">
                    {parseFloat(
                      selectedService?.pricing?.[plan]?.price.replace("$", "")
                    ) + 200}
                    $
                  </span>
                </div>
              </p>

              {/* Delivery Time */}
              <p className="text-gray-500 text-lg text-center mt-4">
                Delivery Time:{" "}
                {selectedService?.pricing?.[plan]?.deliveryTime || "N/A"}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3 text-center text-gray-700">
                {selectedService?.features?.length > 0
                  ? selectedService?.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center space-x-3"
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
                            <ImCheckmark className="text-xl text-green-600" />
                          ) : (
                            <ImCross className="text-xl text-red-400" />
                          )}
                        </span>
                        <span className="text-lg">{feature.title}</span>
                      </li>
                    ))
                  : allServices[0].feature.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center space-x-3"
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
                            <ImCheckmark className="text-xl text-green-600" />
                          ) : (
                            <ImCross className="text-xl text-red-400" />
                          )}
                        </span>
                        <span className="text-lg">{feature.title}</span>
                      </li>
                    ))}
              </ul>
            </div>

            {/* Button */}
            <div className="p-6">
        <button
          onClick={() =>
            handlePayable({
              price: selectedService?.pricing?.[plan]?.price || "N/A",
              description: selectedService?.pricing?.[plan]?.description || "N/A",
              deliveryTime: selectedService?.pricing?.[plan]?.deliveryTime || "N/A",
              revisions: selectedService?.pricing?.[plan]?.revisions || "N/A",
            })
          }
          className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg transition-all duration-500 hover:scale-105"
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
