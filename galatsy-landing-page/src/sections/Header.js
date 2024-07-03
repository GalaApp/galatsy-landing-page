import React, { useState, useEffect } from 'react';
import { ReactComponent as GalatsyLogo } from '../galatsy-logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`py-4 px-6 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90' : '' 
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <GalatsyLogo width="150" height="45" />
        
        <ul className="space-x-6 md:space-x-10 hidden md:flex">
          <li>
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-purple-400 text-white transition duration-300">Features</a>
          </li>
          <li>
            <a href="#for-stylists" onClick={(e) => handleNavClick(e, 'for-stylists')} className="hover:text-purple-400 text-white transition duration-300">For Stylists</a>
          </li>
          <li>
            <a href="#for-clients" onClick={(e) => handleNavClick(e, 'for-clients')} className="hover:text-purple-400 text-white transition duration-300">For Clients</a>
          </li>
          <li>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="hover:text-purple-400 text-white transition duration-300">Pricing</a>
          </li>
        </ul>

        <button 
          type="button"
          className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500 transition duration-300"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;
