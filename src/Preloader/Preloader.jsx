import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [text, setText] = useState('');
  const message = 'FastestCreators!';

  useEffect(() => {
    let index = 0;
    const timeout = () => {
      if (index < message.length) {
        setText((prev) => prev + message[index]);
        index++;
        setTimeout(timeout, 0); // more natural typing
      }
    };
    timeout();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black to-green-900 text-white transition-all duration-500">
      {/* Typing Effect with Cursor */}
      <h1 className="text-4xl md:text-6xl font-black tracking-wide text-green-400">
        FastestCreators
        <span className="inline-block w-[10px] h-[38px] bg-green-400 ml-1 animate-ping rounded-sm"></span>
      </h1>

      {/* Subtext Animated */}
      <p className="mt-6 text-lg md:text-2xl text-gray-300 text-center max-w-xl animate-fadeInUp">
        Our site powers web, app, animation & video solutions — all from one creative team.
      </p>
      <p className="mt-2 text-base md:text-xl font-medium text-green-300 animate-fadeInUp delay-200">
        Transforming your ideas into powerful digital experiences.
      </p>
    </div>
  );
};

export default Preloader;
