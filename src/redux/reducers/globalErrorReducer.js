import { createSlice } from '@reduxjs/toolkit';

const globalErrorSlice = createSlice({
  name: 'globalError',
  initialState: { error: null },
  reducers: {
    setGlobalError: (state, action) => {
      state.error = action.payload;
    },
    clearGlobalError: (state) => {
      state.error = null;
    },
  },
});

export const { setGlobalError, clearGlobalError } = globalErrorSlice.actions;
export default globalErrorSlice.reducer;
