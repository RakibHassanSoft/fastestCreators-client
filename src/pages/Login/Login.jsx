import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FiLock, FiMail } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { postPublicData, postSecureData } from "../../BcckendConnection/postData";

const Login = () => {
  const { signInUser, resetPassword ,signInWithGoogle,logoutUser,signInWithFacebook} = useAuth();
  const navigate = useNavigate();
  // Modal state for Forgot Password
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const newUser = { email: email.value, password: password.value };
  
    // Check internet connection
    if (!navigator.onLine) {
      return swal("Network Error", "Please check your internet connection.", "error");
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
          navigate(from || '/', { replace: true });
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
    e.preventDefault();  // Prevent default form submission if inside a form
    console.log("Google sign-in initiated");
  
    try {
      // Call the signInWithGoogle function from your provider
      const { user } = await signInWithGoogle();
  
      if (user) {
        const newUser ={
          email: user.email,
          name: user.displayName,
        }
          const res = await postPublicData("/users/login-by-socialmedia", newUser);
          if(res.statusCode === 200){

            await swal("Good job!", "You have successfully logged in!", "success");
            const redirectTo = from || '/';  // If 'from' is not available, go to the homepage
            navigate(redirectTo, { replace: true });
            
          }else {
            swal("Error", "Somethig went wrong. Please try again.", "error"); 
          }
        
      }
  
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      // Handle any other errors here, e.g., show a Swal notification
      swal("Error", "An error occurred during Google sign-in. Please try again.", "error");
    }
  };
  

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
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-6 w-1/2 m-auto">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600"
            >
             Login account
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Do not have an account? Register
          </Link>
        </div>

        {/* Forgot Password Link */}
        <div className="text-sm text-center mt-2">
          <Link to={"/forget-password"}>
          
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
          </Link>
        </div>

        {/* Google and Facebook Icons */}
        <div className="mt-6 flex justify-center">
          <button onClick={handleGoogleSignin} className="text-blue-600 hover:text-blue-700 focus:outline-none">
            <span className="sr-only">Sign up with Google</span>
            <FcGoogle className="text-4xl" />
          </button>
          {/* <button  className="text-blue-600 hover:text-blue-700 focus:outline-none ml-4">
            <span className="sr-only">Sign up with Facebook</span>
            <FaFacebook className="text-4xl" />
          </button>
          <button  className="text-blue-600 hover:text-blue-700 focus:outline-none ml-4">
            <span className="sr-only">Sign up with Facebook</span>
            <FaApple  className="text-4xl text-black "></FaApple >
          </button> */}
        </div>
      </div>

     
    </div>
  );
};

export default Login;















// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FiLock, FiMail } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import sal from "sal.js";
// import swal from "sweetalert";
// import "sal.js/dist/sal.css";
// import useAuth from "../../hooks/useAuth";
// import { postPublicData } from "../../BcckendConnection/postData";
// const Login = () => {
//   const { signInUser ,resetPassword } = useAuth();
//   const navigate = useNavigate();

//   const handleForm = (e) => {
//     e.preventDefault();
//     const newUser = {
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     // Check if the user is connected to the internet
//     if (!navigator.onLine) {
//       swal(
//         "Network Error",
//         "Please check your internet connection and try again.",
//         "error"
//       );
//       return;
//     }

//     signInUser(e.target.email.value, e.target.password.value)
//       .then(async (res) => {
//         if (res?.user?.uid) {
//           try {
//             const response = await postPublicData("/users/login", newUser);
//             console.log(response);
//             if (response.statusCode === 200) {
//               await swal(
//                 "Good job!",
//                 "Your account has been created!",
//                 "success"
//               );
//               navigate("/");
//             } else {
//               swal("Oops!", "Something went wrong with the login.", "error");
//             }
//           } catch (err) {
//             // Handle network or other errors during the post request
//             if (err.message.includes("NetworkError")) {
//               swal(
//                 "Network Error",
//                 "Unable to reach the server. Please try again later.",
//                 "error"
//               );
//             } else {
//               swal("Error", "An unexpected error occurred.", "error");
//             }
//           }
//         }
//       })
//       .catch((err) => {
//         // Handle login-specific errors (wrong credentials, etc.)
//         swal(
//           "Sorry!",
//           "Login rejected! Check your credentials and try again.",
//           "error"
//         );
//       });

//     e.target.reset();
//   };
  

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gray-100"
//       style={{
//         backgroundImage:
//           'url("https://th.bing.com/th/id/R.351b2a9bd7147a0a5d2f05487ddec19a?rik=EKSEiyyWUvBUGA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2015%2f09%2f08%2fwhite-desktop-background_021210542_265.jpg&ehk=r1Di9Ha5RrNf4TVv%2fe9LH3niHthxRR0g2Bvo9km%2fxsQ%3d&risl=&pid=ImgRaw&r=0")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
//         <form onSubmit={handleForm}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiMail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 autoComplete="email"
//                 required
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiLock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 autoComplete="current-password"
//                 required
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div className="mb-6 w-1/2 m-auto">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600"
//             >
//              Login account
//             </button>
//           </div>
//         </form>
//         <div className="text-sm text-center">
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Do not have an account? Register
//           </Link>
//         </div>
//         <div className="mt-6 flex justify-center">
//           <button className="text-blue-600 hover:text-blue-700 focus:outline-none">
//             <span className="sr-only">Sign up with Google</span>
//             <FcGoogle className="text-3xl"></FcGoogle>
//           </button>
//           <button className="text-blue-600 hover:text-blue-700 focus:outline-none ml-4">
//             <span className="sr-only">Sign up with Facebook</span>
//             <FaFacebook className="text-3xl" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
