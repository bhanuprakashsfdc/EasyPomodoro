import React from 'react';
import { WEBSITE_NAME } from '../constants/constants';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} {WEBSITE_NAME}. All rights reserved.</p>
      <p>
        <a href="https://madewithloveinindia.org" target="_blank" rel="noopener noreferrer">
          Made with <span aria-label="Love" style={{ color: '#f43f5e' }}>&hearts;</span> in India
        </a>
      </p>
    </footer>
  );
}

export default Footer;
