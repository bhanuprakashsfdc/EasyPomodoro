import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-around">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/timer" className="hover:underline">Timer</Link></li>
          <li><Link to="/tasks" className="hover:underline">Tasks</Link></li>
          <li><Link to="/settings" className="hover:underline">Settings</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
