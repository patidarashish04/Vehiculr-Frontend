import React from 'react';
import './partnerCarBike.css';
import carIcon from '../../assets/partner-Car-card.png'; // replace with your car image
import bikeIcon from '../../assets/partner-Bike-card.png'; // replace with your bike image

const VehicleTypeSelection = () => {
  const vehicleTypes = [
    { id: 1, name: 'CARS', icon: carIcon },
    { id: 2, name: 'BIKES', icon: bikeIcon }
  ];

  return (
    <div className="vehicle-outer-container">
      <div className="vehicle-container">
        {/* Progress */}
        <div className="progress-container">
          <div className="progress-bar"></div>
          <div className="progress-text">1/4</div>
        </div>

        {/* Headings */}
        <div className="vehicle-content">
          <h1 className="vehicle-title">What are you into Partner?</h1>
          <p className="vehicle-subtitle">Select your Domain to get started with vehiculr</p>

          {/* Grid */}
          <div className="vehicle-grid">
            {vehicleTypes.map((item) => (
              <div key={item.id} className="vehicle-card">
                <div className="vehicle-image-wrapper">
                  <img src={item.icon} alt={item.name} className="vehicle-icon" />
                  <span className="vehicle-name">{item.name}</span>
                </div>
              </div>
            ))}
            <div className="vehicle-card vehicle-others">
              <span className="vehicle-name">Others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleTypeSelection;

