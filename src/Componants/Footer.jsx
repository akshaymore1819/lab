import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        {/* About Section */}
        <div className="footer-section">
          <img src="asset/redcliffelabs-logo.png" alt="Redcliffe Labs" style={{ width: '160px' }} />
          <p>
            Redcliffe Labs is India's fastest growing omnichannel Pan India diagnostics service provider having its services in 220+ cities through a network of 80+ owned advanced labs and 2000+ Collection Centers powered by home sample collection across India.
          </p>
          <p>
            We are on a mission to provide quality healthcare services at affordable rates making diagnostics easily accessible and convenient to one and all.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>Partner With Us</li>
            <li>FAQs</li>
            <li>About Us</li>
            <li>Our Labs</li>
            <li>ESG Practices</li>
            <li>Collection Centres</li>
            <li>Have a Query</li>
            <li>Career</li>
            <li>Statutory Compliance</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>Email: care@redcliffelabs.com</p>
            <p>Phone: 898 898 0606</p>
            <p>Redcliffe Lifetech Pvt. Ltd.</p>
            <p>Corporate: H-31, 2nd Floor, Sector 63, Noida, UP 201301</p>
            <p>National Reference Lab: H-55, Sector 63, Noida, UP 201301</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div>
          <p>We are committed to deliver highest quality standards and exceptional customer service</p>
          <p>The Content on this website is DMCA protected</p>
        </div>

        <div className="footer-links">
          <p>Find a lab near me</p>
          <p>Locate Now</p>
          <p>© 2025 Redcliffe Labs. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Disclaimer: As per PNDT Act 1994, our labs strictly do not determine the sex of the fetus.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
