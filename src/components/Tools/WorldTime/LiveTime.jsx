import React, { useEffect, useState } from 'react';
import { WEBSITE_NAME } from '../../../constants/constants'; 

const LiveTime = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';
      
      // Format the time string
      const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;
      setTimeString(formattedTime);

      // Set the document title
      document.title = `Time is ${formattedTime} - ${WEBSITE_NAME}`;
    };

    // Update every 50ms for smooth updating
    const timerID = setInterval(tick, 50);
    return () => clearInterval(timerID); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="clock-ui">
      <div className="clock-display">
        {timeString}
      </div>
    </div>
  );
};

export default LiveTime;
