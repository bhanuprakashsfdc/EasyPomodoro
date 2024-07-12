import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  error: null,
};

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.tasks = action.payload;
    },
    fetchDataError: (state, action) => {
      state.error = action.payload;
    },
    addTaskSuccess: (state, action) => {
      state.tasks.push(action.payload);
    },
    addTaskError: (state, action) => {
      state.error = action.payload;
    },
    updateTaskSuccess: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    updateTaskError: (state, action) => {
      state.error = action.payload;
    },
    deleteTaskSuccess: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    deleteTaskError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataSuccess,
  fetchDataError,
  addTaskSuccess,
  addTaskError,
  updateTaskSuccess,
  updateTaskError,
  deleteTaskSuccess,
  deleteTaskError,
} = firestoreSlice.actions;

export default firestoreSlice.reducer;
