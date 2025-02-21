import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer, tick } from '../redux/reducers/timerReducer';
import { incrementWorkSessions, addWorkTime, incrementShortBreaks, incrementLongBreaks } from '../redux/reducers/statisticsReducer';
import { showNotification } from '../utils/notifications';
import MusicPlayer from './MusicPlayer';
import { formatTime } from '../utils/formatTime';
import { WEBSITE_NAME } from '../constants/constants';
import './components.css';

const songUrls = [
 /* 'https://youtu.be/70A9vqpJsZM?si=Pxq2bK4sQC51Ovle', */
  'https://youtu.be/s9jHnpPlznM?si=-KGU7ujNQXzatnrM',
  'https://youtu.be/Y7HGrexMZsE?si=C02jgTobCgwcj0z7',
  // Add more song URLs here
];

function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  const { workDuration, shortBreakDuration, longBreakDuration } = useSelector((state) => state.settings);
  const [sessionType, setSessionType] = useState('work');
  const [sessionCount, setSessionCount] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Added to track song index

  useEffect(() => {
    let interval = null;
    if (timer.isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
      setIsMusicPlaying(true);
    } else {
      clearInterval(interval);
      setIsMusicPlaying(false);
    }
    return () => clearInterval(interval);
  }, [timer.isRunning, dispatch]);

  useEffect(() => {
    document.title = `${formatTime(timer.time)} - ${WEBSITE_NAME}`; 
  }, [timer.time]);

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
    setCurrentSongIndex(0); // Reset song index when switching sessions
    if (type === 'work') {
      dispatch(resetTimer(workDuration * 60));
    } else if (type === 'shortBreak') {
      dispatch(resetTimer(shortBreakDuration * 60));
    } else if (type === 'longBreak') {
      dispatch(resetTimer(longBreakDuration * 60));
    }
  };

  const handleMusicPlayPause = (isPlaying) => {
    setIsMusicPlaying(isPlaying);
  };

  const handleMusicNext = (nextIndex) => {
    console.log('Line no 80::: Jumping to next song');
    setCurrentSongIndex(nextIndex); // Handle next song index correctly
  };

  return (
    <div className="timerview">
      <div className="text-center timerviewval">
        <h1 className="text-4xl font-bold mb-4">
          {sessionType === 'work' ? 'Work' : sessionType === 'shortBreak' ? 'Short Break' : 'Long Break'} Timer
        </h1>
        <p className="text-5xl mb-4">
          {new Date(timer.time * 1000).toISOString().substr(14, 5)}
        </p>
        <div className="space-x-2 mb-4">
          <button onClick={() => handleSessionSwitch('work')} className="bg-blue-500 text-white px-4 py-2 rounded">Pomodoro</button>
          <button onClick={() => handleSessionSwitch('shortBreak')} className="bg-blue-500 text-white px-4 py-2 rounded">Short Break</button>
          <button onClick={() => handleSessionSwitch('longBreak')} className="bg-blue-500 text-white px-4 py-2 rounded">Long Break</button>
        </div>
        <div className="space-x-2">
          <button onClick={() => dispatch(startTimer())} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
          <button onClick={() => dispatch(pauseTimer())} className="bg-yellow-500 text-white px-4 py-2 rounded">Pause</button>
          <button onClick={() => dispatch(resetTimer(sessionType === 'work' ? workDuration * 60 : sessionType === 'shortBreak' ? shortBreakDuration * 60 : longBreakDuration * 60))} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </div>
      <MusicPlayer 
        songUrls={songUrls} 
        isPlaying={isMusicPlaying} 
        onPlayPause={handleMusicPlayPause} 
        onNext={handleMusicNext} 
      />
    </div>
  );
}

export default Timer;
