import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-gray-200 p-4 h-screen fixed w-48">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="block p-2 hover:bg-gray-300">Home</Link></li>
          <li><Link to="/timer" className="block p-2 hover:bg-gray-300">Timer</Link></li>
          <li><Link to="/tasks" className="block p-2 hover:bg-gray-300">Tasks</Link></li>
          <li><Link to="/settings" className="block p-2 hover:bg-gray-300">Settings</Link></li>
          <li><Link to="/profile" className="block p-2 hover:bg-gray-300">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
