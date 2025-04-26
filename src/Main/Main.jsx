import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';  // Import useLocation hook to track route changes
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Preloader from '../Preloader/Preloader';
import ChatComponent from './ChatComponent';
import BackButton from './BackButton';

const Main = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();  // Get current location to track route changes

    useEffect(() => {
        // Scroll to the top whenever the location changes (new page route)
        window.scrollTo(0, 0);
    }, [location]);  // Depend on location to trigger whenever the route changes

    useEffect(() => {
        // Simulate a delay for demonstration purposes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the timeout as needed (1 second in this case)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-montserrat">
            {loading && <Preloader />} {/* Show Preloader while loading */}
            
            {/* Navbar */}
            <Navbar />
            
            {/* Main Content Area */}
            <div className={`flex-grow ${loading ? 'hidden' : 'block'} lg:px-4 py-6`}>
                {/* Outlet renders the nested routes/components */}
                <Outlet />
            </div>
            
            {/* Footer */}
            <Footer />
            
            {/* Chat Component */}
            <div className="relative">
                <ChatComponent />
            </div>

            {/* <BackButton /> */}
        </div>
    );
};

export default Main;
