import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setPage } from '../store';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    dispatch(setPage(page));
    setMenuOpen(false); // Close menu after navigating
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-4 md:px-16 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-yellow-500 hover:text-yellow-700 text-lg font-bold">
          <Link to="/" onClick={() => handleNavigation('Home')}>Logo</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Home')}>Home</Link>
          <Link to="/services" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Services')}>Services</Link>
          <Link to="/team" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Team')}>Our Team</Link>
          <Link to="/about" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('About Us')}>About Us</Link>
          <Link to="/contact" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Contact Us')}>Contact Us</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-yellow-500 focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Hamburger menu and close icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/" className="block text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Home')}>Home</Link>
          <Link to="/services" className="block text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Services')}>Services</Link>
          <Link to="/team" className="block text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Team')}>Our Team</Link>
          <Link to="/about" className="block text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('About Us')}>About Us</Link>
          <Link to="/contact" className="block text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Contact Us')}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
