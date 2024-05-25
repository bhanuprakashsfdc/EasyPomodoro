import React from 'react';
import { WEBSITE_NAME } from '../constants/constants';

const AboutUs = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to { WEBSITE_NAME }, your ultimate productivity partner. At { WEBSITE_NAME }, we are dedicated to helping you optimize your time and achieve your goals through our innovative timer and task management solutions.</p>
  
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">Our mission is simple: to empower individuals and teams to be more productive and manage their time effectively. We believe that with the right tools, anyone can achieve their full potential and reach their goals efficiently.</p>
  
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="mb-4">Founded in 2024, { WEBSITE_NAME } was born out of a passion for productivity and efficiency. Our team consists of dedicated professionals who are committed to creating tools that make your life easier. Whether you are a student, a professional, or someone who wants to make the most out of their day, { WEBSITE_NAME } is here to help.</p>
  
        <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
        <p className="mb-4">{ WEBSITE_NAME } offers a range of features designed to boost your productivity:</p>
        <ul className="list-disc list-inside mb-4">
          <li>**Customizable Pomodoro Timer**: Enhance your focus and productivity with our customizable Pomodoro timer.</li>
          <li>**Task Management**: Easily add, edit, and manage your tasks to stay organized and on top of your priorities.</li>
          <li>**Break Reminders**: Ensure you take regular breaks to maintain your energy and productivity throughout the day.</li>
          <li>**Statistics and Progress Tracking**: Monitor your productivity and track your progress over time with our detailed statistics.</li>
          <li>**Mobile Responsiveness**: Access { WEBSITE_NAME } on any device, whether you are at your desk or on the go.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <p className="mb-4">At { WEBSITE_NAME }, we believe in:</p>
        <ul className="list-disc list-inside mb-4">
          <li>**Excellence**: We strive to deliver high-quality products that exceed your expectations.</li>
          <li>**Innovation**: We are constantly exploring new ideas and technologies to improve our offerings.</li>
          <li>**Customer Focus**: Your satisfaction is our top priority. We listen to your feedback and continuously work to enhance your experience.</li>
          <li>**Integrity**: We conduct our business with honesty and transparency, building trust with our users.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Join Us on Our Journey</h2>
        <p className="mb-4">We are excited to have you with us on this journey to better productivity and time management. Together, we can achieve more and make the most out of each day. Thank you for choosing { WEBSITE_NAME }!</p>
  
        <p className="font-bold">Sincerely,</p>
        <p>The { WEBSITE_NAME } Team</p>
      </div>
    );
  };

export default AboutUs;
