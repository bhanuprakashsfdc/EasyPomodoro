import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cities from '../../../data/cities';

const CityTime = () => {
  const { city } = useParams();
  const [timeString, setTimeString] = useState('');
  // Log the city parameter to debug
  console.log('Line no 11 City parameter:', city);

  const cityData = cities.find(c => c.city.toLowerCase().replace(/ /g, '-') === city?.toLowerCase());
  console.log('line no 10 ::: cityData :::'+cityData);
  useEffect(() => {
    if (!cityData) return;

    const tick = () => {
      const now = new Date();
      const timeInCity = new Date(now.toLocaleString('en-US', { timeZone: cityData.timezone }));
      const hours = String(timeInCity.getHours()).padStart(2, '0');
      const minutes = String(timeInCity.getMinutes()).padStart(2, '0');
      const seconds = String(timeInCity.getSeconds()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setTimeString(formattedTime);
      document.title = `Time in ${cityData.city} - ${formattedTime}`;
    };

    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, [cityData]);

  if (!cityData) {
    return <div>City not found - 404 </div>;
  }

  return (
    <div className="city-time-ui">
      <h1>Time in {cityData.city}</h1>
      <div className="city-time-display">
        {timeString}
        city Name : {cityData.city}
      </div>
    </div>
  );
};

export default CityTime;
