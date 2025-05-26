import React, { useState } from "react";
import "./Diabetes.css";

const diabetesTests = [
  {
    title: "Glucose Fasting Test",
    price: "₹99",
    original: "₹160",
    desc: "Measures fasting blood sugar levels to detect prediabetes or diabetes.",
    reportsIn: "18 hrs",
    tests: 1,
  },
  {
    title: "HBA1C Test",
    price: "₹299",
    original: "₹440",
    desc: "Monitors average blood sugar levels over the past 2–3 months.",
    reportsIn: "18 hrs",
    tests: 2,
  },
  {
    title: "Glucose Random Test",
    price: "₹99",
    original: "₹160",
    desc: "Screens and monitors diabetes at random times of the day.",
    reportsIn: "18 hrs",
    tests: 1,
  },
  {
    title: "Glucose PP (Post Prandial) Test",
    price: "₹99",
    original: "₹180",
    desc: "Checks blood sugar after meals to evaluate glucose tolerance.",
    reportsIn: "18 hrs",
    tests: 1,
  },
  {
    title: "Fasting + PP Glucose Combo",
    price: "₹180",
    original: "₹340",
    desc: "Combo of fasting and post-meal glucose tests for full glucose picture.",
    reportsIn: "24 hrs",
    tests: 2,
  },
  {
    title: "Insulin Fasting Test",
    price: "₹399",
    original: "₹700",
    desc: "Detects insulin resistance and monitors metabolic health.",
    reportsIn: "24 hrs",
    tests: 1,
  }
];

const diabetesPackages = [
  {
    title: "Diabetes Profile - Advance with Free HsCRP",
    price: "₹1499",
    original: "₹2530",
    desc: "Diagnoses diabetes and checks inflammation markers with HsCRP.",
    reportsIn: "24 hrs",
    tests: 91,
  },
  {
    title: "Diabetes Profile - Comprehensive with Free HsCRP",
    price: "₹2199",
    original: "₹4220",
    desc: "Full panel for diabetes and inflammatory health.",
    reportsIn: "72 hrs",
    tests: 95,
  },
  {
    title: "Advance Glucometabolic Profile",
    price: "₹1999",
    original: "₹7599",
    desc: "Advanced tests like HOMA-IR, Gad-65 for deeper metabolic insight.",
    reportsIn: "6 days",
    tests: 7,
  }
];

const Diabetes = () => {
  const [showMoreTests, setShowMoreTests] = useState(false);
  const [showMorePackages, setShowMorePackages] = useState(false);

  return (
    <div className="diabetes-main-container">
      <section className="diabetes-section-container">
        <h1 className="diabetes-section-heading">🩺 Diabetes Tests</h1>
        <div className="diabetes-cards-grid">
          {(showMoreTests ? diabetesTests : diabetesTests.slice(0, 3)).map((test, index) => (
            <div className="diabetes-test-card" key={index}>
              <h3 className="diabetes-test-title">{test.title}</h3>
              <p className="diabetes-test-desc">{test.desc}</p>
              <div className="diabetes-test-pricing">
                <span className="diabetes-test-price">{test.price}</span>
                <span className="diabetes-test-original">{test.original}</span>
              </div>
              <div className="diabetes-test-meta">
                Reports in {test.reportsIn} | {test.tests} {test.tests > 1 ? "Tests" : "Test"}
              </div>
              <button className="diabetes-add-btn">Add</button>
            </div>
          ))}
        </div>
        <div className="diabetes-show-more-wrap">
          <button onClick={() => setShowMoreTests(!showMoreTests)} className="diabetes-show-more-btn">
            {showMoreTests ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>

      <section className="diabetes-section-container">
        <h2 className="diabetes-section-heading">📦 Diabetes Packages</h2>
        <div className="diabetes-cards-grid">
          {(showMorePackages ? diabetesPackages : diabetesPackages.slice(0, 2)).map((pkg, index) => (
            <div className="diabetes-test-card" key={index}>
              <h3 className="diabetes-test-title">{pkg.title}</h3>
              <p className="diabetes-test-desc">{pkg.desc}</p>
              <div className="diabetes-test-pricing">
                <span className="diabetes-test-price">{pkg.price}</span>
                <span className="diabetes-test-original">{pkg.original}</span>
              </div>
              <div className="diabetes-test-meta">
                Reports in {pkg.reportsIn} | {pkg.tests} Tests
              </div>
              <button className="diabetes-add-btn">Add</button>
            </div>
          ))}
        </div>
        <div className="diabetes-show-more-wrap">
          <button onClick={() => setShowMorePackages(!showMorePackages)} className="diabetes-show-more-btn">
            {showMorePackages ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Diabetes;
