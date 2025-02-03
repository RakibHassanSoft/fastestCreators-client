import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Pricing from "../pages/Pricing/Pricing";
import LogoDesignForm from "../pages/LogoDesignForm/LogoDesignForm";
// import Checkout from "../pages/Payment/Checkout";
import Payment from "../Payment/Payment";
import Gig from "../pages/DashBoard/Gig/Gig";
import Dashboard from "../pages/DashBoard/Dashboard";
import ContactUs from "../components/contractUs/contractUs";
import ServiceTab from "../components/service/ServiceTab";
import Error from "../pages/Error/Error";
import FAQ from "../pages/FAQ/FAQ";
import Service from "../pages/DashBoard/Service/Service";
import Users from "../pages/DashBoard/Users/Users";
import TwoChecker from "../pages/Pricing/TwoChecker/TwoChecker";

import UserProtectedRoute from "../protectedRoputes/UserProtectedRoute";
import AdminProtectedRoute from "../protectedRoputes/AdminProtectedRoute";

import BlogForm from "../pages/Blog/BlogForm";
import EmailForm from "../pages/ForgetPassword/EmailForm";
import EmailOtpForm from "../pages/ForgetPassword/EmailOtpForm";
import UpdatePasswordForm from "../pages/ForgetPassword/UpdatePasswordForm";
import PrivacyPolicy from "../pages/Policy/PrivacyPolicy";
import ContractsDetails from "../pages/DashBoard/Contracts/ContractsDetails";
import OrderForm from "../pages/Order/OrderForm";
import BlogPage from "../pages/Blog/BlogPage";
import Orders from "../pages/DashBoard/Order/Orders";
import MyOrder from "../pages/MyOrder/MyOrder";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contract',
            element:<ContactUs></ContactUs>
        },
      
        {
            path:'/login',
            element:<Login></Login>
        },

        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/pricing',
            element:<Pricing></Pricing>
        },
   
        {
            path:'/customDesing',
            element:<LogoDesignForm></LogoDesignForm>
        },
        {
          path:"/blogs",
          element:<BlogPage/>
        },
        {
          path:"/blog/:id",
          element:<Blog/>
        },

        {
            path:"/blog-form",
            element:<BlogForm/>
        },
      
        // {
        //     path:'/payment',
        //     element:<Checkout></Checkout>
        // },
        {
            path:'/payment',
            element:<Payment></Payment>
        },
        {
            path:'/gig-from', 
            element:<Gig></Gig>
        },
        {
            path:'/services', 
            element:<ServiceTab></ServiceTab>
        },
        {
            path:'/service/:slug',
            element:<Pricing></Pricing>
        },
        {
            path:'/FAQ',
            element:<FAQ></FAQ>
        },
        {
            path:"/order-payment",
            element:<TwoChecker/>
        },
     
        //Otp related area
        {
            path:"/forget-password",
            element:<EmailForm/>
        },
        {
            path:"/email-otp",
            element:<EmailOtpForm/>
        },
        {
            path:"/update-password",
            element:<UpdatePasswordForm/>
        },
        {
            path:"/privacy-policy",
            element:<PrivacyPolicy/>
        },
        {
            path:"/order-for-payment",
            element:<OrderForm/>
        }
      ]
    },
    {
        path:"/dashboard",
        element:<UserProtectedRoute><Dashboard/></UserProtectedRoute>,
        children:[
            {
                path:"service",
                element:<AdminProtectedRoute><Service/></AdminProtectedRoute>
            },
            {
                path:"users",
                element:<AdminProtectedRoute><Users/></AdminProtectedRoute>
            },
            {
                path:"gig",
                // element:<Gig/>
                element:<AdminProtectedRoute><Gig/></AdminProtectedRoute>
            },
            {
                path:"contracts",
                // element:<Gig/>
                element:<AdminProtectedRoute><ContractsDetails/></AdminProtectedRoute>
            },
            {
                path:"orders",
                // element:<Gig/>
                element:<AdminProtectedRoute><Orders/></AdminProtectedRoute>
            },
            {
                path:"my-order",
                // element:<Gig/>
                element:<MyOrder/>
            },
        ]
    }
   
  ]);

export default Router;