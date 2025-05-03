import React, { useState } from 'react';
import './ThyroidTests.css';

const ThyroidTests = () => {
  const [showMoreTests, setShowMoreTests] = useState(false);
  const [showMorePackages, setShowMorePackages] = useState(false);

  const testCards = [
    {
      title: 'Thyroid Profile Test',
      price: 299,
      originalPrice: 650,
      tests: 3,
      reportTime: '18 hrs',
      desc: "The test assesses the thyroid gland's functioning and helps to diagnose hypo...",
    },
    {
      title: 'TSH 3rd Generation Test',
      price: 219,
      originalPrice: 450,
      tests: 1,
      reportTime: '18 hrs',
      desc: "Measures the TSH levels and helps to diagnose the thyroid function...",
    },
    {
      title: 'Thyroid Profile Free Test',
      price: 599,
      originalPrice: 1900,
      tests: 3,
      reportTime: '24 hrs',
      desc: "Measures thyroid hormones and detects thyroid disorders...",
    },
    {
      title: 'FT4 (Free Thyroxine 4) Test',
      price: 300,
      originalPrice: 740,
      tests: 1,
      reportTime: '24 hrs',
      desc: "Diagnose & monitor diseases affecting thyroid...",
    },
    {
      title: 'Calcitonin Test',
      price: 2300,
      originalPrice: 4600,
      tests: 1,
      reportTime: '72 hrs',
      desc: "Diagnose hyperplasia and medullary thyroid cancer...",
    },
    {
      title: 'Cortisol Morning Sample Test',
      price: 600,
      originalPrice: 1999,
      tests: 1,
      reportTime: '72 hrs',
      desc: "Evaluates the pituitary & adrenal glands function...",
    },
    {
      title: 'TSH Receptor Antibodies Test',
      price: 4100,
      originalPrice: 7500,
      tests: 1,
      reportTime: '4 days',
      desc: "Diagnose thyroid disorders like Graves’ disease...",
    },
    {
      title: 'Cortisol Evening Sample Test',
      price: 600,
      originalPrice: 1000,
      tests: 1,
      reportTime: '72 hrs',
      desc: "Detects cortisol imbalance conditions...",
    }
  ];

  const packageCards = [
    {
      title: 'Advance Full Body Health Check Package with Thyroid Panel',
      price: 2499,
      originalPrice: 8000,
      tests: 99,
      reportTime: '72 hrs',
      desc: "Comprehensive health checkup with thyroid tests...",
    },
    {
      title: 'Full Body Package with Thyroid Panel- Essential',
      price: 1299,
      originalPrice: 1927,
      tests: 86,
      reportTime: '24 hrs',
      desc: "CBC, BSF, Lipid Profile, LFT, KFT, Thyroid Profile Total...",
    },
    {
      title: 'Full Body Package with Thyroid Panel- Advanced',
      price: 1799,
      originalPrice: 2275,
      tests: 88,
      reportTime: '24 hrs',
      desc: "Includes Free Thyroid Panel and other health markers...",
    },
    {
      title: 'Thyroid Screening Panel',
      price: 599,
      originalPrice: 2100,
      tests: 5,
      reportTime: '24 hrs',
      desc: "Screens thyroid gland functioning...",
    },
    {
      title: 'Thyroid profile advance',
      price: 799,
      originalPrice: 1997,
      tests: 5,
      reportTime: '72 hrs',
      desc: "Monitors thyroid functions and hormone levels...",
    },
    {
      title: 'Thyroid Antibodies Panel (Anti TPO, Anti TG) Test',
      price: 2700,
      originalPrice: 5000,
      tests: 2,
      reportTime: '72 hrs',
      desc: "Includes Anti-TPO and Anti-TG antibody tests...",
    },
    {
      title: 'Full Body Package with Thyroid Panel- Comprehensive',
      price: 2199,
      originalPrice: 4023,
      tests: 94,
      reportTime: '24 hrs',
      desc: "Covers major health indicators with thyroid panel...",
    },
    {
      title: 'FT4 & TSH 3rd Gen Panel',
      price: 399,
      originalPrice: 1140,
      tests: 2,
      reportTime: '24 hrs',
      desc: "Measures FT4 and TSH levels...",
    },
    {
      title: 'Hashimoto / Hypothyroidism Panel',
      price: 1250,
      originalPrice: 2049,
      tests: 3,
      reportTime: '9 days',
      desc: "Checks for Hashimoto’s and hypothyroidism...",
    },
    {
      title: 'Thyroid Profile Extensive',
      price: 2499,
      originalPrice: 5047,
      tests: 12,
      reportTime: '3 days',
      desc: "For detailed thyroid assessment...",
    },
    {
      title: 'Preconception Screening Package - Female',
      price: 2199,
      originalPrice: 4850,
      tests: 95,
      reportTime: '3 days',
      desc: "Includes thyroid and fertility parameters...",
    },
    {
      title: 'Fit India Full Body Checkup with Free HbA1c',
      price: 1099,
      originalPrice: 5233,
      tests: 89,
      reportTime: '24 hrs',
      desc: "Covers diabetes, lipid, liver, kidney, thyroid...",
    },
    {
      title: 'Advance Plus Full Body Checkup with Free HsCRP',
      price: 2199,
      originalPrice: 8260,
      tests: 98,
      reportTime: '24 hrs',
      desc: "Includes thyroid & inflammation markers...",
    }
  ];

  const renderCard = (item, type) => (
    <div className={`thyroid-card-${type}`} key={item.title}>
      <h3>{item.title}</h3>
      <p className="desc">{item.desc}</p>
      <p><strong>₹{item.price}</strong> <span className="cut">₹{item.originalPrice}</span></p>
      <p>Tests: {item.tests}</p>
      <p>Reports in: {item.reportTime}</p>
      <button className="add-btn">Add</button>
    </div>
  );

  return (
    <div className="thyroid-container">
      <h2>Thyroid Test Cards</h2>
      <div className="card-grid">
        {(showMoreTests ? testCards : testCards.slice(0, 6)).map(item => renderCard(item, 'test'))}
      </div>
      {testCards.length > 6 && (
        <button className="show-more" onClick={() => setShowMoreTests(!showMoreTests)}>
          {showMoreTests ? 'Show Less' : 'Show More'}
        </button>
      )}

      <h2>Thyroid Package Cards</h2>
      <div className="card-grid">
        {(showMorePackages ? packageCards : packageCards.slice(0, 6)).map(item => renderCard(item, 'package'))}
      </div>
      {packageCards.length > 6 && (
        <button className="show-more" onClick={() => setShowMorePackages(!showMorePackages)}>
          {showMorePackages ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ThyroidTests;
