import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent successfully!');
      navigate('/signin');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mb-8">
          <img src="/public/assets/logo.png" alt="Logo" className="mx-auto mb-4" /> {/* Replace with your logo path */}
          <h1 className="text-2xl font-bold text-red-700">Pomofocus</h1>
          <p className="text-gray-700">Reset Password</p>
        </div>
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Send Password Reset Email</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="mt-4 text-gray-600">
          Remember your password? <a href="/signin" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
