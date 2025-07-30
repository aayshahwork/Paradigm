import React from 'react';

const Header = ({ onPageChange, currentPage }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Paradigm Consulting Logo */}
          <div className="logo" onClick={() => onPageChange('home')}>
            <div className="logo-title">PARADIGM</div>
            <div className="logo-subtitle">CONSULTING</div>
          </div>

          {/* Navigation - Small hyperlinked text */}
          <nav className="nav">
            <button
              onClick={() => onPageChange('about')}
              className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => onPageChange('services')}
              className={`nav-item ${currentPage === 'services' ? 'active' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => onPageChange('join')}
              className={`nav-item ${currentPage === 'join' ? 'active' : ''}`}
            >
              Join Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 