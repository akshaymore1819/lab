import React from "react";
import "./MenHealthCheckup.css";
import { motion } from "framer-motion";
import img1 from '../assets/coverage.jpg'
const MenHealthCheckup = () => {
  const checkupPackages = [
    {
      title: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      price: "₹1599",
      original: "₹7844",
      off: "78% off",
      btn: "Book",
    },
    {
      title: "Stay Fit Plus Full Body Checkup With Free RA Factor - Male",
      price: "₹2499",
      original: "₹8940",
      off: "77% off",
      btn: "View Cart",
    },
    {
      title: "Fit India Full Body Checkup with Free Vitamin B12",
      price: "₹2109",
      original: "₹9258",
      off: "78% off",
      btn: "View Cart",
    },
    {
      title: "Smart Full Body Checkup",
      price: "₹799",
      original: "₹2160",
      off: "63% off",
      btn: "Book",
    },
    {
      title: "Smart Plus Full Body Checkup With Vitamin Screening",
      price: "₹1599",
      original: "₹5820",
      off: "72% off",
      btn: "Book",
    },
    {
      title: "Fit India Full Body Checkup",
      price: "₹2109",
      original: "₹9258",
      off: "78% off",
      btn: "Book",
    },
    {
      title: "Super Advance Full Body Checkup Male",
      price: "₹2999",
      original: "₹9600",
      off: "69% off",
      btn: "Book",
    },
    {
      title: "Vital Screening Package",
      price: "₹599",
      original: "₹2040",
      off: "70% off",
      btn: "View Cart",
    },
    {
      title: "Cardiac Risk Markers - Advanced",
      price: "₹1799",
      original: "₹3560",
      off: "49% off",
      btn: "Book",
    },
  ];

  return (
    <div className="men-checkup-main-container">
      <motion.h1
        className="men-checkup-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Routine Health Checkups for Men in Amravati
      </motion.h1>

      {/* Banner Section */}
      <motion.div
        className="men-checkup-banner-section"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={img1}
          alt="Senior Citizens Banner"
          className="men-checkup-banner-image"
        />
      </motion.div>

      {/* Cards Section */}
      <div className="men-checkup-cards-container">
        {checkupPackages.map((item, index) => (
          <motion.div
            key={index}
            className="men-checkup-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="men-card-title">{item.title}</h3>
            <div className="men-card-price-wrapper">
              <span className="men-price-discounted">{item.price}</span>
              <span className="men-price-original">{item.original}</span>
              <span className="men-price-off">{item.off}</span>
            </div>
            <button className="men-checkup-button">{item.btn}</button>
          </motion.div>
        ))}
      </div>

      {/* Description Section */}
      <div className="men-checkup-description-section">
        <p>
          At Redcliffe Labs, we are committed to making quality healthcare accessible and convenient for everyone.
        </p>
        <ul className="men-highlight-points">
          <li><strong>✅ 100% Report Correctness</strong></li>
          <li><strong>✅ Trusted by 50k+ Doctors</strong></li>
          <li><strong>✅ 45 Min Express Sample Collection</strong></li>
        </ul>
      </div>

      {/* Test Details */}
      <div className="men-checkup-test-details">
        <h2>Test Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Also known as</td>
              <td>Routine health checkup for men in Amravati</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>Help detect early signs of health problems like heart disease, diabetes, liver and kidney disorders</td>
            </tr>
            <tr>
              <td>Preparation</td>
              <td>Do not drink or smoke before the test</td>
            </tr>
            <tr>
              <td>Home Sample Collection</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits Section */}
      <div className="men-checkup-benefits-section">
        <h2>Purpose of a Men’s Health Checkup Package</h2>
        <ol>
          <li>Early detection of health issues</li>
          <li>Helps Monitor Lifestyle Diseases</li>
          <li>Preventive Health Care</li>
          <li>Reduces Long–Term Health Costs</li>
          <li>Convenience and Accuracy</li>
        </ol>
      </div>

      {/* FAQs Section */}
      <div className="men-checkup-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Why is a health checkup important for men?</h3>
          <p>It helps detect issues like high blood pressure, diabetes, cholesterol, and more at an early stage.</p>
        </div>
        <div className="faq-item">
          <h3>At what age should men start getting regular checkups?</h3>
          <p>Generally, men should begin regular checkups by age 30 or earlier if they have risk factors.</p>
        </div>
        <div className="faq-item">
          <h3>How often should men undergo a health checkup?</h3>
          <p>Once every 6–12 months is ideal depending on health and age.</p>
        </div>
        <div className="faq-item">
          <h3>What tests are typically part of a men's health checkup?</h3>
          <p>Blood pressure, blood sugar, cholesterol, liver, kidney, and vitamin tests.</p>
        </div>
      </div>
    </div>
  );
};

export default MenHealthCheckup;
