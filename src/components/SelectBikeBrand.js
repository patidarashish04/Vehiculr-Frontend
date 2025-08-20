// SelectBikeBrand.js
import React, { useState } from 'react';
import '../styles/SelectBikeBrand.css';

// Local bike logo imports
import hero from '../assets/hero.png';
import bajaj from '../assets/bajaj.png';
import Harley from '../assets/Harley.png';
import ktm from '../assets/ktm.png';
import tvs from '../assets/tvs.png';
import royalenfield from '../assets/royal-enfield.png';
import yamaha from '../assets/yamaha.png';
import kawasaki from '../assets/kawasaki.png';
import bmwmotor from '../assets/bmwmotor.png';
import ducati from '../assets/Ducati.png';


const bikeBrandList = [
  { name: 'Hero Motocorp', logo: hero },
  { name: 'Bajaj', logo: bajaj },
  { name: 'HarleyDavidson', logo: Harley },
  { name: 'KTM', logo: ktm },
  { name: 'TVS', logo: tvs },
  { name: 'Royal Enfield', logo: royalenfield },
  { name: 'Yamaha', logo: yamaha },
  { name: 'Kawasaki', logo: kawasaki },
  { name: 'BMW Motorrad', logo: bmwmotor },
  { name: 'Ducati', logo: ducati },
  
];

const SelectBikeBrand = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (name) => {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter(brand => brand !== name));
    } else {
      if (selectedBrands.length < 3) {
        setSelectedBrands([...selectedBrands, name]);
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <div className="bike-brand-container">
      <h2>Bike Brands</h2>
      <p className="subtext">Kindly be our Premium member to add more Brands</p>
      <div className="bike-brand-grid">
        {bikeBrandList.map((brand, index) => (
          <div
            key={index}
            className={`bike-brand-card ${selectedBrands.includes(brand.name) ? 'selected' : ''}`}
            onClick={() => handleSelect(brand.name)}
          >
            <div className="bike-brand-logo-name">
              <img src={brand.logo} alt={brand.name} className="bike-brand-logo" />
              <span className="bike-brand-name">{brand.name}</span>
            </div>
            {selectedBrands.includes(brand.name) && <div className="dot"></div>}
          </div>
        ))}
      </div>
      <button className="continue-btn">Continue</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Limit Reached!!!</h3>
            <p>You can only select up to 3 brands. To select more brands kindly be a part of our Premium family availing more benefits.</p>
            <div className="modal-actions">
              <button className="buy-btn">Buy Premium</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBikeBrand;
