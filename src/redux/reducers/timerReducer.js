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
      state.isRunning = false;
      state.time = 0;
    },
    tick: (state) => {
      state.time += 1;
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, tick } = timerSlice.actions;
export default timerSlice.reducer;
