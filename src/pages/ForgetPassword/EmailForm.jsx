import { useState } from "react";

import { postPublicData } from "../../BcckendConnection/postData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmailForm = () => {
  // State to hold the email input value
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      //   Make a POST request to the server with the email
      const response = await postPublicData("/users/send-otp", {
        email,
      });


      if (response.statusCode === 200) {
        navigate("/email-otp");
        Swal(
          "OTP sent successfully!",
          "Please check your email for the OTP.",
          "success"
        );
        // Handle success
        setMessage("Email sent successfully!");
      } else {
        Swal("Error", "Error sending email. Please try again.", "error");
      }
    } catch (error) {
      // Handle error
      setMessage("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-44 justify-center items-center h-screen bg-white">
      <div className="p-6 bg-green-100 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          Enter Your Email
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-green-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-600"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailForm;
