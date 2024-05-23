import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  const { workDuration, shortBreakDuration, longBreakDuration } = useSelector((state) => state.settings);
  const [sessionType, setSessionType] = useState('work');

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
    if (timer.time === workDuration * 60 && sessionType === 'work') {
      setSessionType('shortBreak');
      dispatch(resetTimer());
    } else if (timer.time === shortBreakDuration * 60 && sessionType === 'shortBreak') {
      setSessionType('work');
      dispatch(resetTimer());
    } else if (timer.time === longBreakDuration * 60 && sessionType === 'longBreak') {
      setSessionType('work');
      dispatch(resetTimer());
    }
  }, [timer.time, workDuration, shortBreakDuration, longBreakDuration, sessionType, dispatch]);

  return (
    <div>
      <h1>{sessionType === 'work' ? 'Work' : 'Break'} Timer</h1>
      <p>Time: {new Date(timer.time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}

export default Timer;
