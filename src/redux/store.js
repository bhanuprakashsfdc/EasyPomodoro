import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerReducer';
import tasksReducer from './reducers/tasksReducer';
import settingsReducer from './reducers/settingsReducer';
import statisticsReducer from './reducers/statisticsReducer';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import themeReducer from './reducers/themeReducer';
import firestoreReducer from './reducers/firestoreReducer';
import globalErrorReducer from './reducers/globalErrorReducer'; // Import global error reducer

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('settings');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const loadTheme = () => {
  try {
    const serializedState = localStorage.getItem('theme');
    if (serializedState === null) {
      return 'light';
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return 'light';
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

const saveTheme = (state) => {
  try {
    const serializedState = JSON.stringify(state.theme);
    localStorage.setItem('theme', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const preloadedState = {
  settings: loadState(),
  theme: loadTheme(),
};

const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
    settings: settingsReducer,
    statistics: statisticsReducer,
    auth: authReducer,
    profile: profileReducer,
    theme: themeReducer,
    firestore: firestoreReducer,
    globalError: globalErrorReducer, // Add global error reducer here
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
  saveTheme(store.getState());
});

export default store;
