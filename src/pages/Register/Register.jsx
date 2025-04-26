import  {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FcGoogle } from "react-icons/fc";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import swal from "sweetalert";

import useAuth from "../../hooks/useAuth";
import { postPublicData } from "../../BcckendConnection/postData";
import Lottie from "lottie-react";
import signinAnimation from "../../../public/lotti-animation/signup-animation.json"

const RegisterPage = () => {

  // const {createUser} = useContext(AuthContext)
  const authenticaion = useAuth();
  const navigate = useNavigate();
  // console.log(authenticaion)
  const { createUser ,deleteCurrentUser,  signInWithGoogle} = authenticaion;
  // console.log(createUser)
  const [countryCode, setCountryCode] = useState("+1"); // Default country code for USA
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password, phone } = data;
    const newUser = {
      name: firstName + " " + lastName,
      email,
      password,
      phone,
    };
  
    try {
      // First, send the data to the backend
      const response = await postPublicData('/users/register', newUser);
  
      if (response.statusCode === 200) {
        // If the server operation is successful, create the user in Firebase
        const res = await createUser(email, password);
  
        if (res?.user?.uid) {
          // Show success message and navigate to the homepage
          await swal("Good job!", "Your account has been created!", "success");
          navigate("/");
        } else {
          // If Firebase fails to create the user, show an error message
          await deleteCurrentUser()
          await swal("Error", "Failed to create the user !", "error");
        }
      } else {
        // Handle server error
        swal("Sorry", "There was an error on the server. Please try again.", "error");
      }
    } catch (err) {
      // Handle errors during server operation or Firebase creation
      swal("Error", "Please try again letter ", "error");
    }
  
    reset();
  };
  
  const handleGoogleSignin = async (e) => {
    e.preventDefault();  // Prevent default form submission if inside a form
    // console.log("Google sign-in initiated");
  
    try {
      // Call the signInWithGoogle function from your provider
      const { user } = await signInWithGoogle();
  
      if (user) {
        // Make the API call to log in or create a new user
        const res = await postPublicData('/users/register', {
          name: user.displayName,
          email: user.email,
          empassword: "DefaultPassword123",
        });
      // console.log(res)
        // Check if the response indicates success
        if (res.statusCode === 200 || res.status === 200) {
          // Successful login
          await swal("Good job!", "You have successfully logged in!", "success");
          navigate("/");  // Redirect to homepage or dashboard
        } else {
          // Handle user creation failure
          await swal("Error", "Failed to create the user!", "error");
        }
      } else {
        // Handle the case where user object is not returned
        swal("Error", "Google sign-in failed! No user data available.", "error");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      // Handle any other errors here, e.g., show a Swal notification
      swal("Error", "An error occurred during Google sign-in. Please try again.", "error");
    }
  };
  
  // Define regions and their respective country codes
  const regions = {
    asia: [
      { code: "+971", name: "UAE" },
      { code: "+86", name: "China" },
      { code: "+81", name: "Japan" },
      { code: "+82", name: "South Korea" },
      { code: "+92", name: "Pakistan" },
      { code: "+91", name: "India" },
      { code: "+62", name: "Indonesia" },
      { code: "+60", name: "Malaysia" },
      { code: "+63", name: "Philippines" },
      { code: "+66", name: "Thailand" },
      { code: "+94", name: "Sri Lanka" },
      { code: "+65", name: "Singapore" },
      { code: "+976", name: "Mongolia" },
      { code: "+855", name: "Cambodia" },
      { code: "+95", name: "Myanmar" },
      { code: "+998", name: "Uzbekistan" },
    ],
    europe: [
      { code: "+44", name: "UK" },
      { code: "+49", name: "Germany" },
      { code: "+33", name: "France" },
      { code: "+39", name: "Italy" },
      { code: "+34", name: "Spain" },
      { code: "+41", name: "Switzerland" },
      { code: "+31", name: "Netherlands" },
      { code: "+46", name: "Sweden" },
      { code: "+47", name: "Norway" },
      { code: "+358", name: "Finland" },
      { code: "+43", name: "Austria" },
      { code: "+32", name: "Belgium" },
      { code: "+45", name: "Denmark" },
    ],
    africa: [
      { code: "+234", name: "Nigeria" },
      { code: "+27", name: "South Africa" },
      { code: "+20", name: "Egypt" },
      { code: "+233", name: "Ghana" },
      { code: "+254", name: "Kenya" },
      { code: "+221", name: "Senegal" },
      { code: "+216", name: "Tunisia" },
      { code: "+243", name: "Democratic Republic of the Congo" },
      { code: "+212", name: "Morocco" },
      { code: "+225", name: "Ivory Coast" },
    ],
    northAmerica: [
      { code: "+1", name: "USA" }, // USA is a tricky one, as it spans multiple regions.  You may want to split this.
    ],
    southAmerica: [
      { code: "+55", name: "Brazil" },
      { code: "+52", name: "Mexico" }, // Mexico is geographically in North America
      { code: "+57", name: "Colombia" },
      { code: "+54", name: "Argentina" },
      { code: "+51", name: "Peru" },
      { code: "+56", name: "Chile" },
      { code: "+591", name: "Bolivia" },
      { code: "+595", name: "Paraguay" },
      { code: "+598", name: "Uruguay" },
      { code: "+58", name: "Venezuela" },
    ],
    oceania: [
      { code: "+61", name: "Australia" },
    ],
  };
  

  useEffect(() => {
    sal();
  }, []);

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-100 lg:p-6">
  <div className="w-full max-w-4xl bg-white p-8 shadow-xl rounded-lg flex flex-col lg:flex-row">
    {/* Left Side - Form */}
    <div className="w-full md:w-11/12 lg:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
        Create an Account
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              autoComplete="given-name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.firstName && <span className="text-red-600 text-sm">First name is required</span>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
              autoComplete="family-name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.lastName && <span className="text-red-600 text-sm">Last name is required</span>}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            autoComplete="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            autoComplete="new-password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex flex-row   items-center mt-1 rounded-md">
            <select
              id="countryCode"
              {...register("countryCode")}
              className=" text-green-500 w-24  lg:w-28  border border-gray-300 rounded-l-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={countryCode}
              required
              onChange={handleCountryCodeChange}
            >
              <optgroup label="North America">
                {regions.northAmerica.map((country) => (
                  <option key={country.code} value={country.code}>
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Europe">
                {regions.europe.map((country) => (
                  <option key={country.code} value={country.code}>
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </optgroup>
              <optgroup label="African">
                {regions.africa.map((country) => (
                  <option key={country.code} value={country.code}>
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </optgroup>
              <optgroup label="South America">
                {regions.southAmerica.map((country) => (
                  <option key={country.code} value={country.code}>
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Asia">
                {regions.asia.map((country) => (
                  <option key={country.code} value={country.code}>
                    {`${country.code} (${country.name})`}
                  </option>
                ))}
              </optgroup>
            </select>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              autoComplete="tel"
              className="flex-1 mg:w-64 w-full p-3 border  border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter phone number"
            />
          </div>
          {errors.phone && <span className="text-red-600 text-sm">Phone number is required</span>}
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            {...register("agree", { required: true })}
            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
          />
          <label htmlFor="agree" className="ml-2 text-sm text-gray-900">
            I agree to the{" "}
            <Link to="/privacy-policy" className="text-teal-600 hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.agree && <span className="text-red-600 text-sm">Agreement is required</span>}

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Create Account
          </button>
        </div>
      </form>

      {/* Login Link */}
      <div className="text-sm text-center mt-4">
        <Link to="/login" className="text-teal-600 hover:underline">
          Already have an account? Login
        </Link>
      </div>

      {/* Social Signup */}
      <div className="mt-6 flex justify-center">
        <button onClick={handleGoogleSignin} className="text-teal-600 hover:text-teal-700 transition focus:outline-none">
          <span className="sr-only">Sign up with Google</span>
          <FcGoogle className="text-3xl" />
        </button>
      </div>
    </div>

    {/* Right Side - Animation */}
    <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-r from-green-200 to-teal-200 p-4 rounded-lg">
      <Lottie animationData={signinAnimation} className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
    </div>
  </div>
</div>

  );
};

export default RegisterPage;
