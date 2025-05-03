import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package2.css';

const Package2 = () => {
  const navigate = useNavigate();

  const packages = [
    {
      title: "Advance Plus Full Body Checkup with Free HsCRP",
      currentPrice: "₹2199",
      originalPrice: "₹8260",
      discount: "65% OFF"
    },
    {
      title: "Stay Fit Plus Full Body Checkup With Free RA Factor - Female",
      currentPrice: "₹2499",
      originalPrice: "₹8760",
      discount: "71% OFF"
    }
  ];

  const handleNextClick = () => {
    navigate('/AddMemberForm'); // Replace '/next' with the actual path you want to go to
  };

  return (
    <div className="health-container">
      <main className="health-main">
        <header className="health-header">
          <div className="header-content">
            <h1 className="header-title">Confirm Your Booking</h1>
            <div className="progress-container">
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className={`progress-step ${step === 1 ? 'active' : ''}`}>
                    <div className="step-indicator"></div>
                    <span className="step-label">
                      {step === 1 && 'Test Selection'}
                      {step === 2 && 'Members'}
                      {step === 3 && 'Address'}
                      {step === 4 && 'Payment'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </header>

        <div className="content-grid">
          <div className="selected-packages">
            <div className="packages-list">
              {packages.map((pkg, index) => (
                <div className="package-card" key={index}>
                  <div className="package-content">
                    <h3>{pkg.title}</h3>
                    <div className="price-container">
                      <span className="current-price">{pkg.currentPrice}</span>
                      <span className="original-price">{pkg.originalPrice}</span>
                      <span className="discount-badge">{pkg.discount}</span>
                    </div>
                  </div>
                  <button className="remove-btn">
                    <span className="remove-icon">×</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="add-more-btn">
              <span className="plus-icon">+</span>
              Add More Tests
            </button>
          </div>

          <div className="order-summary">
            <div className="summary-card">
              <h3 className="summary-title">Order Details</h3>

              <div className="benefits-section">
                <h4>Group Discounts</h4>
                <div className="benefits-grid">
                  {[2, 3, 4].map((members, index) => (
                    <div className="benefit-card" key={index}>
                      <div className="member-icon">👥</div>
                      <div className="benefit-info">
                        <span className="member-count">{members} Members</span>
                        <span className="discount-percent">{5 * (index + 1)}% OFF</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="address-section">
                <h4>Collection Address</h4>
                <div className="address-card">
                  <div className="address-placeholder">
                    <span className="pin-icon">📍</span>
                    <p>Select sample collection address</p>
                  </div>
                  <div className="address-actions">
                    <button className="select-address-btn">Choose Address</button>
                    <button className="add-address-btn">+ New Address</button>
                  </div>
                </div>
              </div>

              <div className="price-summary">
                <div className="savings-row">
                  <span>Total Savings</span>
                  <span className="savings-amount">₹16,210</span>
                </div>
                <p className="price-note">Final amount calculated in next step</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="action-footer">
          <button className="next-action-btn" onClick={handleNextClick}>
            Next
            <span className="arrow-icon">→</span>
          </button>
        </footer>
      </main>
    </div>
  );
};

export default Package2;
