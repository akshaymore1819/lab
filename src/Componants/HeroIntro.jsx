import React from "react";
import "./HeroIntro.css";
import img1 from "../assets/hero2.jpg"
import { Link } from 'react-router-dom';



const HeroIntro = () => {
  return (
    <div className="assessment-container">
      <div className="assessment-box">
        <img
          src={img1}
          alt="Wellness Assessment"
          className="assessment-image"
        />
        <div className="assessment-content">
          <h2>Hello Guest! Welcome to Redcliffe Labs Wellness Assessment!</h2>
          <p>
            Answer few quick questions and we will recommend the best suited
            package.
          </p>
          <div className="assessment-timer">
            <i className="fa-regular fa-clock"></i>
            <span>Takes 1 minute 30 seconds</span>
          </div>
          <Link to="/savemember">
  <button className="start-button">Start</button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
