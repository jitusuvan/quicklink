import React from 'react';
import './Header.css';
import logo from '/devdecks(6).png';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          {/* If you want logo back, uncomment below */}
          {/* <img src={logo} alt="QuickLinks Logo" className="header-logo" /> */}
          <h1 className="header-title">DevDecks</h1>
        </div>

        {/* Search Section */}
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
