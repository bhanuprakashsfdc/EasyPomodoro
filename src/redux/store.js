import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerReducer';
import tasksReducer from './reducers/tasksReducer';
import settingsReducer from './reducers/settingsReducer';
import statisticsReducer from './reducers/statisticsReducer';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('settings');
    if (serializedState === null) {
      return undefined;
    }
    return {
      settings: JSON.parse(serializedState),
    };
  } catch (err) {
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.settings);
    localStorage.setItem('settings', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    statistics: statisticsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
