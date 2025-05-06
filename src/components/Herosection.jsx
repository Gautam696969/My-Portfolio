import React from 'react';
import CanvasDots from '../context/canvas';


const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900  text-white flex items-center justify-center px-6">
        <CanvasDots />
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-500">Gautam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I’m a Frontend Developer who crafts beautiful and responsive web apps using React, Tailwind, and modern tools.
          </p>
          <a
            href="#projects"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            View My Work
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="./image/g.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-indigo-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
