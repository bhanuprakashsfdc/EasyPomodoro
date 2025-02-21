import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';
import cities from '../../../data/cities';

const WorldTime = () => {
  const { city } = useParams();
  const [timeString, setTimeString] = useState('');
  const cityData = cities.find(c => c.city.toLowerCase().replace(/\s+/g, '-') === city);

  useEffect(() => {
    const tick = () => {
      const now = DateTime.now().setZone(cityData.timezone);
      const time = now.toFormat('HH:mm:ss');
      setTimeString(time);
    };

    const timerID = setInterval(tick, 1000);
    tick(); // Initialize to set time immediately on component load

    return () => clearInterval(timerID); // Cleanup the interval on component unmount
  }, [cityData]);

  if (!cityData) return <div>City not found</div>;

  return (
    <div className="city-time-ui">
      <header className="header">
        <h1>{cityData.city} Time</h1>
      </header>
      <div className="city-time-display">
        <div className="clock">{timeString}</div>
      </div>
    </div>
  );
};

export default WorldTime;
