import { useState, useRef } from "react";
import { postPublicData } from "../../BcckendConnection/postData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmailOtpForm = () => {
  // State to hold the email and individual OTP digits
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // Array for 4 OTP digits
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Create refs for each OTP input field to control focus
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle OTP input change for each individual digit
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d{0,1}$/.test(value)) {
      // Allow only one digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Show OTP in console as it updates
      console.log(newOtp.join(""));

      // Focus on the next OTP field if the current one is filled
      if (value && index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  // Handle backspace key to move focus to the previous OTP input
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        otpRefs[index - 1].current.focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const otpString = otp.join(""); // Join the OTP array to a string

    try {
      // Make a POST request to the server with the email and OTP
      const response = await postPublicData(
        "/users/verify-otp",
        {
          email,
          otp: otpString,
        }
      );

      console.log(response);
      if (response.statusCode === 200) {
        navigate("/update-password");
        Swal(
          "OTP sent successfully!",
          "Please check your email for the OTP.",
          "success"
        );

         // Handle success
      setMessage("OTP verified successfully!");
      } else {
        Swal("Error", "Error sending email. Please try again.", "error");
      }
      
     
    } catch (error) {
      // Handle error
      setMessage("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="p-6 bg-green-100 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          Verify Your Email & OTP
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-green-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
            />
          </div>

          {/* OTP Input (4 separate input boxes) */}
          <div className="flex space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                maxLength="1"
                ref={otpRefs[index]} // Reference for auto-focus
                className="w-1/4 px-4 py-2 text-center text-gray-700 bg-white border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
              />
            ))}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </form>

        {/* Message display */}
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

export default EmailOtpForm;
