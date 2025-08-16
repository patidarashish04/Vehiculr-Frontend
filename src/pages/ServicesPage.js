// src/pages/ServicesPage.js
import '../styles/ServicesPage.css';
import { useNavigate } from 'react-router-dom';
import SocialMediaCard from '../components/SocialMediaCard';


// src/pages/ServicesPage.js
import React from 'react';
import { FiPackage, FiHome, FiMoreHorizontal } from 'react-icons/fi';

import { ReactComponent as PreOwnedVehicles } from '../assets/icons/carLogo.svg';
import { ReactComponent as Garages } from '../assets/icons/garageLogo.svg';
import { ReactComponent as Others } from '../assets/icons/Other.svg';


const ServicesPage = () => {
    const navigate = useNavigate();
     const handleSearch = () => {
        // // Redirect to /search/yourQuery so that the SearchResults component can load the results
        // if (searchQuery.trim()) {
        //   navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
        // }
    
        //redirecting \
        navigate('/garagelist')
      };
    return (
        <div className="services-page">
            {/* Main Title */}
            <h1 className="page-title">Services</h1>

            {/* SALE Banner */}
            {/* <div className="sale-banner">
        <h2>SALE</h2>
      </div> */}

            {/* Three Big Boxes */}
            <div className="services-container">
                {/* Pre-Owned Vehicles Button */}
                <button className="service-button">
                    <PreOwnedVehicles className="service-icon" />
                    <button className="btn-best-deal">Pre-Owned Vehicles</button>
                </button>

                {/* Garages Button */}
                <button className="service-button">
                    <Garages className="service-icon" />
                    <button className="btn btn-primary" onClick={handleSearch}>Garages</button>

                </button>

                {/* Others Button */}
                <button className="service-button">
                    <Others className="service-icon" />
                    <button className="btn-best-deal">Others</button>
                </button>
            </div>


            {/* Image Section - BEAMER GARAGE */}
            <div className="image-section">
                <div className="image-content">
                    <h2>BEAMER GARAGE</h2>
                    <div className="image-text-block">
                        <h3>AIRWAY</h3>
                        <p>HARD expectations reaching up to 30% with<br />RMM losses at Cars. Start proving in 2024.</p>
                    </div>
                </div>
            </div>
            {/* Feed */}
            {/* <Card className="bg-gray-800">
                <CardContent className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Feed</h2>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <div className="font-bold">OwnerTalks</div>
                            <div className="text-sm text-gray-400">20h ago</div>
                        </div>
                        <p>
                            🚗 New Car, First Service Done! 🚗 <br />
                            Loving my new hyundai i20 N-line—smooth ride & packed with features! Just completed the first service: quick, efficient, and hassle-free. Ready for many more miles ahead!
                        </p>
                        <div className="text-sm text-blue-400 mt-2">#NewCar #FirstService #SmoothDrive #fascinating</div>
                    </div>
                </CardContent>
            </Card> */}
            <SocialMediaCard/>
        </div>
    );
};

export default ServicesPage;