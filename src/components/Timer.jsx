import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../redux/reducers/timerReducer';

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);

  return (
    <div>
      <h1>Timer</h1>
      <p>Time: {timer.time}</p>
      <button onClick={() => dispatch(startTimer())}>Start</button>
      <button onClick={() => dispatch(pauseTimer())}>Pause</button>
      <button onClick={() => dispatch(resetTimer())}>Reset</button>
    </div>
  );
}

export default Timer;
