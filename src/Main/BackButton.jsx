import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Check if the current page is the order page, hide the button if true
    if (location.pathname.includes('/order')) {
        return null; // Hide the back button on the order page
    }

    return (
        <div className="lg:hidden fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button 
                onClick={() => navigate(-1)} 
                className="bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 transition"
            >
                <FaArrowLeft size={20} />
            </button>
        </div>
    );
};

export default BackButton;
