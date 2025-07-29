import React from 'react';
import '../styles/UserLoginSuccessful.css';

const UserLoginSuccessful = () => {
  const handleSave = () => {
    alert('Save Image clicked!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
          alt="Success Icon"
          className="icon"
        />
        <h2 className="heading">
          Congratulations <span className="username">@Username</span>,
        </h2>
        <p className="subtext">Now you are a Vehiculrist.</p>

        <div className="button-group">
          <button className="button save-btn" onClick={handleSave}>
            Save Image
          </button>
          <button className="button print-btn" onClick={handlePrint}>
            Print
          </button>
        </div>

        <p className="swipe-text">Swipe up to check out feed</p>
      </div>
    </div>
  );
};

export default UserLoginSuccessful;
