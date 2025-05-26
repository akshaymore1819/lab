import React from "react";
import "./Queries.css";

const Queries = () => {
  return (
    <div className="contact-support-container">
      <div className="support-header">
        <h1>Do You Have Any Questions Or Queries?</h1>
        <p>
          Our customer support team is here to help. Contact us, and we'll respond promptly.
          The team is available online from 8 AM to 9 PM to assist you. Feel free to reach out 
          at your convenience, and we'll get back to you promptly.
        </p>
      </div>

      <div className="faq-section">
        <h2>Have a Question? Get Instant Answers</h2>
        <p>
          See if we've already answered your question in our Frequently Asked Questions section. 
          If not, our support team is here to help.
        </p>
        <button className="faq-button">Explore FAQs &gt;</button>
      </div>

      <div className="escalation-matrix">
        <h2>Excalation Matrix</h2>
        
        <div className="escalation-level">
          <h3>Level 1</h3>
          <p>
            For initial queries, call us at <strong>898 898 0606</strong> or email <strong>care@redcliffelabs.com</strong>.
            You'll receive a response within <strong>12 - 24 working hours</strong>.
          </p>
        </div>
        
        <div className="escalation-level">
          <h3>Level 2</h3>
          <p>
            If your query isn't resolved within 24 hours or you're unsatisfied, email 
            <strong> complaints@redcliffelabs.com</strong> with your booking ID. You'll receive 
            a response within <strong>12 - 24 working hours</strong>.
          </p>
        </div>
        
        <div className="escalation-level">
          <h3>Level 3</h3>
          <p>
            For further escalation, email <strong>servicehead@redcliffelabs.com</strong> with your 
            booking ID. You'll receive a response within <strong>12 hours</strong>.
          </p>
        </div>
      </div>

      <div className="app-section">
        <h2>Get Redcliffe Labs App Today</h2>
        <p>
          For the convenience of health management at your fingertips. Book health tests with home 
          sample collection, download reports, calculate BMI, and get complimentary value-added 
          benefits, including report consultation, health progress reports, and personalized diet charts.
        </p>
        <div className="download-buttons">
          <p>Download our app from</p>
          <div className="app-stores">
            <button className="app-store-button">Google Play</button>
            <button className="app-store-button">App Store</button>
          </div>
        </div>
      </div>
       {/* New Contact Form Section */}
       <div className="contact-form-section">
        <h2>Have us call you</h2>
        <form className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Guest" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              placeholder="9834826596"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <select className="query-dropdown">
              <option value="">Select a query</option>
              <option value="booking">Booking Related</option>
              <option value="report">Report Issues</option>
              <option value="payment">Payment Problems</option>
              <option value="other">Other Queries</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Submit Query
          </button>
        </form>
      </div>

    </div>
  );
};

export default Queries;