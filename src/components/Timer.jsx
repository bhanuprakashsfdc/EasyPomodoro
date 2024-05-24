import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';
import { incrementWorkSessions, addWorkTime, incrementShortBreaks, incrementLongBreaks } from '../redux/reducers/statisticsReducer';
import { showNotification } from '../utils/notifications';
import './components.css';

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  const { workDuration, shortBreakDuration, longBreakDuration } = useSelector((state) => state.settings);
  const [sessionType, setSessionType] = useState('work');
  const [sessionCount, setSessionCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timer.isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else if (!timer.isRunning && timer.time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer.isRunning, timer.time, dispatch]);

  useEffect(() => {
    if (!timer.isRunning && timer.time === 0) {
      if (sessionType === 'work') {
        dispatch(incrementWorkSessions());
        dispatch(addWorkTime(workDuration * 60));
        if (sessionCount < 3) {
          setSessionType('shortBreak');
          setSessionCount(sessionCount + 1);
          dispatch(incrementShortBreaks());
          showNotification('Short Break', 'Time for a short break!');
          dispatch(resetTimer(shortBreakDuration * 60));
        } else {
          setSessionType('longBreak');
          setSessionCount(0);
          dispatch(incrementLongBreaks());
          showNotification('Long Break', 'Time for a long break!');
          dispatch(resetTimer(longBreakDuration * 60));
        }
      } else if (sessionType === 'shortBreak' || sessionType === 'longBreak') {
        setSessionType('work');
        showNotification('Work Session', 'Time to get back to work!');
        dispatch(resetTimer(workDuration * 60));
      }
    }
  }, [timer.time, timer.isRunning, sessionType, sessionCount, workDuration, shortBreakDuration, longBreakDuration, dispatch]);

  const handleSessionSwitch = (type) => {
    setSessionType(type);
    if (type === 'work') {
      dispatch(resetTimer(workDuration * 60));
    } else if (type === 'shortBreak') {
      dispatch(resetTimer(shortBreakDuration * 60));
    } else if (type === 'longBreak') {
      dispatch(resetTimer(longBreakDuration * 60));
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{sessionType === 'work' ? 'Work' : sessionType === 'shortBreak' ? 'Short Break' : 'Long Break'} Timer</h1>
      <p className="text-5xl mb-4">
        {new Date(timer.time * 1000).toISOString().substr(14, 5)}
      </p>
      <div className="space-x-2 mb-4">
        <button onClick={() => handleSessionSwitch('work')} className="bg-blue-500 text-white px-4 py-2 rounded">Work</button>
        <button onClick={() => handleSessionSwitch('shortBreak')} className="bg-blue-500 text-white px-4 py-2 rounded">Short Break</button>
        <button onClick={() => handleSessionSwitch('longBreak')} className="bg-blue-500 text-white px-4 py-2 rounded">Long Break</button>
      </div>
      <div className="space-x-2">
        <button onClick={() => dispatch(startTimer())} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
        <button onClick={() => dispatch(pauseTimer())} className="bg-yellow-500 text-white px-4 py-2 rounded">Pause</button>
        <button onClick={() => dispatch(resetTimer(sessionType === 'work' ? workDuration * 60 : sessionType === 'shortBreak' ? shortBreakDuration * 60 : longBreakDuration * 60))} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default Timer;
