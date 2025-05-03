import React from 'react';
import './AboutUs.css';
import { 
  FaMicroscope, 
  FaFlask, 
  FaHeartbeat, 
  FaLaptopMedical, 
  FaUserShield, 
  FaUsers 
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* HERO SECTION */}
      <section className="aboutus-hero-section">
        <h1 className="aboutus-hero-title">
          We are a Pan-India Omnichannel Diagnostic Network
        </h1>
        <p className="aboutus-hero-subtitle">
          Giving India its Right to Quality Diagnostics
        </p>
      </section>

      {/* DIAGNOSTICS REVOLUTION SECTION */}
      <section className="aboutus-revolution-section">
        <h2>Creating a Diagnostics Revolution</h2>
        <p>
          From the start, our goal has been to empower people to take control of their health.
          Diagnostics shouldn’t be a privilege - it’s a lifeline, and everyone deserves it.
          Since 2018, we’ve touched over <strong>7 million lives</strong>, providing not just answers, but hope.
        </p>
        <p>
          For us, every test we conduct is a step towards saving lives, supporting families,
          and building a healthier India. This isn’t just our job—it’s our purpose:
          <em> to Give India its Right to Quality Diagnostics.</em>
        </p>
      </section>

      {/* HOW WE GOT STARTED SECTION */}
      <section className="aboutus-journey-section">
        <h2>How We Got Started?</h2>
        <p>
          In 2018, Redcliffe Labs set out with one clear mission: <strong>to make quality healthcare accessible to everyone.</strong>
        </p>
        <p>
          We saw the pain and struggle—families losing loved ones because they couldn’t get the right tests at the right time.
          Here’s a truth that’s hard to accept: <strong>2 out of 3 Indians could be saved with timely medical intervention.</strong>
        </p>
        <p>
          Yet, so many lives are lost every year—not because solutions don’t exist,
          but because quality diagnostics are too few, too costly, or too late.
          Even worse, the lack of awareness means many don’t even know they need help until it’s too late.
        </p>
        <p>
          For us, this isn’t just a statistic—it’s a tragedy.
          Every life lost is one too many, and we’ve made it our mission to close this gap,
          <em> one test at a time.</em>
        </p>
      </section>

      {/* GLUCOSE TO GENETICS SECTION */}
      <section className="aboutus-glucose-section">
        <h2>Glucose to Genetics</h2>
        <p>
          At Redcliffe Labs, we’ve built a comprehensive portfolio approach covering both routine and specialized tests,
          supported by advanced diagnostic labs across India. We cater to every diagnostic need, contributing to the well-being
          of millions of patients.
        </p>
        <div className="aboutus-glucose-icons">
          <div className="aboutus-feature-box">
            <span className="aboutus-icon">📱</span>
            <h3>Digital-first Approach</h3>
          </div>
          <div className="aboutus-feature-box">
            <span className="aboutus-icon">📄</span>
            <h3>Accurate Reports within 24 Hrs</h3>
          </div>
          <div className="aboutus-feature-box">
            <span className="aboutus-icon">🚚</span>
            <h3>On-demand 1-hour Home Collection</h3>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="aboutus-pillars-section">
        <div className="pillar-box">
          <FaHeartbeat className="aboutus-icon" />
          <h3>Affordability</h3>
          <p>Quality tests at prices accessible to everyone.</p>
        </div>
        <div className="pillar-box">
          <FaLaptopMedical className="aboutus-icon" />
          <h3>Accessibility</h3>
          <p>Doorstep sample collection ensures comfort and convenience.</p>
        </div>
        <div className="pillar-box">
          <FaMicroscope className="aboutus-icon" />
          <h3>Accuracy</h3>
          <p>Every test is conducted with precision and care.</p>
        </div>
        <div className="pillar-box">
          <FaUserShield className="aboutus-icon" />
          <h3>Awareness</h3>
          <p>Driving education on early health risk detection.</p>
        </div>
      </section>

      {/* IMPACT DIFFERENTIATORS SECTION */}
      <section className="aboutus-differentiators-section">
        <h2>Our Impact Differentiators</h2>
        <ul>
          <li>
            <FaFlask className="aboutus-icon" /> Technology Integration
          </li>
          <li>
            <FaUsers className="aboutus-icon" /> Accessible to All
          </li>
          <li>
            <FaLaptopMedical className="aboutus-icon" /> Customer Centric Interfaces
          </li>
        </ul>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="aboutus-values-section">
        <h2>Our Core Values</h2>
        <div className="aboutus-values-columns">
          <div className="values-column">
            <h3>CUSTOMER FIRST</h3>
            <ul>
              <li>Design for Customer</li>
              <li>Commit to Quality</li>
              <li>Innovate</li>
            </ul>
          </div>
          <div className="values-column">
            <h3>THINK LIKE AN OWNER</h3>
            <ul>
              <li>Be Result Oriented</li>
              <li>Take Accountability</li>
              <li>Be Resource Conscious</li>
            </ul>
          </div>
          <div className="values-column">
            <h3>BUILD A LASTING INSTITUTION</h3>
            <ul>
              <li>Think Bigger Picture</li>
              <li>Uphold Integrity</li>
              <li>Be Sustainable</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
