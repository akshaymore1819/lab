import React, { useEffect } from 'react';
import './AnnualHealthPackage.css';
import redcliffeLogo from '../assets/logo.png'; // You'll need to add this image
import sampleReportImage from '../assets/hero1.jpg'; // Add this image from your screenshot

const AnnualHealthPackage = () => {
  useEffect(() => {
    // Animation trigger on component mount
    const elements = document.querySelectorAll('.ahc-animate');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100 * i);
    });
  }, []);

  return (
    <div className="ahc-container">
      {/* Header Section with Animation */}
      <div className="ahc-header-section ahc-animate">
        <div className="ahc-booking-info">
          <span className="ahc-booking-count">772+ people booked this recently</span>
          <span className="ahc-price-info">21599 如926    21439 with  VIP</span>
        </div>
        
        <h1 className="ahc-main-title">Annual Health Checkup- Advance with Free HsCRP in Amravati</h1>
        
        <div className="ahc-home-collection">
          <span className="ahc-home-collection-badge">
            <img src={redcliffeLogo} alt="Redcliffe Labs" className="ahc-collection-icon" />
            Home Sample Collection Available
          </span>
        </div>
      </div>

      {/* Package Description with Pulse Animation */}
      <div className="ahc-package-description ahc-animate">
        <p className="ahc-package-text">
          The Annual Health checkup Advance package covers 91 parameters of tests 
          including CBC, ESR, BSF, HbAlc, Lipid, HsCRP, LFT, KFT, Thyroid profile, Vit BI2 & D
          <span className="ahc-savings-badge ahc-pulse">® You will Save 26321 on this Package</span>
          and urine routine with free HsCRP.
        </p>
      </div>

      {/* Action Buttons with Hover Effects */}
      <div className="ahc-action-buttons ahc-animate">
        <button className="ahc-add-to-cart ahc-btn-hover">+ Add To Cart</button>
        <button className="ahc-book-now ahc-btn-hover">Book Now</button>
      </div>

      {/* Key Features with Icon Animations */}
      <div className="ahc-key-features ahc-animate">
        <div className="ahc-features-grid">
          {[
            { icon: '✓', text: '92 Parameters' },
            { icon: '⏱', text: 'Reports in 24 hrs' },
            { icon: '🍽', text: 'Fasting 10-12 Hrs Required' },
            { icon: '👫', text: 'Recommended Gender: both' }
          ].map((feature, index) => (
            <div className="ahc-feature-item" key={index}>
              <span className="ahc-feature-icon ahc-icon-bounce">{feature.icon}</span>
              <span className="ahc-feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Offers with Card Flip Animation */}
      <div className="ahc-discount-section ahc-animate">
        <h3 className="ahc-discount-title">Discounts for Multiple Bookings</h3>
        <div className="ahc-discount-grid">
          {[
            { percent: '5% Off', desc: 'on 2 Patient', price: '₹3038', original: '₹3198' },
            { percent: '10% Off', desc: 'on 3 Patient', price: '₹4317', original: '₹4797' },
            { percent: '15% Off', desc: 'on 4+ Patient', price: '₹5436', original: '₹6396' }
          ].map((discount, index) => (
            <div className="ahc-discount-card ahc-card-flip" key={index}>
              <div className="ahc-discount-percent">{discount.percent}</div>
              <div className="ahc-discount-desc">{discount.desc}</div>
              <div className="ahc-discount-price">
                {discount.price} <span className="ahc-original-price">{discount.original}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="ahc-age-group">
          <span className="ahc-age-label">Age Group:</span>
          <span className="ahc-age-value">Above 5 years</span>
        </div>
        
        <p className="ahc-discount-note">
          Given amount is subject to change based on number of patient you select.
          Applicable on minimum cart amount 2800
        </p>
      </div>

      {/* Sample Report Section with Image */}
      <div className="ahc-sample-report ahc-animate">
        <button className="ahc-view-sample-btn ahc-btn-hover">View Sample Report</button>
        
        <div className="ahc-report-card ahc-card-hover">
          <div className="ahc-report-card-header">
            <img src={redcliffeLogo} alt="Redcliffe Labs" className="ahc-report-logo-img" />
            <div className="ahc-report-title">Sample Report</div>
          </div>
          <img src={sampleReportImage} alt="Sample Report Preview" className="ahc-report-sample-img" />
          <p className="ahc-report-desc">
            Explore an example of what your medical report will look like. 
            Click below to view a sample report and understand how your result will be presented
          </p>
          <button className="ahc-view-report-btn ahc-btn-hover">View Report</button>
        </div>
      </div>

      {/* Tests Included Section with Wave Animation */}
      <div className="ahc-tests-section ahc-animate">
        <div className="ahc-tests-header">
          <img src={redcliffeLogo} alt="Redcliffe Labs" className="ahc-labs-logo-img" />
          <h2 className="ahc-tests-title">Annual Health Checkup- Advance with Free HSCRP</h2>
          <div className="ahc-tests-count ahc-wave">
            <span className="ahc-tests-number">91</span>
            <span className="ahc-tests-plus">+</span>
            <span className="ahc-tests-free">Free Tests</span>
          </div>
        </div>
        
        <div className="ahc-tests-grid">
          {[
            'Complete Blood Count (CBC) (26)',
            'Erythrocyte Sedimentation Rate (ESR) (1)',
            'Glucose Fasting (BSF) (1)',
            'HbAIC (Glycosylated Haemoglobin) (2)',
            'High Sensitivity C-Reactive Protein (Hs-CRP) (1)',
            'Kidney Function Test (KFT) (12)',
            'Lipid Profile (9)',
            'Liver Function Test (LFT) (12)',
            'Thyroid Profile Total (3)',
            'Urine R/M (23)',
            'Vitamin B12 / Cyanocobalamin (1)',
            'Vitamin D 25 Hydroxy (1)'
          ].map((test, index) => (
            <div className="ahc-test-category ahc-test-hover" key={index}>
              <div className="ahc-test-category-name">{test}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee Banner with Shine Animation */}
      <div className="ahc-guarantee-banner ahc-animate ahc-shine">
        <div className="ahc-guarantee-text">100% Accuracy GUARANTEED</div>
        <div className="ahc-savings-text">Indians Save 1 Crore Daily by Choosing Us!</div>
      </div>

      {/* Brand Section with Floating Animation */}
      <div className="ahc-brand-section ahc-animate ahc-float">
        <h2 className="ahc-brand-title">Redcliffe Labs - Healthy India ki Trusted Lab</h2>
        <p className="ahc-brand-desc">
          At Redcliffe Labs, we have a single goal: to give India its right to quality diagnostics.
        </p>
        
        <div className="ahc-stats-grid">
          {[
            { number: '70,00,000+', label: 'Customers served' },
            { number: '70,000+', label: 'Tests Processed Everyday' },
            { number: '220+', label: 'Cities' },
            { number: '2000+', label: 'Collection Centers' }
          ].map((stat, index) => (
            <div className="ahc-stat-item ahc-stat-hover" key={index}>
              <div className="ahc-stat-number">{stat.number}</div>
              <div className="ahc-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Pulse Animation */}
      <div className="ahc-cta-section ahc-animate">
        <div className="ahc-price-box ahc-pulse-slow">
          <div className="ahc-price-label">Offer Price</div>
          <div className="ahc-price-value">₹1599</div>
          <button className="ahc-book-now-btn ahc-btn-hover">BOOK NOW</button>
        </div>
        <div className="ahc-cta-text">Your Health, Our Expertise!!</div>
      </div>
    </div>
  );
};

export default AnnualHealthPackage;