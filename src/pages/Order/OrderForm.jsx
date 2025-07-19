import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaClipboardList,
  FaRedo,
  FaClock,
  FaMoneyBillWave,
  FaBackward,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const OrderForm = () => {
  // Replace this with your actual data source or props
  const data = {
    plan: "Standard",
    price: "$99.99",
    description: "High quality web design",
    revisions: "3",
    deliveryTime: "7 Days",
  };

  // Simulated exchange rate and error (replace with your hook or logic)
  const rate = 105.25;
  const error = false;

  const [requirements, setRequirements] = useState("");
  const [textareaRows, setTextareaRows] = useState(5);
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if essential data missing - replace logic if needed
    if (
      !data?.deliveryTime &&
      !data?.description &&
      !data?.price &&
      !data?.revisions
    ) {
      navigate("/", { replace: true });
    }
  }, [data, navigate]);

  const usdAmount = data?.price
    ? parseFloat(data.price.replace(/[^0-9.-]+/g, ""))
    : 0;
  const bdtAmount = rate ? (usdAmount * rate).toFixed(2) : null;

  // Handler placeholders - implement POST logic here later
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !requirements ||
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.phone ||
      !userInfo.address
    ) {
      setFormMessage(
        "Please fill in all fields including requirements and your info!"
      );
      return;
    }

    setLoading(true);

    // TODO: Implement your submission logic here (e.g., API call)
    setTimeout(() => {
      setLoading(false);
      setFormMessage("Form submitted successfully!"); // Success message placeholder
    }, 1500);
  };

  const handleChange = (e) => {
    setRequirements(e.target.value);
    if (e.nativeEvent.inputType === "insertLineBreak") {
      setTextareaRows((prev) => Math.min(prev + 1, 15));
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center py-20 px-4">
      <header className="mb-12 text-center max-w-2xl">
        <Header
          title="Order Form"
          subtitle="Customize Your Order"
          description="Fill in the details below to customize your order. We will get back to you shortly."
        />
        <p className="mt-3 text-gray-300">
          Fill in the details below to customize your order. We will get back to
          you shortly.
        </p>
      </header>

      <div className="w-full max-w-5xl bg-white text-gray-900 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-1">
        {/* Project Details Panel */}
        <div className="bg-black p-10 flex flex-col  justify-center text-white items-start">
          <div>
            <h2 className="text-3xl font-montserrat mb-8 flex items-center gap-3 text-white">
              <FaClipboardList /> Project Details
            </h2>
            <div className="space-y-5 text-lg text-green-100">
              <p className="flex items-center gap-2">
                <FaClipboardList className="text-green-300" />
                <span className="font-bold">Plan:</span> {data.plan || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-green-300" />
                <span className="font-bold">Price (USD):</span> $
                {usdAmount || "N/A"}
              </p>
              {rate && (
                <p className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-300" />
                  <span className="font-bold">Price (BDT):</span> {bdtAmount}{" "}
                  BDT
                </p>
              )}
              {error && (
                <p className="text-red-400">
                  ⚠️ Error fetching currency rate, showing USD price only.
                </p>
              )}
              <p className="flex items-center gap-2">
                <FaClipboardList className="text-green-300" />
                <span className="font-bold">Description:</span>{" "}
                {data.description || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaRedo className="text-green-300" />
                <span className="font-bold">Revisions:</span>{" "}
                {data.revisions || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-300" />
                <span className="font-bold">Delivery Time:</span>{" "}
                {data.deliveryTime || "N/A"}
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/3 mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mt-12 w-full py-3  px-2 rounded-lg  border-2 border-green-300 text-white font-semibold hover:bg-black hover:text-white transition bg-green-700"
          >
            Go Back
          </button>
          </div >
        </div>

        {/* Order Form Panel */}
        <div className="p-10 bg-white text-gray-900">
          <form onSubmit={handleSubmit} className="space-y-7">
            <h2 className="text-3xl font-semibold mb-6 text-green-900 flex items-center gap-3">
              <FaClipboardList /> Add More Details
            </h2>

            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              required
            />
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              placeholder="Your Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              required
            />

            <textarea
              id="requirements"
              value={requirements}
              onChange={handleChange}
              rows={textareaRows}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none resize-none"
              placeholder="Describe your requirements here..."
              required
            ></textarea>

            {formMessage && (
              <p
                className={`text-center py-3 px-4 rounded-lg ${
                  formMessage.toLowerCase().includes("success")
                    ? "bg-green-200 text-green-900"
                    : "bg-red-200 text-red-900"
                }`}
              >
                {formMessage}
              </p>
            )}

            <div className="w-1/2 md:w-1/2 lg:w-1/3 mx-auto">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3 px-2 rounded-md bg-green-700 text-white font-semibold text-base hover:bg-black transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <IoMdSend className="text-xl" />
                    Submit & Pay
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
