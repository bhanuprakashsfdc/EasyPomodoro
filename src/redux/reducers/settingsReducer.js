import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  backgroundColor: '#ffffff', // default background color
  availableColors: ['#ffffff', '#f0f0f0', '#e0e0e0'], // default color options
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
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setAvailableColors: (state, action) => {
      state.availableColors = action.payload;
    },
  },
});

export const { setWorkDuration, setShortBreakDuration, setLongBreakDuration, setBackgroundColor, setAvailableColors } = settingsSlice.actions;
export default settingsSlice.reducer;
