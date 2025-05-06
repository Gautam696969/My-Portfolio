import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const EnhancedFooterSection = () => {
  return (
    <footer
      className="bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-700 text-white py-12 px-6"
      data-aos="fade-up" // Add fade-up animation
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Social Media Icons */}
        <div
          className="flex justify-center space-x-8 mb-6"
          data-aos="zoom-in" // Zoom in effect on social icons
          data-aos-delay="200"
        >
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-300 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-profile" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-profile" // Replace with your Twitter
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-indigo-300 transition duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Back to Top Button */}
        <div
          className="mb-8"
          data-aos="fade-up" // Fade-up animation for the button
          data-aos-delay="300"
        >
          <a
            href="#top"
            className="inline-block text-lg bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-xl shadow-lg transition duration-300 hover:scale-105"
          >
            Back to Top
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Gautam | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default EnhancedFooterSection;
