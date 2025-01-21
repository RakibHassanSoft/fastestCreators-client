import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Preloader from '../Preloader/Preloader';
import ChatComponent from './ChatComponent';

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for demonstration purposes
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the timeout as needed (2 seconds in this case)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {loading && <Preloader />} {/* Show Preloader while loading */}
            <Navbar />
            <div className={`flex-grow ${loading ? 'hidden' : 'block'}`}>
                <Outlet />
            </div>
            <Footer />
            
            {/* Include ChatComponent at the bottom */}
            <ChatComponent />
        </div>
    );
};

export default Main;
