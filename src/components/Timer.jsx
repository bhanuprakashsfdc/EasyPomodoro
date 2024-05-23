import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';
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
      if (sessionCount < 3) {
        setSessionType('shortBreak');
        setSessionCount(sessionCount + 1);
        showNotification('Short Break', 'Time for a short break!');
      } else {
        setSessionType('longBreak');
        setSessionCount(0);
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
    <div>
      <h1>{sessionType === 'work' ? 'Work' : sessionType === 'shortBreak' ? 'Short Break' : 'Long Break'} Timer</h1>
      <p>Time: {new Date(timer.time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}

export default Timer;
