import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import Timer from '../components/Timer';
import Tasks from '../components/Tasks';
import Settings from '../components/Settings';
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Blog from '../components/Blog';
import BlogPostDetail from '../components/BlogPostDetail';
import ForgotPassword from '../components/ForgotPassword';
import GlobalError from '../components/GlobalError';
import Layouts from '../layouts/Layouts';
import keywords from '../data/keywords';
import cities from '../data/cities';
import Content from '../components/Content';

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/signin.html" />;
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="timer.html" element={<Timer />} />
        <Route path="tasks.html" element={<Tasks />} />
        <Route path="settings.html" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="profile.html" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="statistics.html" element={<PrivateRoute><Statistics /></PrivateRoute>} />
        <Route path="signup.html" element={<SignUp />} />
        <Route path="signin.html" element={<SignIn />} />
        <Route path="signout.html" element={<SignOut />} />
        <Route path="forgot-password.html" element={<ForgotPassword />} />
        <Route path="about-us.html" element={<AboutUs />} />
        <Route path="contact-us.html" element={<ContactUs />} />
        <Route path="privacy-policy.html" element={<PrivacyPolicy />} />
        <Route path="blog.html" element={<Blog />} />
        <Route path="blog/:slug.html" element={<BlogPostDetail />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        {keywords.map((keyword, index) => {
        const formattedKeyword = keyword.toLowerCase().replace(/ /g, '-');
        const path = `/${formattedKeyword}.html`;
        return (
          <Route
            key={index}
            path={path}
            element={<Content keyword={keyword} />}
          />
        );
      })}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
