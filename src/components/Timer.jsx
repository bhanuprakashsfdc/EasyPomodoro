import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  React.useEffect(() => {
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

  return (
    <div>
      <h1>Timer</h1>
      <p>Time: {new Date(timer.time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}

export default Timer;
