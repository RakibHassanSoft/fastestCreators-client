import { useState } from "react";
import { FaDollarSign, FaClipboardList, FaRedo, FaClock } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import useStore from "../../zustand/useStore";

const OrderForm = () => {
  const data = useStore((state) => state.data);
  const [requirements, setRequirements] = useState("");
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [mainOrder, setMainOrder] = useState({});
  const [textareaRows, setTextareaRows] = useState(5);
  
  console.log(mainOrder)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requirements) {
      setFormMessage("Please provide your requirements!");
      return;
    }
    setLoading(true);
    try {
      const newOrder = { ...data, requirements };
      setMainOrder(newOrder);
      setFormMessage("Order submitted successfully!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setRequirements(e.target.value);

    // Adjust textarea rows based on Enter key presses
    if (e.nativeEvent.inputType === "insertLineBreak") {
      setTextareaRows((prevRows) => Math.min(prevRows + 1, 15)); // Limit to 15 rows
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-black text-white pt-44 pb-44">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
          Place Your Order
        </h1>
       
      </header>

      {/* Content Section */}
      <div className="w-full max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Project Details */}
          <div className="bg-gradient-to-br from-green-800 to-green-600 p-8 text-white">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
              <FaClipboardList /> Project Details
            </h2>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-green-300" />{" "}
                <span className="font-bold text-green-300">Price:</span>{" "}
                {data.price || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaClipboardList className="text-green-300" />{" "}
                <span className="font-bold text-green-300">Description:</span>{" "}
                {data.description || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaRedo className="text-green-300" />{" "}
                <span className="font-bold text-green-300">Revisions:</span>{" "}
                {data.revisions || "N/A"}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-300" />{" "}
                <span className="font-bold text-green-300">Delivery Time:</span>{" "}
                {data.deliveryTime || "N/A"}
              </p>
            </div>
          </div>

          {/* Order Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 text-green-600">
              <FaClipboardList /> Add More Details
            </h2>
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
                    <IoMdSend className="text-2xl" /> Submit Order
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
