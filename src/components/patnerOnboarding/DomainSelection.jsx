import React from 'react';
import './DomainSelection.css';
import garageIcon from '../../assets/partner1.svg'; 
import carSalesIcon from '../../assets/partner2.png';
import sparePartsIcon from '../../assets/partner3.png';
import emergencyIcon from '../../assets/partner4.png';
import accessoriesIcon from '../../assets/partner5.png';
import rentalsIcon from '../../assets/partner6.png';
import othersIcon from '../../assets/partner7.png'; 

const DomainSelection = () => {
  const domains = [
    { id: 1, name: 'GARAGE', icon: garageIcon },
    { id: 2, name: 'CAR/BIKE SALES', icon: carSalesIcon },
    { id: 3, name: 'SPARE PARTS', icon: sparePartsIcon },
    { id: 4, name: 'EMERGENCY SERVICES', icon: emergencyIcon },
    { id: 5, name: 'ACCESSORIES', icon: accessoriesIcon },
    { id: 6, name: 'RENTALS', icon: rentalsIcon },
  ];

  return (
    <div className="domain-container">
      {/* Progress Bar Changes*/}
      <div className="progress-container">
        <div className="progress-bar"></div>
        <div className="progress-text">1/4</div>
      </div>

      {/* Headings title */}
      <div className="domain-content">
        <h1 className="domain-title">What are you into Partner?</h1>
        <p className="domain-subtitle">Select your Domain to get started with vehiculr</p>

        {/* Grid */}
        <div className="domain-grid">
          {domains.map((domain) => (
            <div key={domain.id} className="domain-card">
              <img src={domain.icon} alt={domain.name} className="domain-icon" />
              {/* <span className="domain-name">{domain.name}</span> */}
            </div>
          ))}
          {/* Others button */}
          <div className="domain-card domain-others">
            <span className="domain-name">Others</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
