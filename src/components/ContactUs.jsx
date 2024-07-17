import React from 'react';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../constants/constants';

const ContactUs = () => {
  const pageTitle = `Contact Us - ${WEBSITE_NAME}`;
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">If you have any questions, concerns, or feedback, please feel free to reach out to us. We're here to help!</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input className="border border-gray-300 p-2 rounded w-full" type="text" id="name" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="border border-gray-300 p-2 rounded w-full" type="email" id="email" name="email" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea className="border border-gray-300 p-2 rounded w-full" id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
      </form>
      <p> OR drop mail to hi@easypomdoro.com</p>
    </div>
  );
};

export default ContactUs;
