// src/components/RightSidebar.js
import React from 'react';
import { FiZap, FiTool, FiFileText, FiStar, FiMessageSquare, FiCalendar } from 'react-icons/fi';
import '../styles/RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      
        <h3>Quick Action</h3>

      {/* Small Boxes */}
      <div className="small-box">
        <FiTool className="small-box-icon" />
        <span>Top DIY of the day</span>
      </div>
      <div className="small-box">
        <FiFileText className="small-box-icon" />
        <span>Others</span>
      </div>
      <div className="small-box">
        <FiFileText className="small-box-icon" />
        <span>Top Story</span>
      </div>
      <div className="small-box">
        <FiStar className="small-box-icon" />
        <span>Latest Reviews</span>
      </div>
      <div className="small-box">
        <FiMessageSquare className="small-box-icon" />
        <span>Trending Q&A</span>
      </div>
      <div className="small-box">
        <FiCalendar className="small-box-icon" />
        <span>All Events</span>
      </div>
    </div>
  );
};

export default RightSidebar;