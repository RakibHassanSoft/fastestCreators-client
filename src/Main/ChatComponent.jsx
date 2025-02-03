import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaClone, FaInstagram } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  // Toggle Chat Box
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Click Outside to Close Chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle Icon Clicks
  const handleIconClick = (platform) => {
    switch (platform) {
      case 'messenger':
        window.open('https://www.messenger.com/t/fastestcreators', '_blank'); 
        break;
      case 'whatsapp':
        window.open('https://wa.me/8801611095655', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:fastestcreators@gmail.com';
        break;
      case 'instagram':
        window.open('https://www.instagram.com/fastestcreators/', '_blank'); 
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-200"
      >
        <span className="text-2xl">{isOpen ? <FaClone /> : <FaMessage />}</span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Messenger */}
            <button
              onClick={() => handleIconClick('messenger')}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200"
            >
              <FaFacebookMessenger size={24} />
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => handleIconClick('whatsapp')}
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
            >
              <FaWhatsapp size={24} />
            </button>
            {/* instagram */}
            <button
              onClick={() => handleIconClick('instagram')}
              className=" text-red-700  p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <FaInstagram size={32} />
            </button>

            {/* Email */}
            <button
              onClick={() => handleIconClick('email')}
              className="bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200"
            >
              <FaEnvelope size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
