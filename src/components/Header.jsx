import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importing Heroicons for the hamburger icon

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href='/' className="flex-shrink-0">
          <img src="/assets/img/logo.png" alt="Logo" className="header-logo" />
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/timer.html" className="hover:underline">Timer</Link></li>
            <li><Link to="/live-time.html" className="hover:underline">Time</Link></li>
            <li><Link to="/tasks.html" className="hover:underline">Tasks</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/settings.html" className="hover:underline">Settings</Link></li>
                <li><Link to="/profile.html" className="hover:underline">Profile</Link></li>
              </>
            ) : (
              <li><Link to="/signup.html" className="hover:underline">Signup</Link></li>
            )}
          </ul>
        </nav>

        {/* Hamburger Menu Icon */}
        <button 
          onClick={handleMenuToggle} 
          className="md:hidden p-2 text-white"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div 
          ref={menuRef}
          className={`fixed inset-0 bg-gray-800 text-white md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={handleMenuToggle} 
              className="self-end p-2 text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" onClick={handleMenuToggle} className="hover:underline">Home</Link></li>
              <li><Link to="/timer.html" onClick={handleMenuToggle} className="hover:underline">Timer</Link></li>
              <li><Link to="/tasks.html" onClick={handleMenuToggle} className="hover:underline">Tasks</Link></li>
              {isLoggedIn ? (
                <>
                  <li><Link to="/settings.html" onClick={handleMenuToggle} className="hover:underline">Settings</Link></li>
                  <li><Link to="/profile.html" onClick={handleMenuToggle} className="hover:underline">Profile</Link></li>
                </>
              ) : (
                <li><Link to="/signup.html" onClick={handleMenuToggle} className="hover:underline">Signup</Link></li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
