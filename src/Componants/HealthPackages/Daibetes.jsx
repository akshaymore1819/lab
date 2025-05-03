import React, { useState } from "react";
import "./Daibetes.css";

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
  },
  {
    title: "Fasting Blood Sugar (FBS) Test",
    price: "₹70",
    original: "₹150",
    desc: "Measures blood glucose after an overnight fast to diagnose diabetes or prediabetes.",
    reportsIn: "24 hrs",
    tests: 1,
  },
  {
    title: "HbA1c (Glycated Hemoglobin) Test",
    price: "₹350",
    original: "₹800",
    desc: "Provides average blood glucose levels over the past 2-3 months.",
    reportsIn: "48 hrs",
    tests: 1,
  },
  {
    title: "Random Blood Sugar (RBS) Test",
    price: "₹100",
    original: "₹200",
    desc: "Measures blood sugar at any time of day to check for diabetes.",
    reportsIn: "24 hrs",
    tests: 1,
  },
  {
    title: "Insulin Fasting Test",
    price: "₹800",
    original: "₹1200",
    desc: "Measures fasting insulin levels to detect insulin resistance or diabetes.",
    reportsIn: "72 hrs",
    tests: 1,
  },
  {
    title: "Oral Glucose Tolerance Test (OGTT)",
    price: "₹450",
    original: "₹1000",
    desc: "Assesses body's response to sugar to diagnose gestational and type 2 diabetes.",
    reportsIn: "3 days",
    tests: 1,
  },
  {
    title: "Beta-Hydroxybutyrate Test",
    price: "₹990",
    original: "₹2200",
    desc: "Checks for ketones in the blood during diabetic ketoacidosis.",
    reportsIn: "48 hrs",
    tests: 1,
  },
  {
    title: "Islet Cell Antibody Test",
    price: "₹5600",
    original: "₹10200",
    desc: "Detects autoimmune antibodies that attack insulin-producing cells.",
    reportsIn: "5 days",
    tests: 1,
  },
  {
    title: "Microalbumin Creatinine Ratio, Urine",
    price: "₹399",
    original: "₹850",
    desc: "Detects early kidney damage caused by diabetes.",
    reportsIn: "48 hrs",
    tests: 1,
  },
  {
    title: "Serum Ketone Test",
    price: "₹250",
    original: "₹600",
    desc: "Helps diagnose diabetic ketoacidosis by detecting ketones in blood.",
    reportsIn: "24 hrs",
    tests: 1,
  },
  {
    title: "Lipid Profile Test",
    price: "₹299",
    original: "₹750",
    desc: "Assesses cholesterol and triglyceride levels in diabetics.",
    reportsIn: "24 hrs",
    tests: 1,
  }
  
];

