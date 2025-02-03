import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [text, setText] = useState('');
  const message = "Welcome to FastestCreators!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + message[index]);
      index += 1;
      if (index === message.length) clearInterval(interval);
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {/* Typing Effect */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-green-500">
        {text}
        <span className="animate-pulse">|</span> {/* Blinking cursor */}
      </h1>
      {/* Subtext */}
      <p className="mt-6 text-xl md:text-2xl text-gray-300">
        Our website is for IT services, web, app, and video solutions.
      </p>
      <p className="mt-2 text-lg md:text-xl font-semibold text-green-400">
        Bringing your ideas to life, faster than ever.
      </p>
    </div>
  );
};

export default Preloader;
