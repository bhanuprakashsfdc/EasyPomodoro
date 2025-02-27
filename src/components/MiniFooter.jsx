import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { WEBSITE_NAME } from '../constants/constants';

const MiniFooter = () => {
  return (
    <footer className="bg-black text-white py-8 footerview">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
        <img src="/assets/img/logo.png" alt="Logo" className="footer-logo" />
          <h2 className="text-xl font-bold mb-2">{ WEBSITE_NAME }</h2>
          <address className="not-italic">
            {/*
                <p>123 Anywhere St.</p>
                <p>Any City, ST 12345</p>
                <p>email@example.com</p>
                <p>(123) 456-7890</p>
            */}
          </address>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li><Link to="/timer.html" className="hover:underline">Timer</Link></li>
            <li><Link to="/tasks.html" className="hover:underline">Tasks</Link></li>
            <li><Link to="/settings.html" className="hover:underline">Settings</Link></li>
            <li><Link to="/profile.html" className="hover:underline">Profile</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul>
            <li><Link to="/about-us.html" className="hover:underline">About Us</Link></li>
            <li><Link to="/blog.html" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact-us.html" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/terms-conditions.html" className="hover:underline">Terms And Conditions</Link></li>
            <li><Link to="/privacy-policy.html" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
