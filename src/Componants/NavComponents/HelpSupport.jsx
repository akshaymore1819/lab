import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './HelpSupport.css';

const HelpSupport = () => {
  const handleCall = () => window.location.href = "tel:8988988787";
  const handleWhatsApp = () => window.open("https://wa.me/8988988787");
  const handleEmail = () => window.location.href = "mailto:care@redcliffelabs.com";

  return (
    <div className="full-page-background">
      <div className="help-support-container">
        <h1 className="page-title">Help & Support</h1>
        
        <div className="intro-section">
          <h2>We're here to help!</h2>
          <p>
            If you have any queries related to any of our tests or packages, you can contact us on the below mentioned phone number or email.
          </p>
        </div>

        <div className="contact-options">
          <div className="contact-option" onClick={handleCall}>
            <div className="contact-icon phone">
              <FaPhone />
            </div>
            <div className="contact-details">
              <span className="contact-label">Call</span>
              <span className="contact-value">898 898 8787</span>
            </div>
          </div>

          <div className="contact-option" onClick={handleWhatsApp}>
            <div className="contact-icon whatsapp">
              <FaWhatsapp />
            </div>
            <div className="contact-details">
              <span className="contact-label">Message</span>
              <span className="contact-value">Chat On WhatsApp</span>
            </div>
          </div>

          <div className="contact-option" onClick={handleEmail}>
            <div className="contact-icon email">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">care@redcliffelabs.com</span>
            </div>
          </div>
        </div>

        <div className="specific-questions">
          <h3>For specific questions, get in touch below</h3>
          <div className="question-mark">?</div>
        </div>

        <div className="footer-info">
          <div>Hospital labs</div>
          <div>Amrovati</div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;