import React from 'react';
import { useSelector } from 'react-redux';

function Statistics() {
  const {
    completedWorkSessions,
    totalWorkTime,
    shortBreaksTaken,
    longBreaksTaken,
  } = useSelector((state) => state.statistics);

  if (!completedWorkSessions && !totalWorkTime && !shortBreaksTaken && !longBreaksTaken) {
    return <div>Loading statistics...</div>;
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>Completed Work Sessions: {completedWorkSessions}</p>
      <p>Total Work Time: {new Date(totalWorkTime * 1000).toISOString().substr(11, 8)}</p>
      <p>Short Breaks Taken: {shortBreaksTaken}</p>
      <p>Long Breaks Taken: {longBreaksTaken}</p>
    </div>
  );
}

export default Statistics;
