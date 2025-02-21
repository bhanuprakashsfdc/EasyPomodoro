import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import MiniFooter from '../components/MiniFooter';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback/Feedback';

const Layouts = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <HomeContent />
      <Feedback />
      <MiniFooter />
      <Footer />
    </div>
  )
}

export default Layouts
