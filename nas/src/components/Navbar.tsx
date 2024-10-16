import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setPage } from '../store';

interface NavBarProps {
  className?: string; // Accept className as a prop
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleNavigation = (page: string) => {
    dispatch(setPage(page));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-16 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-yellow-500 hover:text-yellow-700 text-lg font-bold">
          <Link to="/" onClick={() => handleNavigation('Home')}>Logo</Link>
        </div>
        <div className="flex space-x-8">
          <Link to="/" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Home')}>Home</Link>
          <Link to="/services" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Services')}>Services</Link>
          <Link to="/team" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Team')}>Our Team</Link>
          <Link to="/about" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('About Us')}>About Us</Link>
          <Link to="/contact" className="text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Contact Us')}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
