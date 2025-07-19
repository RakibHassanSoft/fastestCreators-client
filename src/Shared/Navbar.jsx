import { useEffect, useState } from "react";
import "sal.js/dist/sal.css";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../../public/img/fc.png";
import logoI from "../../public/img/fcI.png";
import {
  FaBolt,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaFacebook,
  FaInstagram,
  FaLayerGroup,
  FaLocationArrow,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaTwitter,
  FaUser,
  FaVideo,
} from "react-icons/fa";
import { postPublicData } from "../BcckendConnection/postData";

const Navbar = () => {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const openServicesMenu = () => {
    setIsServicesMenuOpen(true);
  };

  const closeServicesMenu = () => {
    setIsServicesMenuOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  // Create state to track sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to the scroll position where the navbar becomes sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const authenticaion = useAuth();
  const { user, logoutUser } = authenticaion;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const navigate = useNavigate();

  // console.log(user);
  const handleLogOut = async () => {
    // Check if the user is connected to the internet
    if (!navigator.onLine) {
      swal(
        "Network Error",
        "Please check your internet connection and try again.",
        "error"
      );
      return;
    }

    try {
      // Call the backend logout route
      const response = await postPublicData("/users/logout-user");
      console.log(response);

      if (response.statusCode === 200) {
        logoutUser()
          .then(async (res) => {
            console.log(res);
            swal("Log out successful", "You have been logged out!", "success");
            navigate("/login");
          })
          .catch((error) => {
            // Handle errors during local logout (e.g., clearing session, token, etc.)
            console.error(error);
            swal(
              "Logout Error",
              "There was an issue logging you out locally.",
              "error"
            );
          });
      } else {
        // Handle any non-200 response from the backend
        swal("Logout Failed", "Failed to log out. Please try again.", "error");
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Logout failed:", error);
      if (error.message.includes("NetworkError")) {
        swal(
          "Network Error",
          "Unable to reach the server. Please try again later.",
          "error"
        );
      } else {
        swal("Error", "An unexpected error occurred during logout.", "error");
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState(""); // Tracks active link

  const handleSetActive = (linkName) => {
    setActiveLink(linkName); // Set the clicked link as active
  };

  const menuItems = [
    { path: "/", id: "home", title: "Home" },

    {
      path: "/services",
      id: "services",
      title: "Services",
      children: [
        { path: "/service/web-development", title: "Web Development" },
        { path: "/service/logo-design", title: "Logo Design" },
        { path: "/service/logo-animation", title: "Logo Animation" },
        { path: "/service/video-editing", title: "Video Editing" },
        { path: "/service/app-development", title: "App Development" },
      ],
    },
    // { path: "/blogs", id: "blogs", title: "Blogs" },
    { path: "/about", id: "about", title: "About" },
    { path: "/contact", id: "contact", title: "Contact" },
    { path: "/faq", id: "portfolio", title: "FAQ" },
    // { path: "/login", id: "login", title: "login" },
    // { path: "/register", id: "register", title: "register" },
  ];
  const serviceData = [
    {
      icon: <FaLayerGroup className="text-green-700 text-2xl" />,
      label: "All Services",
      path: "/services",
      desc: `Browse the full range of creative and development services we offer. 
                 Centralized access to design, branding, dev, and more. 
                 Perfect for startups and growing businesses.`,
    },
    {
      icon: <FaPaintBrush className="text-green-700 text-2xl" />,
      label: "Logo Design",
      path: "/service/logo-design",
      desc: `Craft a memorable identity with unique, versatile logo designs. 
                 Aligns perfectly with your brand's tone and vision. 
                 Ideal for rebrands, startups, and personal brands.`,
    },
    {
      icon: <FaBolt className="text-green-700 text-2xl" />,
      label: "Logo Animation",
      path: "/service/logo-animation",
      desc: `Turn static logos into powerful animated assets that captivate. 
                 Boosts brand presence on websites and social content. 
                 Used in intros, reels, and pitch decks.`,
    },
    {
      icon: <FaVideo className="text-green-700 text-2xl" />,
      label: "Video Editing",
      path: "/service/video-editing",
      desc: `Edit raw footage into polished video content with smooth cuts, SFX, and pacing. 
                 Built for storytelling and conversion. 
                 Great for agencies, creators, and ads.`,
    },
    {
      icon: <FaCode className="text-green-700 text-2xl" />,
      label: "Web Development",
      path: "/service/web-development",
      desc: `Custom websites using MERN, Next.js or WordPress tailored to business goals. 
                 Fast, responsive, and SEO-friendly. 
                 Ideal for SaaS, eCommerce, and portfolios.`,
    },
    {
      icon: <FaMobileAlt className="text-green-700 text-2xl" />,
      label: "App Development",
      path: "/service/app-development",
      desc: `Cross-platform mobile & desktop apps using Flutter or React Native. 
                 Seamless UX for your customers, high performance for scale. 
                 Suitable for MVPs, startups, and internal tools.`,
    },
  ];
  const list1 = (
    <>
      <Link
        to="/"
        className={`py-2 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
          activeLink === "home" ? "text-green-400" : "text-white"
        }`}
        onClick={() => handleSetActive("home")}
      >
        Home
      </Link>

      <div className="relative">
        <div
          onMouseEnter={openServicesMenu}
          onMouseLeave={closeServicesMenu}
          className="relative"
        >
          <Link
            className={`py-2 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
              activeLink === "services" ? "text-green-400" : "text-white"
            }`}
          >
            Services
          </Link>

          {isServicesMenuOpen && (
            <div
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
              className="absolute top-12 left-[50%] transform -translate-x-1/2 w-[70vw] bg-white text-black z-50 shadow-2xl rounded-xl border border-green-200"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-10  py-10">
                {serviceData.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      handleSetActive(
                        item.label.toLowerCase().replace(/\s/g, "-")
                      )
                    }
                    className="flex items-start gap-4 border p-6 hover:text-green-700 transition-colors rounded-sm duration-200"
                  >
                    {item.icon}
                    <div>
                      <h3 className="text-md font-semibold mb-2">
                        {item.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-snug whitespace-pre-line">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Link
        to="/about"
        className={`py-2 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
          activeLink === "about" ? "text-green-400" : "text-white"
        }`}
        onClick={() => handleSetActive("about")}
      >
        About
      </Link>

      <Link
        to="/contact"
        className={`py-2 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
          activeLink === "contact" ? "text-green-400" : "text-white"
        }`}
        onClick={() => handleSetActive("contact")}
      >
        Contact
      </Link>

      <Link
        to="/faq"
        className={`py-2 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
          activeLink === "portfolio" ? "text-green-400" : "text-white"
        }`}
        onClick={() => handleSetActive("portfolio")}
      >
        FAQ
      </Link>
    </>
  );

  const list2 = (
    <div className="flex flex-col justify-between gap-2">
      {/* left part  */}
      <div className=" lg:flex w-8/12 m-auto text-center  items-center space-x-4">
        {user && (
          <>
            <div className=" ">
              <div
                onClick={() => setDashboard(!dashboard)}
                className="cursor-pointer flex justify-center items-center space--2"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                  }
                  alt="Avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>

              <div className=" right-0 mt-2  text-white rounded-md shadow-lg ">
                <h1 className="mt-2 mb-2 text-center ">{user?.displayName}</h1>
                <h1 className="mt-2 mb-6 ">{user?.email}</h1>
                <Link
                  to="/dashboard"
                  className="block mb-2 hover:bg-green-700text-white border-b-2 border-r-4 border-green-600 py-1 px-2  transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
                  onClick={() => setDashboard(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block mb-2 hover:bg-green-700text-white border-b-2 border-r-4 border-green-600 py-1 px-2  transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
                  onClick={() => setDashboard(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/logout"
                  onClick={() => {
                    setDashboard(false);
                    handleLogOut();
                  }}
                  className="block mb-2 hover:bg-green-700text-white border-b-2 border-r-4 border-green-600 py-1 px-2  transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
                >
                  Logout
                </Link>
              </div>
            </div>
          </>
        )}
        {!user && (
          <div className="flex gap-2 justify-center">
            <Link
              to="/login"
              onClick={toggleSidebar}
              className="block mb-2 hover:bg-green-700text-white hover:bg-white border-b-2 border-r-4 border-green-600 py-1 px-2  transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={toggleSidebar}
              className="block mb-2 hover:bg-green-700text-white hover:bg-white border-b-2 border-r-4 border-green-600 py-1 px-2  transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      <div>
        {menuItems.map((item) => (
          <div key={item.id}>
            <Link
              to={item.path}
              onClick={toggleSidebar}
              className="block mb-2 text-green-500 bg-whitehover:bg-green-700 border-b-2 border-r-4 border-green-600 hover:text-green-500 py-1 px-2 transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase w-full"
            >
              {item.title}
            </Link>
            {item.children && (
              <div className="ml-3">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={toggleSidebar}
                    className="block mb-2 hover:bg-green-700text-white border-b-2 border-r-4 border-green-600 py-1 px-2 transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* right part  */}
    </div>
  );

  return (
    <div className="bg-green-950 ">
      <div className="    w-full m-auto ">
        {/* Top Navbar */}
        <div className=" max-w-7xl text-gray-800 text-lg w-full m-auto">
          {/* Top Navbar - Large Screens */}
          <div className="hidden lg:flex text-sm justify-evenly items-center px-4  ">
            <div className="flex space-x-4">
              <div className="flex items-center gap-2 mx-auto">
                <span className=" flex justify-center items-center gap-2 text-white">
                  <FaLocationArrow className="text-white"></FaLocationArrow>
                </span>
                <span className="text-white ">
                  Badda,Link road, Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2 space-x-1">
                <span className=" flex justify-center items-center gap-2 text-white">
                  <FaUser className="text-white"></FaUser>
                </span>
                <a
                  href="tel:+8801997360403"
                  className="text-white  hover:underline"
                >
                  +8801997360403
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 ">
              {/* Social Media Icons */}
              <Link to="https://facebook.com" rel="noopener noreferrer">
                <FaFacebook className="text-green-400 text-2xl" />
              </Link>
              <Link to="https://twitter.com" rel="noopener noreferrer">
                <FaTwitter className="text-green-400 text-2xl" />
              </Link>
              <Link to="https://instagram.com" rel="noopener noreferrer">
                <FaInstagram className="text-green-400 text-2xl" />
              </Link>
              {/* Get in Touch Button */}
              {!user && (
                <div className="flex justify-center gap-1 m-1">
                  <Link
                    to="/register"
                    className={`py-1 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
                      activeLink === "register"
                        ? "text-green-400 transform scale-110"
                        : " text-white"
                    }`}
                    onClick={() => handleSetActive("register")}
                  >
                    Register
                  </Link>

                  <Link
                    to="/login"
                    className={`py-1 px-3 text-[16px] rounded-full transition flex justify-center items-center gap-2 ${
                      activeLink === "login"
                        ? "text-green-400 transform scale-110"
                        : " text-white"
                    }`}
                    onClick={() => handleSetActive("login")}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {isDropdownOpen && (
            <div className="px-4 py-2 space-y-2 bg-gray-100">
              <div className="flex items-center space-x-1 justify-center">
                <span className="font-medium text-green-500">Location:</span>
                <span className="text-gray-500 ">
                  123 Main Street, City, Country
                </span>
              </div>
              <div className="flex items-center space-x-1 justify-center">
                <span className="font-medium text-green-500">Contact:</span>
                <a
                  href="tel:+123456789"
                  className="text-gray-500  hover:underline"
                >
                  +1 234 567 89
                </a>
              </div>
              <div className="flex space-x-4 text-green-500 justify-center">
                {/* Social Media Icons */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
              <div className="flex justify-center">
                <>
                  <Link
                    to="/register"
                    className={`py-2 px-3 text-[16px]   rounded-full transition flex justify-center items-center gap-2 ${
                      activeLink === "register"
                        ? "text-green-400  transform scale-110"
                        : "bg-white text-gray-500"
                    }`}
                    onClick={() => handleSetActive("register")}
                  >
                    <h1
                      className={`h-2 w-2 rounded-full ${
                        activeLink === "register"
                          ? "bg-gray-300"
                          : "bg-green-500"
                      }`}
                    ></h1>
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className={`py-2 px-3 text-[16px]   rounded-full transition flex justify-center items-center gap-3 ${
                      activeLink === "login"
                        ? "text-green-400  transform scale-110"
                        : "bg-white text-gray-500"
                    }`}
                    onClick={() => handleSetActive("login")}
                  >
                    <h1
                      className={`h-2 w-2 rounded-full ${
                        activeLink === "login" ? "bg-gray-300" : "bg-green-500"
                      }`}
                    ></h1>
                    Login
                  </Link>
                </>
              </div>
            </div>
          )}
        </div>

        {/* Main Navbar */}
        <nav className="flex  max-w-[1320px] m-auto items-center justify-between p-1 bg-green-950 text-green-500  border-gray-200">
          {/* logo here  */}
          <div className="font-semibold text-white">
            {/* if extra large or large device */}
            <img
              className="h-12 hidden xl:block lg:block"
              src={logo}
              alt="FC"
            />

            {/* if medium device */}
            <img
              className="h-12 hidden md:block lg:hidden xl:hidden"
              src={logo}
              alt="FC"
            />

            {/* if small device */}
            <img className="h-8 block md:hidden" src={logo} alt="FC" />
          </div>

          <div className="block lg:hidden" onClick={toggleSidebar}>
            <button className="text-3xl focus:outline-none">☰</button>
          </div>
          <div className="hidden lg:flex justify-center space-x-2">{list1}</div>
          <div className="hidden  lg:flex items-center space-x-4">
            {user ? (
              <>
                <div className="relative ">
                  <div
                    onClick={() => setDashboard(!dashboard)}
                    className="cursor-pointer flex items-center space-x-2"
                  >
                    <img
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  {dashboard && (
                    <div className="absolute right-0 mt-2 w-48 bg-green-600 text-white rounded-md shadow-lg z-10">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-green-700"
                        onClick={() => setDashboard(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-green-700"
                        onClick={() => setDashboard(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/logout"
                        onClick={() => {
                          setDashboard(false);
                          handleLogOut();
                        }}
                        className="block px-4 py-2 hover:bg-green-700"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition transform hover:scale-105 mx-auto text-center"
                >
                  Get in Touch
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen  bg-gray-800 text-white w-80 rounded-r-lg p-6 transition-transform transform z-30 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`} // Add overflow-y-auto for scrolling
        >
          <div className="flex justify-end">
            <button
              className="text-5xl mb-4 px-2 border-r-4 border-b-2 border-green-500 text-white rounded-full focus:outline-none"
              onClick={toggleSidebar}
            >
              ×
            </button>
          </div>
          <div>{list2}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
