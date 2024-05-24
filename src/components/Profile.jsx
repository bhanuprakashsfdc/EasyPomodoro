import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { setProfile } from '../redux/reducers/profileReducer';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile);
  const [email, setEmail] = useState(profile.email);
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setDisplayName(user.displayName || '');
      dispatch(setProfile({ email: user.email, displayName: user.displayName || '' }));
    }
  }, [user, dispatch]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName,
        email,
      });
      if (password) {
        await auth.currentUser.updatePassword(password);
      }
      dispatch(setProfile({ email, displayName }));
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleProfileUpdate}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Display Name:
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password (optional)"
            />
          </label>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
