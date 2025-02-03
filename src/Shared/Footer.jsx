import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../public/img/fc.png";
import { FaCalendar } from "react-icons/fa6";

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
      <div className="bg-green-600 py-12 px-6 flex items-center justify-between text-white">
        <h2 className="text-2xl font-bold">
          Stay Connected With Cutting
          <img className="h-20 hidden xl:block lg:block" src={logo} alt="FC" />
        </h2>
        <button className="px-6 py-2 bg-white text-green-600 rounded-full font-semibold">
          <Link to="/contract">
          Talk to a Specialist →
          </Link>
        </button>
      </div>

      <footer className="bg-green-900 py-12 px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        <div>
          <h3 className="text-2xl font-bold flex items-center space-x-2">
            <span className="text-green-300">✦</span> <span>Extech</span>
          </h3>
          <p className="mt-2 text-gray-300">
            Extech IT is a Phasellus ultricies aliquam volutpat ullamcorper laoreet neque.
          </p>
          <div className="flex space-x-4 mt-4">
            <button onClick={() => handleIconClick("facebook")} className="p-2 bg-gray-800 rounded">
              <FaFacebookF />
            </button>
            <button onClick={() => handleIconClick("twitter")} className="p-2 bg-gray-800 rounded">
              <FaTwitter />
            </button>
            <button onClick={() => handleIconClick("instagram")} className="p-2 bg-gray-800 rounded">
              <FaInstagram />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><Link to="/about" className="text-gray-300">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300">Our Services</Link></li>
            <li><Link to="/blogs" className="text-gray-300">Our Blogs</Link></li>
            <li><Link to="/FAQ" className="text-gray-300">FAQ's</Link></li>
            <li><Link to="/contact" className="text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Recent Posts</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2 text-gray-300">
              <FaCalendar />
              <span>15th April, 2024 - Top 5 Most Famous Technology Trend In 2024</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-300">
              <FaCalendar />
              <span>20th June, 2024 - The Surfing Man Will Blow Your Mind</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="mt-2 text-gray-300 flex items-center">
            <FaEnvelope className="mr-2" /> info@example.com
          </p>
          <p className="text-gray-300 flex items-center">
            <FaPhone className="mr-2" /> +208-6666-0112
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-full rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-4 py-2 bg-green-600 rounded" onClick={handleSendEmail}>
              <FaPaperPlane />
            </button>
          </div>
          <div className="mt-2 text-gray-300 flex items-center">
            <input type="checkbox" className="mr-2" /> I agree to the <Link to="/privacy-policy" className="text-green-400 underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
