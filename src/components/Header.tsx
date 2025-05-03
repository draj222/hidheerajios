import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="ios-header">
      <div className="header-content">
        <h1 className="header-title">Portfolio</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;