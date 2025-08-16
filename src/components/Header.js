import React, { useState, useRef, useContext, useEffect } from 'react';
import '../styles/Header.css';
import Register from '../pages/Register';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';
import newLoginPage from '../components/newLoginPage';
import userIcon from '../assets/profile-user.png';
import garageIcon from '../assets/garage-icon.png';
import LocationSelector from "../components/LocationSelector";
import LocationModal from "../components/LocationSelector";
import { FaMapMarkerAlt } from "react-icons/fa";
import logoImage from '../assets/icons/Logo.svg'; // or .svg
import SearchBox from '../components/SearchBar'; // or .svg
// import { ReactComponent as logoIcon } from '../assets/icons/logo.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/Home.svg';
import { ReactComponent as Explore } from '../assets/icons/Explore.svg';
import { ReactComponent as ChatIcon } from '../assets/icons/chat.svg';
import { ReactComponent as NotificationIcon } from '../assets/icons/Notification.svg';
import { ReactComponent as UserIcon } from '../assets/icons/UserIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg';
// import SearchBar from '../components/';
// import { ReactComponent as SignOutIcon } from '../assets/icons/signout.svg';

import {
  FaCar,
  FaSearch,
  FaHome,
  FaCommentDots,
  FaCompass,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FiSearch
} from 'react-icons/fa';

const Header = () => {
  const {
    user,
    isLoginVisible,
    setIsLoginVisible,
    handleLoginSuccess,
    handleLogout,
  } = useContext(AuthContext);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState("Bangalore");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoleModalVisible, setIsRoleModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('Home');
  const [isFocused, setIsFocused] = useState(false);

  const popupRef = useRef(null);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

useEffect(() => {
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => setIsPopupVisible(true);
  const handleMouseLeave = () => setIsPopupVisible(false);

  const openRegistration = () => {
    setIsLoginVisible(false);
    setIsPopupVisible(false);
    setIsRoleModalVisible(true);
  };


  const openLogin = () => {
    setIsLoginVisible(true);
    setIsRegistrationVisible(false);
    setIsPopupVisible(false);
  };

  const closeRegistration = () => setIsRegistrationVisible(false);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleUserLogin = () => {
    window.location.href = "/UserLogin"
  };

  const handleClick = () => {
    window.location.href = "/GarageRegistration"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // In a real app, you would trigger search functionality here
      setSearchQuery('');
    }
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    console.log('Navigating to:', navItem);
  };

  return (
    <header className="headerMain">
      {/* Logo Section */}
      <div className="header-logo">
        <img src={logoImage} alt="Logo" className="nav-icon" />
      </div>

      {/* Search Bar */}
      <div className={`search-bar-container ${isFocused ? 'focused' : ''}`}>
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </form>
      </div>

      {/* Location Selector */}
      {/* <button className="location-button" onClick={() => setIsModalOpen(true)}>
        <span className="location-icon">
          <FaMapMarkerAlt />
        </span>
        <span className="location-text">{currentCity}</span>
      </button> */}

      {isModalOpen && (
        <LocationModal
          closeModal={() => setIsModalOpen(false)}
          setCurrentCity={setCurrentCity}
        />
      )}

      {isLocationModalOpen && (
        <LocationSelector
          onClose={() => setIsLocationModalOpen(false)}
          onSelectLocation={handleLocationSelect}
        />
      )}

      {/* Navigation Icons */}
      <nav className="nav-icons">
        <div
          className={`nav-icon ${activeNav === 'Home' ? 'active' : ''}`}
          onClick={() => handleNavClick('Home')}
        >
          <HomeIcon />
          <span>Home</span>
        </div>

        <div
          className={`nav-icon ${activeNav === 'Chat' ? 'active' : ''}`}
          onClick={() => handleNavClick('Chat')}
        >
          <ChatIcon />
          <span>Chat</span>
        </div>

        <div
          className={`nav-icon ${activeNav === 'Explore' ? 'active' : ''}`}
          onClick={() => handleNavClick('Explore')}
        >
          <Explore />
          <span>Explore</span>
        </div>

        <div
          className={`nav-icon ${activeNav === 'Notifications' ? 'active' : ''}`}
          onClick={() => handleNavClick('Notifications')}
        >
          <NotificationIcon />
          <span>Notifications</span>
        </div>

        <div className="headerMain-profile" ref={popupRef}>
          <ProfileIcon />
          <div className="profile-info" onClick={togglePopup}>
            <div className="profile-text">Profile ▼</div>
          </div>

          {isPopupVisible && (
            <div className="profile-popup">
              {user ? (
                <>
                  <div className="profile-section">
                    <div className="dropdown-header">MY ACCOUNT</div>
                    <div className="dropdown-item" onClick={() => {/* Add update profile function */ }}>
                      Update Profile
                    </div>
                    <div className="dropdown-item" onClick={() => {/* Add help function */ }}>
                      Help
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="profile-actions">
                    <button className="logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="profile-section">
                    <div className="dropdown-header">ACCOUNT</div>
                    <div className="dropdown-item" onClick={openLogin}>
                      Login
                    </div>
                    <div className="dropdown-item" onClick={openRegistration}>
                      Sign Up
                    </div>
                    <div className="dropdown-item" onClick={() => {/* Add help function */ }}>
                      Help
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* <div
          className="nav-icon"
          onClick={() => {
            console.log('User signed out');
            setActiveNav('');
          }}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </div> */}
      </nav>

      {/* Account Section */}
      {/* <div
        className="headerMain-account"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="account-info" ref={popupRef}>
          <div className="account-icon-container" onClick={togglePopup}>
            <div className="account-text">
              {user ? (
                <>
                  <span className="hello-message">Hello, {user.name || 'User'}</span>
                  <span className="account-dropdown">Account ▼</span>
                </>
              ) : (
                <>
                  <span className="hello-message">Hello, Sign In</span>
                  <span className="account-dropdown">Account ▼</span>
                </>
              )}
            </div>
          </div>

          {isPopupVisible && (
            <div className="account-popup">
              {user ? (
                <>
                  <button onClick={handleLogout} className="popup-button">Logout</button>
                </>
              ) : (
                <>
                  <button onClick={openLogin} className="popup-button">Log In</button>
                  <button onClick={openRegistration} className="popup-button">Sign Up</button>
                </>
              )}
            </div>
          )}
        </div>
      </div> */}

      {/* Registration Modal */}
      {isRegistrationVisible && (
        <div className="registration-modal">
          <div className="modal-content">
            <button onClick={closeRegistration} className="close-modal-button">
              &times;
            </button>
            <Register />
          </div>
        </div>
      )}

      {/* Role Selection Modal */}
      {isRoleModalVisible && (
        <div className="role-modal">
          <div className="modal-content">
            <button onClick={() => setIsRoleModalVisible(false)} className="close-modal-button">&times;</button>
            <h3>Register as:</h3>
            <button
              className="role-button"
              onClick={() => {
                window.location.href = "/UserLogin";
                setIsRoleModalVisible(false);
              }}
            >
              Customer
            </button>
            <button
              className="role-button"
              onClick={() => {
                window.location.href = "/signinmethod"
                setIsRoleModalVisible(false);
              }}
            >
              Garage Owner
            </button>
          </div>
        </div>
      )}

    {/* Login Modal */}
      {isLoginVisible && (
        <div className="login-modal-overlay">
          <div className="login-modal-container">
            <Login 
              onLoginSuccess={handleLoginSuccess}
              onClose={() => setIsLoginVisible(false)}
            />
          </div>
        </div>
      )}

      {/* <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div> */}
    </header>
  );
};

export default Header;
