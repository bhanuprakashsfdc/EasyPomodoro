import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerReducer';
import tasksReducer from './reducers/tasksReducer';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
    // Add more reducers as needed
  },
});

export default store;
