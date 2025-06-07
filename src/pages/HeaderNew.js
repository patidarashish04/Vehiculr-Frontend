// src/components/Header.js
import React, { useState } from 'react';
import { 
  FaCar, 
  FaSearch, 
  FaHome, 
  FaCommentDots, 
  FaCompass, 
  FaBell, 
  FaUserCircle,
  FaSignOutAlt 
} from 'react-icons/fa';
import '../styles/HeaderNew.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Home');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // In a real app, you would trigger newHeader-search functionality here
      setSearchQuery('');
    }
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    console.log('Navigating to:', navItem);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <FaCar className="logo-icon" />
          <span>vehiculr</span>
        </div>
        
        {/* newHeader-search Bar */}
        <div className="newHeader-search-container">
          <form onSubmit={handleSearch} className="newHeader-search-form">
            <div className="newHeader-search-input-group">
              <FaSearch className="newHeader-search-icon" />
              <input
                type="text"
                placeholder="newHeader-search"
                className="newHeader-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        
        {/* Navigation Icons */}
        <nav className="new-nav-icons">
          <div 
            className={`nav-icon ${activeNav === 'Home' ? 'active' : ''}`} 
            onClick={() => handleNavClick('Home')}
          >
            <FaHome />
            <span>Home</span>
          </div>
          
          <div 
            className={`nav-icon ${activeNav === 'Chat' ? 'active' : ''}`} 
            onClick={() => handleNavClick('Chat')}
          >
            <FaCommentDots />
            <span>Chat</span>
          </div>
          
          <div 
            className={`nav-icon ${activeNav === 'Explore' ? 'active' : ''}`} 
            onClick={() => handleNavClick('Explore')}
          >
            <FaCompass />
            <span>Explore</span>
          </div>
          
          <div 
            className={`nav-icon ${activeNav === 'Notifications' ? 'active' : ''}`} 
            onClick={() => handleNavClick('Notifications')}
          >
            <FaBell />
            <span>Notifications</span>
          </div>
          
          <div 
            className={`nav-icon ${activeNav === 'Profile' ? 'active' : ''}`} 
            onClick={() => handleNavClick('Profile')}
          >
            <FaUserCircle />
            <span>Profile</span>
          </div>
          
          <div 
            className="nav-icon"
            onClick={() => {
              console.log('User signed out');
              setActiveNav('');
            }}
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;