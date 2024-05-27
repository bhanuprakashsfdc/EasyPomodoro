import React from 'react';
import { WEBSITE_NAME } from '../constants/constants';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} { WEBSITE_NAME }. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
