import React from 'react';
import './Header.css';
import logo from '/devdecks(6).png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-section">
          <img 
            src={logo} 
            alt="QuickLinks Logo" 
            className="header-logo"
          />
          {/* <h1 className="header-title">DEVDECKS</h1> */}
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
