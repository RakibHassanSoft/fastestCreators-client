import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaClipboardList,
  FaRedo,
  FaClock,
  FaMoneyBillWave,
  FaBackspace,
  FaBackward,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import useStore from "../../zustand/useStore";
import axiosSecure from "../../BcckendConnection/axiosSecure";
import useExchangeRate from "./useExchangeRate";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderForm = () => {
  const data = useStore((state) => state.data);
  // console.log(data)
  //deliveryTime description price revisions
  const { rate, error } = useExchangeRate();
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [textareaRows, setTextareaRows] = useState(5);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !data?.deliveryTime &&
      !data?.description &&
      !data?.price &&
      !data?.revisions
    ) {
      navigate("/", { replace: true }); // or navigate(-1) for previous page
    }
  }, [data, navigate]);
  // Calculate USD and BDT amounts
  const usdAmount = data?.price
    ? parseFloat(data.price.replace(/[^0-9.-]+/g, ""))
    : 0;
  const bdtAmount = rate ? (usdAmount * rate).toFixed(2) : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(data).length === 0) {
      Swal.fire({
        title: "No product selected!",
        text: "Please select a product before placing the order.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      window.location.href = "/";
      return;
    }

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
    try {
      const orderPayload = {
        ...data,
        requirements,
        total_amount: usdAmount, // USD amount
        cus_name: userInfo.name,
        cus_email: userInfo.email,
        cus_phone: userInfo.phone,
        cus_add1: userInfo.address,
      };

      const response = await axiosSecure.post(
        "/payment/initiate",
        orderPayload
      );
      console.log("Payment response:", response.data);
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        setFormMessage("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setFormMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setRequirements(e.target.value);
    if (e.nativeEvent.inputType === "insertLineBreak") {
      setTextareaRows((prevRows) => Math.min(prevRows + 1, 15));
    }
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-black text-white pt-44 pb-44">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
          Place Your Order
        </h1>
      </header>

      <div className="w-full max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Project Details */}
          <div className="bg-gradient-to-br from-green-800 to-green-600 p-8 text-white">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
              <FaClipboardList /> Project Details
            </h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-green-300" />
                <span className="font-bold text-green-300">Price (USD):</span> $
                {usdAmount || "N/A"}
              </p>

              {rate && (
                <p className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-300" />
                  <span className="font-bold text-green-300">
                    Price (BDT):
                  </span>{" "}
                  {bdtAmount} BDT
                </p>
              )}

              {error && (
                <p className="text-red-300">
                  ⚠️ Error fetching live currency rate. Showing only USD price.
                </p>
              )}

              <p className="flex items-center gap-2">
                <FaClipboardList className="text-green-300" />
                <span className="font-bold text-green-300">
                  Description:
                </span>{" "}
                {data.description || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaRedo className="text-green-300" />
                <span className="font-bold text-green-300">
                  Revisions:
                </span>{" "}
                {data.revisions || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-300" />
                <span className="font-bold text-green-300">
                  Delivery Time:
                </span>{" "}
                {data.deliveryTime || "N/A"}
              </p>
            </div>
            {
              !data?.deliveryTime  && !data?.description && !data?.price && !data.revisions && <div className="flex justify-center mt-8">
             
              <button
                onClick={() => navigate(-1)}
                className="mt-12 border-2 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition flex items-center gap-2"
              >
                 <FaBackward/>
                Back to previous page
              </button>
            </div>
            }
            
          </div>

          {/* Order Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 text-green-600">
                <FaClipboardList /> Add More Details
              </h2>

              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              />
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              />
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              />
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                placeholder="Your Address"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none"
              />

              <textarea
                id="requirements"
                value={requirements}
                onChange={handleChange}
                rows={textareaRows}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-4 focus:ring-green-400 outline-none resize-none"
                placeholder="Describe your requirements here..."
              ></textarea>

              {formMessage && (
                <p
                  className={`text-center py-2 px-4 rounded-lg ${
                    formMessage.includes("success")
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {formMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold text-lg transform hover:scale-105 transition-transform duration-300"
                disabled={loading}
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <IoMdSend className="text-2xl" /> Submit & Pay
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
