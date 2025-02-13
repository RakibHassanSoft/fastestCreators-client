import { useState } from "react";
import { postPublicData } from "../../BcckendConnection/postData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const UpdatePasswordForm = () => {
  const { resetPassword } = useAuth();

  // State to hold email and new password values
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle new password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
  
        // Step 2: Send the new password to the server via POST request
        const resetPasswordData = { email, newPassword };
        const serverResponse = await postPublicData(
          "/users/reset-password",
          resetPasswordData
        );

        if (serverResponse.statusCode === 200) {
          // Step 3: Show success message and navigate
          Swal.fire(
            "Now You can login with your new password!",
            "Please check your email for the OTP.",
            "success"
          );

          setTimeout(() => {
            navigator("/login");
          }, 1000);

          setMessage("Email sent successfully!");
        } else {
          // Step 4: Show error message from server
          Swal.fire("Error", "Error sending email. Please try again.", "error");
        }
      
    } catch (error) {
      // Step 6: Handle any unexpected errors
      console.error("Unexpected Error:", error);
      setMessage("Error updating password. Please try again.");
    } finally {
      // Step 7: Stop the loading state
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-44 justify-center items-center h-screen bg-white">
      <div className="p-6 bg-green-100 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          Update Your Password
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

          {/* New Password Input */}
          <div>
            <label htmlFor="newPassword" className="block text-green-700">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-green-500 rounded-lg focus:outline-none focus:border-green-700"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {loading ? "Updating..." : "Update Password"}
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

export default UpdatePasswordForm;
