import React from "react";
import "./TestDetails.css";
import {
  FaCheckCircle,
  FaRegClock,
  FaVial,
  FaUtensils,
  FaVenus,
  FaBirthdayCake,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaFlask,
  FaCity,
  FaClinicMedical,
  FaHospitalSymbol,
  FaUserNurse,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import hospitalreport from '../assets/hospitalreport.jpg'

const TestDetails = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const originalPrice = 5000;
  const currentPrice = 1750;
  const discountPercentage = Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100
  );
  const savings = originalPrice - currentPrice;
  const [showFullReport, setShowFullReport] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleBookNow = () => {
    navigate("/booking");
  };

  const reportData = {
    title: "Complete Blood Count (CBC) Report",
    imageUrl:hospitalreport,
    sampleText:
      "This is a sample preview of your lab report. The full report contains detailed analysis of your blood components including RBC, WBC, platelets, and hemoglobin levels.",
    description:
      "A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders. Click 'View Full Report' to see all parameters and their reference ranges.",
    fullReport: {
      sections: [
        {
          title: "Red Blood Cells",
          tests: [
            {
              parameter: "Hemoglobin",
              value: "14.2 g/dL",
              range: "13.5-17.5",
              status: "normal",
            },
            {
              parameter: "RBC Count",
              value: "4.7 × 10⁶/μL",
              range: "4.5-5.9",
              status: "normal",
            },
            {
              parameter: "Hematocrit",
              value: "42%",
              range: "40-50%",
              status: "normal",
            },
          ],
        },
        {
          title: "White Blood Cells",
          tests: [
            {
              parameter: "WBC Count",
              value: "6.5 × 10³/μL",
              range: "4.5-11.0",
              status: "normal",
            },
            {
              parameter: "Neutrophils",
              value: "55%",
              range: "40-70%",
              status: "normal",
            },
            {
              parameter: "Lymphocytes",
              value: "35%",
              range: "20-40%",
              status: "normal",
            },
          ],
        },
        {
          title: "Platelets",
          tests: [
            {
              parameter: "Platelet Count",
              value: "250 × 10³/μL",
              range: "150-450",
              status: "normal",
            },
          ],
        },
      ],
      notes:
        "All values are within normal ranges. No immediate medical attention is required based on these results.",
    },
  };

  const statsData = [
    { icon: <FaUsers />, label: "Customers Served", value: "70,00,000+" },
    { icon: <FaFlask />, label: "Tests Processed Everyday", value: "70,000+" },
    { icon: <FaCity />, label: "Cities", value: "220+" },
    { icon: <FaClinicMedical />, label: "Collection Centres", value: "2000+" },
    {
      icon: <FaHospitalSymbol />,
      label: "World Class In-house Labs",
      value: "80+",
    },
    { icon: <FaUserNurse />, label: "Home Collection Experts", value: "1000+" },
  ];

  const testParameters = [
    {
      name: "Apolipoprotein A1 (Apo A) (1)",
      details: ["Apolipo-A1"],
    },
    {
      name: "Apolipoprotein B/A1 Ratio (1)",
      details: ["Apolipoprotein B/A1 Ratio"],
    },
    {
      name: "Apolipoprotein B (Apo B) (1)",
      details: ["Apolipo-B"],
    },
    {
      name: "CA 125 (Ovarian Cancer Marker) (1)",
      details: ["CA125 (Ovarian CANCER MARKER)"],
    },
    {
      name: "Complete Blood Count (CBC) (26)",
      details: [
        "Absolute Basophils Count, Blood",
        "Absolute Eosinophil Count, Blood",
        "Absolute Lymphocyte Count, Blood",
        "Absolute Monocyte Count, Blood",
        "Absolute Neutrophil Count, Blood",
        "Basophils",
        "Eosinophils",
        "Hemoglobin Hb",
        "Lymphocytes",
        "MCH",
        "MCHC",
        "MCV",
        "MENTZER INDEX9MCV/RCC",
        "Monocytes",
        "MPV Mean Platelet Volume",
        "Neutrophils",
        "PCT",
        "PCV Haematocrit",
        "PDW Platelet Distribution Width",
        "Platelet Count Thrombocyte count",
        "P - LCC",
        "P - LCR",
        "RBC Count",
        "RDW-CV",
        "RDW (Red Cell Distribution Width)",
        "WBC-Total Counts Leucocytes",
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="test">
      <div className="commontest">
        <div className="test-card">
          <p className="people-booked">1000+ people booked this recently</p>
          <h3 className="card-title">
            Master Full Body Checkup Package - Women in Delhi
          </h3>
          <p className="card-desc">
            The package assesses parameters like TSH, LFT, KFT, CBC, lipid
            profile, Vit D & B12, Iron, etc.
          </p>
          <div className="card-info-grid">
            <div className="info-item">
              <FaCheckCircle className="info-icon" />
              <span>107 Parameters</span>
            </div>
            <div className="info-item">
              <FaRegClock className="info-icon" />
              <div>
                <span className="reports-labeltest">Reports in</span>
                <span className="terms-tooltiptest">
                  (T&C)
                  <span className="tooltip-texttest">
                    <strong>Terms & Conditions</strong>
                    <br />
                    Report time varies with time of sample collection.
                  </span>
                </span>
              </div>
            </div>
            <div className="info-item">
              <FaVial className="info-icon" />
              <span>Sample: Urine, Blood</span>
            </div>
            <div className="info-item">
              <FaUtensils className="info-icon" />
              <span>Fasting: 10-12 hours</span>
            </div>
            <div className="info-item">
              <FaVenus className="info-icon" />
              <span>Recommended: Female</span>
            </div>
            <div className="info-item">
              <FaBirthdayCake className="info-icon" />
              <span>Age Group: 5+ Years</span>
            </div>
          </div>
        </div>

        <div className="add-card">
          <div className="price-sectionadd">
            <div className="current-priceadd">₹{currentPrice}</div>
            <div className="original-priceadd">₹{originalPrice}</div>
            <div className="discount-badgeadd">{discountPercentage}% OFF</div>
          </div>

          <div className="delivery-infoadd">
            <span className="delivery-iconadd">🚚</span>
            <span>Home Delivery Available</span>
          </div>

          <div className="delivery-infoadd">
            <span className="sample-iconadd">🏠</span>
            <span>Home Sample Collection Available</span>
          </div>

          <div className="savingsadd">You Save ₹{savings}</div>

          <div className="action-buttonsadd">
            {!isAddedToCart ? (
              <button className="add-to-cartadd" onClick={handleAddToCart}>
                Add to Cart <span>+</span>
              </button>
            ) : (
              <button className="view-cartadd" onClick={handleViewCart}>
                🛒 View Cart
              </button>
            )}
            <button className="book-nowadd" onClick={handleBookNow}>
              Book Now ₹ {currentPrice}
            </button>
          </div>

          {showCart && (
            <div className="cart-modaladd">
              <div className="cart-contentadd">
                <h2>Your Cart</h2>
                <div className="cart-itemadd">
                  <div>
                    <h3>Health Package</h3>
                    <p>₹{currentPrice}</p>
                  </div>
                  <div>
                    <button>Remove</button>
                  </div>
                </div>
                <button className="close-cartadd" onClick={handleCloseCart}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="report-card-add">
        <div className="report-preview-add">
          <h2>{reportData.title}</h2>
          <img
            src={reportData.imageUrl}
            alt="Report Preview"
            className="report-image-add"
          />
          <p className="sample-report-add">{reportData.sampleText}</p>
          <p className="report-description-add">{reportData.description}</p>
        </div>

        <button
          className="view-report-btn-add"
          onClick={() => setShowFullReport(true)}
        >
          View Full Report
        </button>

        {showFullReport && (
          <div className="report-modal-add">
            <div className="report-content-add">
              <button
                className="close-report-btn-add"
                onClick={() => setShowFullReport(false)}
              >
                ×
              </button>

              <h2 className="full-report-title-add">{reportData.title}</h2>

              <div className="full-report-content-add">
                {reportData.fullReport.sections.map((section, index) => (
                  <div key={index} className="report-section-add">
                    <h3 className="section-title-add">{section.title}</h3>
                    <table className="report-table-add">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Your Value</th>
                          <th>Reference Range</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.tests.map((test, testIndex) => (
                          <tr key={testIndex}>
                            <td>{test.parameter}</td>
                            <td>{test.value}</td>
                            <td>{test.range}</td>
                            <td
                              className={
                                test.status === "normal"
                                  ? "normal-value-add"
                                  : "abnormal-value-add"
                              }
                            >
                              {test.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

                <div className="report-notes-add">
                  <h3 className="section-title-add">Notes</h3>
                  <p>{reportData.fullReport.notes}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="stats-container">
        <h2 className="stats-heading">
          Redcliffe Labs - Healthy India ki Trusted Lab
        </h2>
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div className="stats-card" key={index}>
              <div className="stats-icon">{item.icon}</div>
              <div className="stats-value">{item.value}</div>
              <div className="stats-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="parameters-container">
        <h2 className="parameters-header">Included Tests</h2>
        <p className="parameters-subheader">
          Package includes following parameters
        </p>

        <div className="parameters-list">
          {testParameters.map((test, index) => (
            <div key={index} className="parameter-item">
              <div
                className="parameter-header"
                onClick={() => toggleDropdown(index)}
              >
                <span>{test.name}</span>
                {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {openDropdown === index && (
                <ul className="parameter-details">
                  {test.details.map((detail, i) => (
                    <li key={i} className="detail-item">
                      <span className="bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
