import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { WEBSITE_NAME } from '../constants/constants';

const HomeContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4">Easy Pomodoro</h1>
    <p className="mb-4">An online Pomodoro Timer to boost your productivity.</p>
    <section>
      <h2 className="text-2xl font-semibold mb-2">What is Pomodoro?</h2>
      <p className="mb-4">Pomodoro is a customizable Pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by the Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">What is Pomodoro Technique?</h2>
      <p className="mb-4">The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">How to use the Pomodoro Timer?</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Add tasks to work on today</li>
        <li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
        <li>Select a task to work on</li>
        <li>Start timer and focus on the task for 25 minutes</li>
        <li>Take a break for 5 minutes when the alarm ring</li>
        <li>Iterate 3-6 until you finish the tasks</li>
      </ol>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Basic Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Estimate Finish Time: Get an estimate of the time required to complete your daily tasks.</li>
        <li>Add Templates: Save your repetitive tasks as templates and add them with just one click.</li>
        <li>Visual Reports: See how much time you've focused each day, week, and month.</li>
        <li>Custom Settings: Personalize your focus/break time, alarm sounds, background sounds, and more.</li>
      </ul>
    </section>
    {/* 
        <section>
        <h2 className="text-2xl font-semibold mb-2">Premium Features</h2>
        <ul className="list-disc list-inside mb-4">
            <li>Add Projects: Track how much time you spend on each project.</li>
            <li>Yearly Reports: View your focus hours for each year.</li>
            <li>Download Reports: Download your focus history in CSV format.</li>
            <li>No Template Limit: Save more than 3 templates.</li>
            <li>Todoist Integration: Load tasks from your Todoist account.</li>
            <li>Webhook Integration: Connect to other apps (Zapier, IFTTT, etc).</li>
            <li>No Ads: Enjoy a clean and distraction-free app experience.</li>
        </ul>
        </section>
        <section>
        <h2 className="text-2xl font-semibold mb-2">Download App</h2>
        <p className="mb-4">For macOS (zip file) "Right click the icon to open"</p>
        </section>
    */}
  </div>
);
};
export default HomeContent