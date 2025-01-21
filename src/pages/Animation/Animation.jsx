import React, { useEffect } from 'react';
import './Animation.css'; // Import the CSS file
const Animation = ({ redirectTo }) => {
    redirectTo ='/'
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirectTo;
    }, 2000);

    return () => clearTimeout(timer); 
  }, [redirectTo]);

  return (
    <div className="container">
      <div className="icon">🌟</div>
      <div className="welcome">Welcome to Our Professional Site</div>
    </div>
  );
};

export default Animation;