const diabetesPackages = [
    {
      title: "Diabetes Profile- Advance with Free HsCRP",
      price: "₹1499",
      original: "₹2530",
      desc: "Diagnoses diabetes and checks inflammation markers with HsCRP.",
      reportsIn: "24 hrs",
      tests: 91,
    },
    {
      title: "Diabetes Profile- Comprehensive with Free HsCRP",
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
    },
    {
      title: "Fit India Full Body Checkup with Free HbA1c",
      price: "₹1099",
      original: "₹5233",
      desc: "Includes diabetes, thyroid, lipid, liver, kidney, infection markers.",
      reportsIn: "24 hrs",
      tests: 89,
    },
    {
      title: "Basic Diabetes Screening Package",
      price: "₹799",
      original: "₹1499",
      desc: "Covers Glucose Fasting, HbA1c & Insulin for initial diabetes check.",
      reportsIn: "24 hrs",
      tests: 5,
    },
    // ----- ADDITIONAL 8 CARDS BELOW -----
    {
      title: "Diabetes Care Package - Essential",
      price: "₹899",
      original: "₹1800",
      desc: "Basic diabetes check with Glucose PP, HbA1c and fasting sugar.",
      reportsIn: "24 hrs",
      tests: 4,
    },
    {
      title: "Comprehensive Sugar Profile",
      price: "₹1599",
      original: "₹3499",
      desc: "Checks all parameters for sugar, insulin resistance, and HOMA-IR.",
      reportsIn: "48 hrs",
      tests: 10,
    },
    {
      title: "HbA1c + Fasting Glucose Combo",
      price: "₹499",
      original: "₹900",
      desc: "Ideal for monitoring long-term and short-term sugar levels.",
      reportsIn: "12 hrs",
      tests: 2,
    },
    {
      title: "Diabetic Kidney Health Package",
      price: "₹1399",
      original: "₹2600",
      desc: "Assess diabetic nephropathy with microalbumin, creatinine, and more.",
      reportsIn: "24 hrs",
      tests: 8,
    },
    {
      title: "Glucometabolic Risk Assessment",
      price: "₹1899",
      original: "₹3900",
      desc: "Evaluate metabolism, insulin levels, glucose curve & lipid profile.",
      reportsIn: "72 hrs",
      tests: 12,
    },
    {
      title: "Complete Diabetes Panel + Thyroid",
      price: "₹1699",
      original: "₹3200",
      desc: "Covers sugar, insulin, HbA1c along with T3, T4, TSH for hormonal health.",
      reportsIn: "48 hrs",
      tests: 11,
    },
    {
      title: "Quick Diabetes Tracker Package",
      price: "₹699",
      original: "₹1300",
      desc: "Includes Glucose fasting, HbA1c and CBC for overall sugar check.",
      reportsIn: "24 hrs",
      tests: 3,
    },
    {
      title: "Advanced Diabetes Monitoring",
      price: "₹1999",
      original: "₹3899",
      desc: "Monitor sugar levels with fasting, PP, insulin, HbA1c and inflammatory markers.",
      reportsIn: "2 days",
      tests: 9,
    },
    // ----- ORIGINAL REMAINING CARDS -----
    {
      title: "Advance Plus Full Body Checkup with Free HsCRP ",
      price: "₹799",
      original: "₹1499",
      desc: "CBC, ESR, BSF, HbA1c, Lipid Profile, LFT, KFT, Iron Studies, Rheumatoid Fac....More",
      reportsIn: "24 hrs",
      tests: 5,
    },
    {
      title: "Basic Diabetes Screening Package",
      price: "₹799",
      original: "₹1499",
      desc: "Covers Glucose Fasting, HbA1c & Insulin for initial diabetes check.",
      reportsIn: "24 hrs",
      tests: 5,
    },
    {
      title: "Basic Diabetes Screening Package",
      price: "₹799",
      original: "₹1499",
      desc: "Covers Glucose Fasting, HbA1c & Insulin for initial diabetes check.",
      reportsIn: "24 hrs",
      tests: 5,
    },
  ];
  

  const Daibetes = () => {
    const [showMoreTests, setShowMoreTests] = useState(false);
    const [showMorePackages, setShowMorePackages] = useState(false);
  
    const toggleShowMoreTests = () => setShowMoreTests((prev) => !prev);
    const toggleShowMorePackages = () => setShowMorePackages((prev) => !prev);
  
    return (
      <div className="diabetes-container">
        <section className="diabetes-section">
          <h1 className="section-title">🩺 Diabetes Tests</h1>
          <div className="cards-wrapper">
            {diabetesTests.slice(0, showMoreTests ? diabetesTests.length : 6).map((test, i) => (
              <div className="test-card" key={i}>
                <h3>{test.title}</h3>
                <p className="desc">{test.desc}</p>
                <div className="price-info">
                  <span className="price">{test.price}</span>
                  <span className="original">{test.original}</span>
                </div>
                <div className="info">
                  Reports in {test.reportsIn} | {test.tests} {test.tests > 1 ? "Tests" : "Test"}
                </div>
                <button>Add</button>
              </div>
            ))}
          </div>
          <button className="show-more-btn" onClick={toggleShowMoreTests}>
            {showMoreTests ? "Show Less" : "Show More"}
          </button>
        </section>
  

      <section className="diabetes-section">
        <h2 className="section-title">📦 Diabetes Packages</h2>
        <div className="cards-wrapper">
          {diabetesPackages.slice(0, showMorePackages ? diabetesPackages.length : 3).map((pkg, i) => (
            <div className="test-card" key={i}>
              <h3>{pkg.title}</h3>
              <p className="desc">{pkg.desc}</p>
              <div className="price-info">
                <span className="price">{pkg.price}</span>
                <span className="original">{pkg.original}</span>
              </div>
              <div className="info">
                Reports in {pkg.reportsIn} | {pkg.tests} Tests
              </div>
              <button>Add</button>
            </div>
          ))}
        </div>
        <button className="show-more-btn" onClick={toggleShowMorePackages}>
          {showMorePackages ? "Show Less" : "Show More"}
        </button>
      </section>
    </div>
  );
};

export default Daibetes;
