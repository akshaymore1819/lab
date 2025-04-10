import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ← Add this
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Select Location');

  const navigate = useNavigate(); // ← Add this

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () => setLocationDropdownOpen(!isLocationDropdownOpen);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setLocationDropdownOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/login'); // ← Redirect to login page
  };

  return (
    <nav className="rl-navbar">
      <div className="rl-navbar-top">
        <Link to='/'><span className="rl-brand">Hospital Labs</span></Link>
        <div className="rl-location-container" onClick={toggleLocationDropdown}>
          <span className="rl-location-label">{selectedCity} ▼</span>
          {isLocationDropdownOpen && (
            <div className="rl-location-dropdown">
              {cities.map((city, index) => (
                <div key={index} className="rl-city-item" onClick={() => handleCitySelect(city)}>
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="rl-navbar-main">
        <div className="rl-menu-container">
          <div className="rl-menu" onClick={toggleMenu}>☰ Menu</div>
          {isMenuOpen && (
            <div className="rl-dropdown-menu">
              <a href="#">Lab Locations</a>
              <a href="#">Help & Support</a>
              <a href="#">Health Blog</a>
              <a href="#">About Us</a>
              <a href="#">Quality Assurance</a>
              <a href="#">Partnership</a>
              <a href="#">GeneCliffe</a>
              <a href="#">Medical Coverage</a>
            </div>
          )}
        </div>

        <div className="rl-search-box">
          <span className="rl-search-icon">🔍</span>
          <input type="text" placeholder="Search Tests" />
        </div>

        <div className="rl-nav-actions">
          <button className="rl-hover-grow">Upload Prescription</button>
          <button className="rl-hover-grow rl-pulse">Book a Test</button>
        </div>

        <div className="rl-nav-icons">
        <Link to='/login'>  <span className="rl-user-icon rl-hover-grow" onClick={handleProfileClick}>👤</span></Link> {/* ← updated */}
          <span className="rl-cart-icon rl-hover-grow">🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
