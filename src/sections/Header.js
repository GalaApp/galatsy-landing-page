import React, { useState, useEffect } from 'react';
import { ReactComponent as GalatsyLogo } from '../galatsy-logo.svg';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`py-4 px-4 sm:px-6 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90' : '' 
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <GalatsyLogo width="120" height="36" className="w-24 h-auto sm:w-32 sm:h-auto" />
        
        {/* Desktop Menu */}
        <ul className="space-x-6 lg:space-x-10 hidden lg:flex">
          <NavItem href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</NavItem>
          <NavItem href="#for-stylists" onClick={(e) => handleNavClick(e, 'for-stylists')}>For Stylists</NavItem>
          <NavItem href="#for-clients" onClick={(e) => handleNavClick(e, 'for-clients')}>For Clients</NavItem>
          <NavItem href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</NavItem>
        </ul>

        <div className="flex items-center space-x-4">
          <button 
            type="button"
            className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-purple-500 transition duration-300"
          >
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <NavItem href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</NavItem>
            <NavItem href="#for-stylists" onClick={(e) => handleNavClick(e, 'for-stylists')}>For Stylists</NavItem>
            <NavItem href="#for-clients" onClick={(e) => handleNavClick(e, 'for-clients')}>For Clients</NavItem>
            <NavItem href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</NavItem>
          </ul>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ href, onClick, children }) => (
  <li>
    <a 
      href={href} 
      onClick={onClick} 
      className="hover:text-purple-400 text-white transition duration-300"
    >
      {children}
    </a>
  </li>
);

export default Header;
