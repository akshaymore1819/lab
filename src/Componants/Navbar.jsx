import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../assets/logo.png';

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
        <div className="rl-logo-brand">
          <img src={logo1} alt="Logo" className="rl-logo" />
          <Link to='/'><span className="rl-brand">Hospital Labs</span></Link>
        </div>

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

        <div className="rl-contact-number">
          📞 +91 99999 88888
        </div>
      </div>

      <div className={`rl-navbar-main ${isMenuOpen ? 'open' : ''}`}>
        <div className="rl-menu-container">
          <div className="rl-menu" onClick={toggleMenu}>☰ Menu</div>
          {isMenuOpen && (
            <div className="rl-dropdown-menu">
              <Link to='/lablocations' onClick={() => setIsMenuOpen(false)}>Lab Locations</Link>
              <Link to='/helpsupport' onClick={() => setIsMenuOpen(false)}>Help & Support</Link>
              <Link to='/healthblog' onClick={() => setIsMenuOpen(false)}>Health Blog</Link>
              <Link to='/aboutus' onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to='/quality' onClick={() => setIsMenuOpen(false)}>Quality Assurance</Link>
              <Link to='/partnership' onClick={() => setIsMenuOpen(false)}>Partnership</Link>
              <Link to='/gencliffe' onClick={() => setIsMenuOpen(false)}>GeneCliffe</Link>
              <Link to='/coverage' onClick={() => setIsMenuOpen(false)}>Medical Coverage</Link>
            </div>
          )}
        </div>

        <div className="rl-nav-actions">
          <button className="rl-hover-grow">Booking And Reports</button>
          <Link to="/Home2">
            <button className="rl-hover-grow rl-pulse">Book a Test</button>
          </Link>  
        </div>

        <div className="rl-nav-icons">
          <Link to='/login'>
            <span className="rl-user-icon rl-hover-grow" onClick={handleProfileClick}>👤</span>
          </Link>
          <Link to="/AddMemberForm">
            <span className="rl-cart-icon rl-hover-grow">🛒</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
