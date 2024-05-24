import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerReducer';
import tasksReducer from './reducers/tasksReducer';
import settingsReducer from './reducers/settingsReducer';
import statisticsReducer from './reducers/statisticsReducer';
import authReducer from './reducers/authReducer';

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
    auth: authReducer,  // Add auth reducer here
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
