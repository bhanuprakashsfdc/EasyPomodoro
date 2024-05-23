import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Timer from './components/Timer';
import Tasks from './components/Tasks';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.mainContent}>
          <Sidebar />
          <div style={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
  },
  content: {
    marginLeft: '200px',
    padding: '20px',
    flex: 1,
  },
};

export default App;
