import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRunning: false,
  time: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.time = 0;
    },
  },
});

export const { startTimer, pauseTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
