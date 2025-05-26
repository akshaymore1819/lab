import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        {/* About Section */}
        <div className="footer-section">
          <img src="asset/redcliffelabs-logo.png" alt="Redcliffe Labs" style={{ width: '160px' }} />
          <p>
            Hospital Labs is India's fastest growing omnichannel Pan India diagnostics service provider having its services in 220+ cities through a network of 80+ owned advanced labs and 2000+ Collection Centers powered by home sample collection across India.
          </p>
          <p>
            We are on a mission to provide quality healthcare services at affordable rates making diagnostics easily accessible and convenient to one and all.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/partnership" >Partner With Us</Link></li>
            <li><Link to="/Faq">FAQs </Link></li>
            <li><Link to="/aboutus" >About Us</Link></li>
            <li><Link to="/lablocations">Our Labss</Link></li>
             <li><Link to="/ESGPractices ">ESG Practice </Link></li>
            <li> <Link to="/CollectionCentres">CollectionCentres</Link></li>
            <li>
            <Link to="/Queries">Have a Query</Link>
              </li>
            <li><Link to="/Careers">Career </Link></li>
            <li> <Link to="/StatutoryCompliance">StatutoryCompliance</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>Email: care@Hospitallabs.com</p>
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
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
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
          <p>© 2025 Hospital Labs. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Disclaimer: As per PNDT Act 1994, our labs strictly do not determine the sex of the fetus.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
