import React, { useEffect, useState } from 'react';

const WorldTime = () => {
  const [timeString, setTimeString] = useState('');
  const [dateInfo, setDateInfo] = useState({
    locationName: 'loc',
    weekInfo: 'weekInfo',
    dayInfo: 'dayInfo',
    monthInfo: 'monthInfo',
    yearInfo: 'yearInfo',
    weeknumInfo: 'weeknumInfo'
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
      setTimeString(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    };

    // Update every 50ms for smooth updating
    const timerID = setInterval(tick, 50);
    return () => clearInterval(timerID); // Cleanup the interval on component unmount
  }, []);

  useEffect(() => {
    // Update year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  const toggleMenu = () => {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
  };

  return (
    <div className="clockbody" data-timezone="Europe/London">
      <header className="header">
        <i className="fa fa-clock header-icon"></i>
        <i className="fa fa-bars hamburger" onClick={toggleMenu}></i> {/* Hamburger Icon */}
        <nav className="header-nav">
          <a href="#pomodoro" className="nav-link">Pomodoro</a>
          <a href="#short-break" className="nav-link">Short Break</a>
          <a href="#long-break" className="nav-link">Long Break</a>
        </nav>
      </header>

      <div className="content">
        <div className="mobilview">
          <div>
            <p className="locationName"> Time in <span id="locationName">{dateInfo.locationName}</span> is </p>
          </div>
          <div className="clock" id="clock">{timeString}</div>
          <div>
            <p className="timeName"> Time in 
              <span id="weekInfo">{dateInfo.weekInfo}</span>, 
              <span id="dayInfo">{dateInfo.dayInfo}</span>, 
              <span id="monthInfo">{dateInfo.monthInfo}</span>, 
              <span id="yearInfo">{dateInfo.yearInfo}</span>, 
              Week <span id="weeknumInfo">{dateInfo.weeknumInfo}</span> 
            </p>
            <p className="mobilespace"></p>
            {/* World Clocks */}
            <div className="locationName">
              {['San Jose', 'New York', 'London', 'Dubai', 'Kolkata', 'Singapore', 'Melbourne', 'Tokyo'].map((city, index) => (
                <div key={index} className="time-box">
                  <div className="city-name">{city}</div>
                  <div className="city-time"></div>
                </div>
              ))}
            </div>
            <p className="mobilespace"></p>
          </div>
          <div className="date-info" id="dateInfo"></div>
        </div>
      </div>
      <footer className="footer">
        <p>© <span id="year"></span> Pomodoro Timer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WorldTime;
