// SelectBrand.js
import React, { useState } from 'react';
import '../styles/SelectBrand.css';

// Local logo imports
import bmwLogo from '../assets/bmw.png';
import audiLogo from '../assets/audi.png';
import chevrolet from '../assets/chevrolet.png';
import ford from '../assets/ford.png';
import honda from '../assets/honda.png';
import hyundai from '../assets/hyundai.png';
import suzuki from '../assets/suzuki.png';
import mahindra from '../assets/mahindra.png';
import toyota from '../assets/toyota.png';
import kia from '../assets/kia.png';
import rollsroyce from '../assets/rolls-royce.png';
import renault from '../assets/renault.png';
import skoda from '../assets/skoda.png';



const brandList = [
  
  { name: 'BMW', logo: bmwLogo },
  { name: 'Audi', logo: audiLogo },
  { name: 'Chevrolet', logo: chevrolet },
  { name: 'Ford', logo: ford },
  { name: 'Honda', logo: honda },
  { name: 'Hyundai', logo: hyundai },
  { name: 'Suzuki', logo: suzuki },
  { name: 'Mahindra', logo: mahindra },
  { name: 'Toyota', logo: toyota },
  { name: 'Kia', logo: kia },
  { name: 'Rolls Royce', logo: rollsroyce },
  { name: 'Renault', logo: renault },
  { name: 'Skoda', logo: skoda },
  
];

const SelectBrand = () => {
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
    <div className="brand-container">
      <h2>Car Brands</h2>
      <p className="subtext">Kindly be our Premium member to add more Brands</p>
      <div className="brand-grid">
        {brandList.map((brand, index) => (
          <div
            key={index}
            className={`brand-card ${selectedBrands.includes(brand.name) ? 'selected' : ''}`}
            onClick={() => handleSelect(brand.name)}
          >
            <div className="brand-logo-name">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <span className="brand-name">{brand.name}</span>
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

export default SelectBrand;
