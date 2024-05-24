import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';
import { incrementWorkSessions, addWorkTime, incrementShortBreaks, incrementLongBreaks } from '../redux/reducers/statisticsReducer';
import { showNotification } from '../utils/notifications';

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
    if (sessionType === 'work' && timer.time >= workDuration * 60) {
      dispatch(incrementWorkSessions());
      dispatch(addWorkTime(workDuration * 60));
      if (sessionCount < 3) {
        setSessionType('shortBreak');
        setSessionCount(sessionCount + 1);
        dispatch(incrementShortBreaks());
        showNotification('Short Break', 'Time for a short break!');
      } else {
        setSessionType('longBreak');
        setSessionCount(0);
        dispatch(incrementLongBreaks());
        showNotification('Long Break', 'Time for a long break!');
      }
      dispatch(resetTimer());
    } else if (sessionType === 'shortBreak' && timer.time >= shortBreakDuration * 60) {
      setSessionType('work');
      showNotification('Work Session', 'Time to get back to work!');
      dispatch(resetTimer());
    } else if (sessionType === 'longBreak' && timer.time >= longBreakDuration * 60) {
      setSessionType('work');
      showNotification('Work Session', 'Time to get back to work!');
      dispatch(resetTimer());
    }
  }, [timer.time, sessionType, workDuration, shortBreakDuration, longBreakDuration, sessionCount, dispatch]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">{sessionType === 'work' ? 'Work' : sessionType === 'shortBreak' ? 'Short Break' : 'Long Break'} Timer</h1>
      <p className="text-2xl mb-4">Time: {new Date(timer.time * 1000).toISOString().substr(11, 8)}</p>
      <div className="space-x-2">
        <button onClick={() => dispatch(startTimer())} className="bg-blue-500 text-white px-4 py-2 rounded">Start</button>
        <button onClick={() => dispatch(pauseTimer())} className="bg-yellow-500 text-white px-4 py-2 rounded">Pause</button>
        <button onClick={() => dispatch(resetTimer())} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default Timer;
