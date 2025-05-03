import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Select Location');
  const navigate = useNavigate();

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () => setLocationDropdownOpen(!isLocationDropdownOpen);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setLocationDropdownOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/login');
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

      <div className={`rl-navbar-main ${isMenuOpen ? 'open' : ''}`}>
        <div className="rl-menu-container">
          <div className="rl-menu" onClick={toggleMenu}>☰ Menu</div>
          {isMenuOpen && (
            <div className="rl-dropdown-menu">
              <Link to='/lablocations'>Lab Locations</Link>
              <Link to='/helpsupport'>Help & Support</Link>
              <Link to='/healthblog'>Health Blog</Link>
              <Link to='/aboutus'>About Us</Link>
              <Link to='/quality'>Quality Assurance</Link>
              <Link to='/partnership'>Partnership</Link>
              <Link to='/gencliffe'>GeneCliffe</Link>
              <Link to='/coverage'>Medical Coverage</Link>
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
          <Link to='/login'>
            <span className="rl-user-icon rl-hover-grow" onClick={handleProfileClick}>👤</span>
          </Link>
          <span className="rl-cart-icon rl-hover-grow">🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
