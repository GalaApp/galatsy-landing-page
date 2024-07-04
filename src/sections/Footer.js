import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-4 text-gray-400">&copy; 2024 Galatsy. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"> 
          <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
