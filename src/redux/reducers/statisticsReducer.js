import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  completedWorkSessions: 0,
  totalWorkTime: 0,
  shortBreaksTaken: 0,
  longBreaksTaken: 0,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    incrementWorkSessions: (state) => {
      state.completedWorkSessions += 1;
    },
    addWorkTime: (state, action) => {
      state.totalWorkTime += action.payload;
    },
    incrementShortBreaks: (state) => {
      state.shortBreaksTaken += 1;
    },
    incrementLongBreaks: (state) => {
      state.longBreaksTaken += 1;
    },
  },
});

export const { incrementWorkSessions, addWorkTime, incrementShortBreaks, incrementLongBreaks } = statisticsSlice.actions;
export default statisticsSlice.reducer;
