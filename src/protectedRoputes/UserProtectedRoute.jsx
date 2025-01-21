import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hook/useAdmin';

const UserProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
  
    if (loading) {
        // Render a beautiful Tailwind loader
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="flex space-x-4">
                    <div className="w-6 h-6 rounded-full bg-green-500 animate-bounce"></div>
                    <div className="w-6 h-6 rounded-full bg-white animate-bounce delay-200"></div>
                    <div className="w-6 h-6 rounded-full bg-green-500 animate-bounce delay-400"></div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }}  />;
    }

    return children;
};

export default UserProtectedRoute;
