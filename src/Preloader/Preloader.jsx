import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [text, setText] = useState('');
  const message = "Welcome to our service!";

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
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="text-center">
        {/* Typing Effect */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-600">
          {text}
          <span className="animate-pulse">|</span> {/* Blinking cursor */}
        </h1>
        {/* Subtext */}
        <p className="mt-4 text-lg md:text-xl text-green-500">
          Bringing your ideas to life
        </p>
      </div>
    </div>
  );
};

export default Preloader;
