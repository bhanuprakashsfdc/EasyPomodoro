import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/reducers/authReducer';
import { toast } from 'react-toastify';

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
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
