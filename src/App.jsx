import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Timer from './components/Timer';
import Tasks from './components/Tasks';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import GlobalError from './components/GlobalError';

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/signin" />;
}

function App() {
  const theme = useSelector((state) => state.theme);
  const backgroundColor = useSelector((state) => state.settings.backgroundColor);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.body.style.backgroundColor = backgroundColor;
  }, [theme, backgroundColor]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4 ml-48">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/statistics" element={<PrivateRoute><Statistics /></PrivateRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signout" element={<SignOut />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <GlobalError />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
