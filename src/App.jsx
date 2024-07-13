import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppRoutes from './routes/AppRoutes';

function App() {
  const theme = useSelector((state) => state.theme);
  const backgroundColor = useSelector((state) => state.settings.backgroundColor);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.body.style.backgroundColor = backgroundColor;
  }, [theme, backgroundColor]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="flex flex-1">
          <div className="flex-1">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
