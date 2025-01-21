import React, { useState } from 'react';
import { FaTimes, FaFacebookMessenger, FaWhatsapp, FaEnvelope, FaCross, FaClone, FaTextHeight } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = (platform) => {
    switch (platform) {
      case 'messenger':
        window.open('https://www.messenger.com/t/your_page_id', '_blank'); // Replace with your Messenger page link
        break;
      case 'whatsapp':
        window.open('https://wa.me/your_phone_number', '_blank'); // Replace with your WhatsApp number
        break;
      case 'email':
        window.location.href = 'mailto:your_email@example.com'; // Replace with your email
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
        className="fixed bottom-2 right-8 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-200"
      >
        <span className="text-2xl">{isOpen ? <FaClone /> : <FaMessage/>}</span> {/* Toggle Icon */}
      </button>

      {/* Chat Options */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform translate-y-0">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => handleIconClick('messenger')}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200"
            >
              <FaFacebookMessenger size={24} />
            </button>
            <button
              onClick={() => handleIconClick('whatsapp')}
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
            >
              <FaWhatsapp size={24} />
            </button>
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
