import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FiLock, FiMail } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import signinAnimation from "../../../public/lotti-animation/signin-animation.json"
import {
  postPublicData,
  postSecureData,
} from "../../BcckendConnection/postData";
import Lottie from "lottie-react";

const Login = () => {
  const {
    signInUser,
    resetPassword,
    signInWithGoogle,
    logoutUser,
    signInWithFacebook,
  } = useAuth();
  const navigate = useNavigate();
  // Modal state for Forgot Password
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const newUser = { email: email.value, password: password.value };

    // Check internet connection
    if (!navigator.onLine) {
      return swal(
        "Network Error",
        "Please check your internet connection.",
        "error"
      );
    }

    try {
      // Login request to server
      const response = await postPublicData("/users/login", newUser);
      // console.log(response)
      if (response.statusCode === 200) {
        // Firebase login
        const res = await signInUser(email.value, password.value);

        if (res?.user?.uid) {
          await swal("Good job!", "Successfully logged in!", "success");
          navigate(from || "/", { replace: true });
        } else {
          swal("Error", "Firebase login failed!", "error");
        }
      } else {
        swal("Oops!", "Server login failed. Please try again.", "error");
      }
    } catch (err) {
      const message = err.message.includes("NetworkError")
        ? "Unable to reach the server. Try again later."
        : "Please try again later.";
      swal("Error", message, "error");
    }

    e.target.reset();
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault(); // Prevent default form submission if inside a form
    console.log("Google sign-in initiated");

    try {
      // Call the signInWithGoogle function from your provider
      const { user } = await signInWithGoogle();

      if (user) {
        const newUser = {
          email: user.email,
          name: user.displayName,
        };
        const res = await postPublicData(
          "/users/login-by-socialmedia",
          newUser
        );
        if (res.statusCode === 200) {
          await swal(
            "Good job!",
            "You have successfully logged in!",
            "success"
          );
          const redirectTo = from || "/"; // If 'from' is not available, go to the homepage
          navigate(redirectTo, { replace: true });
        } else {
          swal("Error", "Somethig went wrong. Please try again.", "error");
        }
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      // Handle any other errors here, e.g., show a Swal notification
      swal(
        "Error",
        "An error occurred during Google sign-in. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-100 p-6">
    <div className="w-full max-w-4xl bg-white p-8 shadow-xl rounded-lg flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Login
        </h2>
        <form onSubmit={handleForm} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
  
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Login Account
            </button>
          </div>
        </form>
  
        {/* Additional Links */}
        <div className="text-sm text-center mt-4">
          <Link to="/register" className="text-teal-600 hover:underline">
            Don't have an account? Register
          </Link>
        </div>
        <div className="text-sm text-center mt-2">
          <Link to="/forget-password">
            <button className="text-teal-600 hover:underline">
              Forgot Password?
            </button>
          </Link>
        </div>
  
        {/* Social Login */}
        <div className="mt-6 flex justify-center">
          <button onClick={handleGoogleSignin} className="text-teal-600 hover:text-teal-700 transition focus:outline-none">
            <span className="sr-only">Sign in with Google</span>
            <FcGoogle className="text-4xl" />
          </button>
        </div>
      </div>
  
      {/* Right Side - Animation */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-r from-green-200 to-teal-200 p-4 rounded-lg">
        <Lottie
          animationData={signinAnimation}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  </div>
  
  );
};

export default Login;
