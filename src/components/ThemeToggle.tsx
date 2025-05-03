import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="theme-toggle-container">
      <div className="theme-toggle">
        <input
          type="checkbox"
          id="theme-toggle-checkbox"
          className="theme-toggle-checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
          <span className="theme-toggle-inner">
            <span className="theme-toggle-icon">
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </span>
          <span className="theme-toggle-switch"></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle; 