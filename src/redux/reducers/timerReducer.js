import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 0,
  isRunning: false,
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
    resetTimer: (state, action) => {
      state.time = action.payload;
      state.isRunning = false;
    },
    tick: (state) => {
      if (state.time > 0) {
        state.time -= 1;
      } else {
        state.isRunning = false;
      }
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, tick } = timerSlice.actions;
export default timerSlice.reducer;
