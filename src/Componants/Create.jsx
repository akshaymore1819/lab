import React, { useState, useEffect } from "react";
import "./Create.css";

const Create = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { title: "Get Upto 70% OFF", icon: "💰" },
    { title: "Added Free Tests", icon: "🎁" },
    { title: "Special Offers", icon: "🔥" }
  ];

  return (
    <div className={`create-package-container ${isVisible ? "visible" : ""}`}>
      <div className="header">
        <h1 className="slide-in">Create your own package</h1>
        <p className="fade-in">Add 2 or more tests to create your own package</p>
      </div>

      <div className="search-section">
        <div className="search-box scale-in">
          <input 
            type="text" 
            placeholder="Search Tests and Add" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="pulse">Search</button>
        </div>
      </div>

      <div className="selected-tests bounce-in">
        <p>No Test added</p>
        <div className="drop-zone"></div>
      </div>

      <div className="benefits-section">
        <h2 className="slide-in">Why Choose Packages?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card pop-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Create;