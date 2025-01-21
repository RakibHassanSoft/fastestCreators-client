import { useEffect, useState } from "react";
import "sal.js/dist/sal.css";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../../public/img/fc.png";
import logoI from "../../public/img/fcI.png";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaSearch,
  FaTwitter,
  FaUser,
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
        { path: "/services/video-editing", title: "Video Editing" },
        { path: "/services/app-development", title: "App Development" },
      ],
    },
    { path: "/blogs", id: "blogs", title: "Blogs" },
    { path: "/about", id: "about", title: "About" },
    { path: "/contract", id: "contact", title: "Contact" },
    { path: "/faq", id: "portfolio", title: "FAQ" },
  ];
  const list1 = (
    <>
      <Link
        to="/"
        className={`py-4 px-8 text-xl font-serif rounded-full transition flex justify-center items-center gap-3 ${
          activeLink === "home"
            ? "text-green-400 font-bold transform scale-110"
            : "bg-white text-gray-500"
        }`}
        onClick={() => handleSetActive("home")}
      >
        <h1
          className={`h-2 w-2 rounded-full ${
            activeLink === "home" ? "bg-gray-300" : "bg-green-500"
          }`}
        ></h1>
        Home
      </Link>

      <div className="relative">
        {/* Services Link with Active State */}
        <div
          onMouseEnter={openServicesMenu}
          onMouseLeave={closeServicesMenu}
          className="relative"
        >
          <Link
            to="/services"
            className={`py-4 px-8 text-xl font-serif rounded-full transition flex justify-center items-center gap-3${
              activeLink === "services"
                ? " text-green-400 font-bold transform scale-110 "
                : " text-gray-500"
            }`}
            onClick={() => handleSetActive("services")}
          >
            <h1
              className={`h-2 w-2 rounded-full ${
                activeLink === "services" ? "bg-gray-300" : "bg-green-500"
              }`}
            ></h1>
            Services
          </Link>

          {/* Dropdown Menu */}
          {isServicesMenuOpen && (
            <div className="absolute left-0 mt-0 pt-3 bg-white border border-gray-200 rounded-md shadow-lg w-48">
              <ul className="py-2">
                <li>
                  <Link
                    to="/service/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600"
                    onClick={() => handleSetActive("web-development")}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/logo-design"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600"
                    onClick={() => handleSetActive("logo-design")}
                  >
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/logo-animation"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600"
                    onClick={() => handleSetActive("video-editing")}
                  >
                    Logo animation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/video-editing"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600"
                    onClick={() => handleSetActive("video-editing")}
                  >
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/app-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-600"
                    onClick={() => handleSetActive("app-development")}
                  >
                    App Development
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Link
        to="/blogs"
        className={`py-4 px-8  text-xl font-serif rounded-full transition flex justify-center items-center gap-3  ${
          activeLink === "blogs"
            ? "text-green-400 font-bold transform scale-110 "
            : " text-gray-500"
        }`}
        onClick={() => handleSetActive("blogs")}
      >
        <h1
          className={`h-2 w-2  rounded-full ${
            activeLink === "blogs" ? "bg-gray-300 " : "bg-green-500"
          }`}
        ></h1>
        Blogs
      </Link>
      <Link
        to="/about"
        className={`py-4 px-8 text-xl font-serif rounded-full transition flex justify-center items-center gap-3${
          activeLink === "about"
            ? "text-green-400 font-bold transform scale-110 gap-3 "
            : " text-gray-500"
        }`}
        onClick={() => handleSetActive("about")}
      >
        <h1
          className={`h-2 w-2  rounded-full ${
            activeLink === "about" ? "bg-gray-300 " : "bg-green-500"
          }`}
        ></h1>
        About
      </Link>
      <Link
        to="/contract"
        className={`py-4 px-8 text-xl font-serif rounded-full transition flex justify-center items-center gap-3${
          activeLink === "contact"
            ? "text-green-400 font-bold transform scale-110 gap-3"
            : " text-gray-500"
        }`}
        onClick={() => handleSetActive("contact")}
      >
        <h1
          className={`h-2 w-2  rounded-full ${
            activeLink === "contact" ? "bg-gray-300 " : "bg-green-500"
          }`}
        ></h1>
        Contact
      </Link>
      <Link
        to="/faq"
        className={`py-4 px-8 text-xl  font-serif rounded-full transition flex justify-center items-center gap-3${
          activeLink === "portfolio"
            ? "text-green-400 font-bold transform scale-110 gap-3"
            : " text-gray-500"
        }`}
        onClick={() => handleSetActive("portfolio")}
      >
        <h1
          className={`h-2 w-2  rounded-full ${
            activeLink === "portfolio" ? "bg-gray-300  " : "bg-green-500"
          }`}
        ></h1>
        FAQ
      </Link>
    </>
  );


  const list2 = (
    <>
      {menuItems.map((item) => (
        <div key={item.id}>
          <Link
            to={item.path}
            onClick={toggleSidebar}
            className="block mb-2 text-white bg-green-600 hover:bg-green-700 py-1 px-2 transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase w-full"
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
                  className="block mb-2 text-white bg-green-600 hover:bg-green-700  py-1 px-2 transition duration-300 transform hover:scale-105 font-semibold tracking-wide uppercase rounded-md w-full"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="fixed  z-10 w-full m-auto ">
      {/* Top Navbar */}
      <div className="bg-gray-50  text-gray-800 text-lg w-full m-auto">
        {/* Top Navbar - Large Screens */}
        <div className="hidden lg:flex justify-evenly items-center px-4 py-2 ">
          <div className="flex space-x-4">
            <div className="flex items-center mx-auto">
              <span className="font-medium flex justify-center items-center gap-2">
                <FaLocationArrow className="text-green-500"></FaLocationArrow>
                Location:
              </span>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium  flex justify-center items-center gap-2">
                <FaUser className="text-green-500"></FaUser>Contact:
              </span>
              <a
                href="tel:+123456789"
                className="text-green-500 hover:underline"
              >
                +1 234 567 89
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            {/* Social Media Icons */}
            <Link to="https://facebook.com" rel="noopener noreferrer">
              <FaFacebook className="text-green-500 text-2xl" />
            </Link>
            <Link to="https://twitter.com" rel="noopener noreferrer">
              <FaTwitter className="text-green-500 text-2xl" />
            </Link>
            <Link to="https://instagram.com" rel="noopener noreferrer">
              <FaInstagram className="text-green-500 text-2xl" />
            </Link>
            {/* Get in Touch Button */}
            <button className="bg-green-400 text-white px-3 py-1 rounded hover:bg-green-600 transition">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Top Navbar - Small Screens */}
        <div className="lg:hidden px-4 py-2 border-4 flex justify-center items-center text-center">
          <span className="font-medium text-center text-green-500">
            Top Menu
          </span>
          <button
            onClick={toggleDropdown}
            className="text-gray-600 focus:outline-none"
          >
            {isDropdownOpen ? (
              <FaChevronUp
                className="font-medium text-center text-green-500"
                size={18}
              />
            ) : (
              <FaChevronDown
                className="font-medium text-center text-green-500"
                size={18}
              />
            )}
          </button>
        </div>
        {isDropdownOpen && (
          <div className="px-4 py-2 space-y-2 bg-gray-100">
            <div className="flex items-center space-x-1">
              <span className="font-medium">Location:</span>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium">Contact:</span>
              <a
                href="tel:+123456789"
                className="text-green-500 hover:underline"
              >
                +1 234 567 89
              </a>
            </div>
            <div className="flex space-x-4">
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
            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition w-full">
              Get in Touch
            </button>
          </div>
        )}
      </div>

      {/* Main Navbar */}
      <nav className="flex  w-full items-center justify-between p-4 bg-white text-green-500 border-b border-gray-200">
        {/* logo here  */}
        <div className="font-semibold text-green-600">
          {/* if extra large or large device */}
          <img className="h-20 hidden xl:block lg:block" src={logo} alt="FC" />

          {/* if medium device */}
          <img
            className="h-20 hidden md:block lg:hidden xl:hidden"
            src={logoI}
            alt="FC"
          />

          {/* if small device */}
          <img className="h-20 block md:hidden" src={logoI} alt="FC" />
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative lg:hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-green-500 rounded-r-lg hover:bg-green-600"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="block lg:hidden" onClick={toggleSidebar}>
          <button className="text-3xl focus:outline-none">☰</button>
        </div>
        <div className="hidden lg:flex justify-center space-x-2">{list1}</div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-white bg-green-500 rounded-r-lg hover:bg-green-600"
              >
                <FaSearch />
              </button>
            </div>
          </div>
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
                      to="/profile"
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
            <>
              <Link
                to="/register"
                className="text-green-500 hover:text-white hover:bg-green-600 py-2 px-4 transition duration-300 transform hover:scale-105"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-green-500 hover:text-white hover:bg-green-600 py-2 px-4 transition duration-300 transform hover:scale-105"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full mt-16 bg-gray-800 text-white w-64 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-3xl mb-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          ×
        </button>
        {list2}
      </div>
    </div>
  );
};

export default Navbar;
