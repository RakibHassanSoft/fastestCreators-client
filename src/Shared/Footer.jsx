import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../public/img/fc.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    if (email) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=fastestcreators@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to%20talk%20about%20your%20services.%20Here%20is%20my%20email:%20${email}`;
      window.open(gmailUrl, "_blank");
    } else {
      alert("Please enter your email first.");
    }
  };

  const handleIconClick = (platform) => {
    switch (platform) {
      case "messenger":
        window.open("https://www.messenger.com/t/fastestcreators", "_blank");
        break;
      case "whatsapp":
        window.open("https://wa.me/8801611095655", "_blank");
        break;
      case "email":
        window.location.href = "mailto:fastestcreators@gmail.com";
        break;
      case "instagram":
        window.open("https://www.instagram.com/fastestcreators/", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-green-800 py-12 px-6 flex flex-col md:flex-row items-center justify-between text-white">
        <h2 className="text-2xl font-bold mb-4 md:mb-0 flex items-center gap-4">
          Stay Connected With Fastest Creators
          <img
            className="h-10 bg-black rounded-lg hidden xl:block lg:block"
            src={logo}
            alt="FC"
          />
        </h2>
        <button className="px-6 py-2 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition">
          <Link to="/contract">Talk to a Specialist →</Link>
        </button>
      </div>

      {/* Footer section */}
      <footer className="bg-black py-12 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {/* About / Brand */}
        <div>
          <h3 className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-green-400">✦</span>
            <span>Fastest Creators</span>
          </h3>
          <p className="mt-2 text-gray-300">
            We specialize in web development, app creation, video editing,
            logo design, and animation — all tailored to your brand's success.
          </p>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleIconClick("facebook")}
              className="p-2 bg-gray-800 rounded hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </button>
            <button
              onClick={() => handleIconClick("twitter")}
              className="p-2 bg-gray-800 rounded hover:bg-green-600 transition"
            >
              <FaTwitter />
            </button>
            <button
              onClick={() => handleIconClick("instagram")}
              className="p-2 bg-gray-800 rounded hover:bg-green-600 transition"
            >
              <FaInstagram />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/FAQ" className="hover:text-white transition">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-green-400 underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="text-green-400 underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="mt-2 text-gray-300 flex items-center">
            <FaEnvelope className="mr-2" /> support.fastestcreators@gmail.com
          </p>
          <p className="text-gray-300 flex items-center">
            <FaPhone className="mr-2" /> +8801997360403
          </p>

          <div className="mt-4 flex border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-full  text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-600  text-white hover:bg-green-700 transition"
              onClick={handleSendEmail}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
