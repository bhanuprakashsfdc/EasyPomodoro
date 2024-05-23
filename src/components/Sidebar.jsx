import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/timer">Timer</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/settings">Settings</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '10px 0',
  },
};

export default Sidebar;
