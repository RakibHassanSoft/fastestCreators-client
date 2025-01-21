import  {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import swal from "sweetalert";

import useAuth from "../../hooks/useAuth";
import { postPublicData } from "../../BcckendConnection/postData";

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
    console.log("Google sign-in initiated");
  
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
      console.log(res)
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
    richCountries: [
      { code: "+1", name: "USA" },
      { code: "+44", name: "UK" },
      { code: "+49", name: "Germany" },
    ],
    asianCountries: [
      { code: "+91", name: "India" },
      { code: "+86", name: "China" },
      { code: "+81", name: "Japan" },
    ],
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage:
          'url("https://th.bing.com/th/id/R.351b2a9bd7147a0a5d2f05487ddec19a?rik=EKSEiyyWUvBUGA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2015%2f09%2f08%2fwhite-desktop-background_021210542_265.jpg&ehk=r1Di9Ha5RrNf4TVv%2fe9LH3niHthxRR0g2Bvo9km%2fxsQ%3d&risl=&pid=ImgRaw&r=0")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mt-44 max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                autoComplete="given-name"
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.firstName && (
                <span className="text-red-600 text-sm">
                  First name is required
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
                autoComplete="family-name"
                className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm">
                  Last name is required
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              autoComplete="email"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              autoComplete="new-password"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">Password is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="flex items-center mt-1 rounded-md shadow-sm">
              <select
                id="countryCode"
                {...register("countryCode")}
                className="bg-gray-100 text-gray-600 appearance-none border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={countryCode}
                onChange={handleCountryCodeChange}
              >
                <optgroup label="Rich Countries">
                  {regions.richCountries.map((country) => (
                    <option
                      key={country.code}
                      value={country.code}
                    >{`${country.code} (${country.name})`}</option>
                  ))}
                </optgroup>
                <optgroup label="Asian Countries">
                  {regions.asianCountries.map((country) => (
                    <option
                      key={country.code}
                      value={country.code}
                    >{`${country.code} (${country.name})`}</option>
                  ))}
                </optgroup>
              </select>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                autoComplete="tel"
                className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <span className="text-red-600 text-sm">
                  Phone number is required
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              {...register("agree", { required: true })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline">
              <span className="text-blue-600">Privacy Policy</span>
              </Link>
            </label>
            {errors.agree && (
              <span className="text-red-600 text-sm">
                Agreement is required
              </span>
            )}
          </div>

          <div className="w-1/2 m-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600"
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="text-sm text-center mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={handleGoogleSignin} className="text-blue-600 hover:text-blue-700 focus:outline-none">
            <span className="sr-only">Sign up with Google</span>
            <FcGoogle className="text-3xl" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
