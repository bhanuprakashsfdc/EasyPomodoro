import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setWorkDuration: (state, action) => {
      state.workDuration = action.payload;
    },
    setShortBreakDuration: (state, action) => {
      state.shortBreakDuration = action.payload;
    },
    setLongBreakDuration: (state, action) => {
      state.longBreakDuration = action.payload;
    },
  },
});

export const { setWorkDuration, setShortBreakDuration, setLongBreakDuration } = settingsSlice.actions;
export default settingsSlice.reducer;
