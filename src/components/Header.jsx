import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
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
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
};

export default Header;
