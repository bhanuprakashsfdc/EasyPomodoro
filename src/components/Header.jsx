import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-around items-center">
          <li>
            <a href='/'><img src="/assets/img/logo.png" alt="Logo" className="header-logo" /></a>
          </li>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/timer.html" className="hover:underline">Timer</Link></li>
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
    </header>
  );
}

export default Header;
