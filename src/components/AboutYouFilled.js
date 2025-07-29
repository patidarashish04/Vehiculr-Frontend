import React, { useState } from 'react';
import '../styles/AboutYouFilled.css';

const AboutYouFilled = () => {
  const [bikeName, setBikeName] = useState('');
  const [carName, setCarName] = useState('');
  const [showAllBikes, setShowAllBikes] = useState(false);
  const [showAllCars, setShowAllCars] = useState(false);

  const bikeList = [
    'Hero Xpulse', 'pulsar ns', 'Royal Enfield', 'Honda Cbr', 'Passion Pro', 'Ninja',
    'RTR Apache', 'Bajaj Platina', 'Honda Shine', 'Hero Splendor Plus',
    'Yamaha R15 v4', 'Suzuki Gixxer SF', 'KTM Duke 200/250/390',
    'Bajaj Avenger 160/220', 'Bajaj Dominar 250/400', 'KTM Adventure 250/390',
    'BMW G 310 GS',
  ];

  const carList = [
    'Maruti Alto', 'Wagon R', 'Swift', 'Dzire', 'Hyundai i20', 'Hyundai Creta',
    'Tata Nexon', 'Tata Punch', 'Kia Seltos', 'Mahindra XUV300', 'Scorpio',
    'Toyota Fortuner', 'Toyota Innova', 'Honda City', 'Honda Amaze',
    'Maruti Baleno', 'MG Hector', 'Skoda Slavia', 'Volkswagen Virtus',
  ];

  const [bikeTags, setBikeTags] = useState(bikeList);
  const [carTags, setCarTags] = useState(carList);

  const handleBikeInput = (e) => {
    const value = e.target.value.toLowerCase();
    setBikeName(value);
    const filtered = bikeList.filter((bike) =>
      bike.toLowerCase().includes(value)
    );
    setBikeTags(filtered.length > 0 ? filtered : []);
  };

  const handleCarInput = (e) => {
    const value = e.target.value.toLowerCase();
    setCarName(value);
    const filtered = carList.filter((car) =>
      car.toLowerCase().includes(value)
    );
    setCarTags(filtered.length > 0 ? filtered : []);
  };

  const handleTagClick = (tag, type) => {
    if (type === 'bike') setBikeName(tag);
    else setCarName(tag);
  };

  const toggleShowAllBikes = () => {
    setShowAllBikes(!showAllBikes);
    setBikeTags(bikeList);
  };

  const toggleShowAllCars = () => {
    setShowAllCars(!showAllCars);
    setCarTags(carList);
  };

  return (
    <div className="container-box">
      <div className="step-indicator">4/4</div>
      <h2 className="heading">What Do you Ride/Drive?</h2>
      <p className="subtext">
        Let us know about you so we can connect you to the world of Vehiculr
      </p>

      {/* Bike Section */}
      <div className="section">
        <label className="label">Your Ride</label>
        <div className="input-plus">
          <input
            type="text"
            placeholder="Enter your Bike Name"
            value={bikeName}
            onChange={handleBikeInput}
            className="input"
          />
          <button onClick={toggleShowAllBikes} className="plus-btn">+</button>
        </div>
        <div className="tags">
          {(showAllBikes ? bikeTags : bikeTags.slice(0, 3)).map((tag, index) => (
            <span
              key={index}
              className="tag-item"
              onClick={() => handleTagClick(tag, 'bike')}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Car Section */}
      <div className="section">
        <label className="label">Your Drive</label>
        <div className="input-plus">
          <input
            type="text"
            placeholder="Enter your Car Name"
            value={carName}
            onChange={handleCarInput}
            className="input"
          />
          <button onClick={toggleShowAllCars} className="plus-btn">+</button>
        </div>
        <div className="tags">
          {(showAllCars ? carTags : carTags.slice(0, 3)).map((tag, index) => (
            <span
              key={index}
              className="tag-item"
              onClick={() => handleTagClick(tag, 'car')}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="continue-btn">Continue</button>
      <p className="skip-text">Skip this Part</p>
    </div>
  );
};

export default AboutYouFilled;
