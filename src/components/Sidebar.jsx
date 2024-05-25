import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <button onClick={toggleSidebar} className="p-2 bg-gray-800 text-white fixed md:hidden">
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <aside ref={sidebarRef} className={`bg-gray-200 p-4 h-screen fixed w-48 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <nav>
          <ul className="space-y-4">
            <li><Link to="/" className="block p-2 hover:bg-gray-300">Home</Link></li>
            <li><Link to="/timer" className="block p-2 hover:bg-gray-300">Timer</Link></li>
            <li><Link to="/tasks" className="block p-2 hover:bg-gray-300">Tasks</Link></li>
            <li><Link to="/settings" className="block p-2 hover:bg-gray-300">Settings</Link></li>
            <li><Link to="/profile" className="block p-2 hover:bg-gray-300">Profile</Link></li>
            <li><Link to="/blog" className="block p-2 hover:bg-gray-300">Blog</Link></li>
            <li><Link to="/contact-us" className="block p-2 hover:bg-gray-300">Contact Us</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
