import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWorkDuration, setShortBreakDuration, setLongBreakDuration, setNotificationSound } from '../redux/reducers/settingsReducer';

function Settings() {
  const dispatch = useDispatch();
  const { workDuration, shortBreakDuration, longBreakDuration, notificationSound } = useSelector((state) => state.settings);
  
  const [work, setWork] = useState(workDuration);
  const [shortBreak, setShortBreak] = useState(shortBreakDuration);
  const [longBreak, setLongBreak] = useState(longBreakDuration);
  const [sound, setSound] = useState(notificationSound);

  const handleSave = () => {
    dispatch(setWorkDuration(work));
    dispatch(setShortBreakDuration(shortBreak));
    dispatch(setLongBreakDuration(longBreak));
    dispatch(setNotificationSound(sound));
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Work Duration (minutes):
          <input type="number" value={work} onChange={(e) => setWork(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Short Break Duration (minutes):
          <input type="number" value={shortBreak} onChange={(e) => setShortBreak(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Long Break Duration (minutes):
          <input type="number" value={longBreak} onChange={(e) => setLongBreak(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Notification Sound:
          <select value={sound} onChange={(e) => setSound(e.target.value)}>
            <option value="default">Default</option>
            <option value="chime">Chime</option>
            <option value="bell">Bell</option>
          </select>
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Settings;
