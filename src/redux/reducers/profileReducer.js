import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  displayName: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    clearProfile: (state) => {
      state.email = '';
      state.displayName = '';
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
