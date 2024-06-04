import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setPage } from '../store';
import { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const dispatch: AppDispatch = useDispatch();

  const handleNavigation = (page: string) => {
    dispatch(setPage(page));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${isScrolled ? ' bg-white' : 'bg-gradient-to-r from-blue-900 to-gray-900'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-yellow-500 hover:text-yellow-700 text-lg font-bold">
          <Link to="/" onClick={() => handleNavigation('Home')}>Logo</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className= "text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Home')}>Home</Link>
          <Link to="/services" className=" text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Services')}>Services</Link>
          <Link to="/contact" className=" text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('Contact')}>Contact</Link>
          <Link to="/about" className=" text-yellow-500 hover:text-yellow-700" onClick={() => handleNavigation('About')}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;