import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/reducers/authReducer';
import { toast } from 'react-toastify';

import { WEBSITE_NAME } from '../constants/constants';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      };
      dispatch(setUser(user));
      toast.success('User account has been created!');
      navigate('/signin.html');
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mb-8">
          <img src="/assets/img/glogo.png" alt="Logo" className="mx-auto mb-4" /> {/* Replace with your logo path */}
          <h1 className="text-2xl font-bold text-red-700">{WEBSITE_NAME}</h1>
          <p className="text-gray-700">Create Account</p>
        </div>
        <button className="bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center mb-4 w-full">
          <img src="/assets/img/glogo.png" alt="Google" className="w-6 h-6 mr-2" /> {/* Replace with your Google logo path */}
          Signup with Google
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Sign up with Email</button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account? <Link to="/signin.html" className="text-blue-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
