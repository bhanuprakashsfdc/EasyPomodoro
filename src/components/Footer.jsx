import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Pomodoro App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
