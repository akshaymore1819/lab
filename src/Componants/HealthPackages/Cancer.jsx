import React, { useState } from 'react';
import './Cancer.css';

const Cancer = () => {
  const [showMore, setShowMore] = useState(false);

  const tests = [
    { name: 'PSA Test', price: '₹800', originalPrice: '₹1500', description: 'This looks for prostate-specific antigens (PSA) in the blood to help diagnose...', reportTime: '72 hrs' },
    { name: 'Medium Tissue Biopsy Test Histopathology', price: '₹900', originalPrice: '₹2200', description: 'The test diagnoses cellular and structural abnormalities, to diagnose various cancers...', reportTime: '6 days' },
    { name: 'Large Tissue Biopsy Test Histopathology', price: '₹1500', originalPrice: '₹3000', description: 'The test analyses large tissue samples for cellular and structural abnormalities...', reportTime: '9 days' },
    { name: 'CA 125 Test', price: '₹1300', originalPrice: '₹2400', description: 'The test helps monitor ovarian cancer treatment response & check if the cancer is progressing...', reportTime: '72 hrs' },
    { name: 'Vanillylmandelic Acid (VMA), 24 Hrs Urine Test', price: '₹3800', originalPrice: '₹9625', description: 'This test measures VMA levels in urine to diagnose neuroblastoma tumor...', reportTime: '11 days' },
    { name: 'Prostate Specific Antigen (PSA) Free Test', price: '₹850', originalPrice: '₹1700', description: 'This measure PSA levels, aids detect prostate cancer & monitor ongoing treatment...', reportTime: '72 hrs' },
    { name: 'CA 19.9 Test', price: '₹1500', originalPrice: '₹2970', description: 'The test is used to diagnose the level of Cancer antigen 19-9 (CA 19-9) causing cancer...', reportTime: '72 hrs' },
    { name: 'CA 15.3 Test', price: '₹1500', originalPrice: '₹1800', description: 'This tumor marker test monitors metastatic breast cancer and its response...', reportTime: '72 hrs' },
    { name: 'Carcinoembryonic Antigen (CEA) Test', price: '₹740', originalPrice: '₹1340', description: 'This measures CEA in the blood, detects cancer & checks if the ongoing treatment is working...', reportTime: '72 hrs' },
    { name: 'PAP (Papanicolaou) Smear Test', price: '₹500', originalPrice: '₹1100', description: 'The test examines cervical cells for abnormalities to diagnose signs of cervical cancer...', reportTime: '3 days' },
    { name: 'Tumor Marker Alpha Fetoprotein (AFP)', price: '₹900', originalPrice: '₹1600', description: 'AFP (Alpha-Fetoprotein) tumor marker test is used to help diagnose and monitor liver cancer...', reportTime: '72 hrs' },
    { name: 'HCG Tumor Marker (Cancer) Test', price: '₹650', originalPrice: '₹1300', description: 'The test measures HCG levels & serves as a tumor marker for ovarian & testicular cancer...', reportTime: '72 hrs' },
    { name: 'Histopathology: Extra Large Tissue Biopsy Test', price: '₹2500', originalPrice: '₹4000', description: 'The test examines large tissue samples to identify abnormalities and diagnose cancers...', reportTime: '10 days' },
    { name: 'Protein Electrophoresis 24 Hr Urine Test', price: '₹4200', originalPrice: '₹5500', description: 'The test identifies protein types in urine to diagnose kidney functions and cancer...', reportTime: '12 days' },
    { name: 'Fine Needle Aspiration Cytology (FNAC) Test', price: '₹800', originalPrice: '₹1400', description: 'The test extracts cells from a lump or mass to evaluate breast cancer, non-cancerous tumors...', reportTime: '3 days' },
    { name: 'CEA Carcino Embryonic Antigen Body Fluid Test', price: '₹1000', originalPrice: '₹2500', description: 'The test measures CEA levels in various bodily fluids to diagnose certain cancers...', reportTime: '72 hrs' },
    { name: 'Gastrin Test', price: '₹1300', originalPrice: '₹2640', description: 'The gastrin test monitors the gastrin hormone in the blood, which is required for diagnosing gastric cancer...', reportTime: '3 days' },
    { name: 'Estrogen Receptor (ER) Test Immunohistochemistry', price: '₹1600', originalPrice: '₹2199', description: 'The test detects the presence of estrogen receptors to assess the status of breast cancer...', reportTime: '6 days' },
    { name: 'Final Diagnosis Panel By IHC', price: '₹8600', originalPrice: '₹12000', description: 'A Final Diagnosis Panel by Immunohistochemistry (IHC) is a diagnostic test for various cancers...', reportTime: '11 days' }
  ];

  const packages = [
    { name: 'Complete Cancer Package', price: '₹5000', description: 'A comprehensive package covering all major cancer tests for early diagnosis and treatment monitoring.' },
    { name: 'Early Detection Cancer Package', price: '₹6500', description: 'A specialized package focusing on tests for early detection of cancer in high-risk individuals.' },
    { name: 'Advanced Cancer Screening Package', price: '₹12000', description: 'A thorough screening package that includes a variety of tests for multiple types of cancer.' }
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="cancer-tests">
      <h1>Cancer Tests & Packages</h1>

      {/* Cancer Test Section */}
      <section className="cancer-tests-section">
        <h2>Cancer Tests</h2>
        <div className="test-cards-container">
          {tests.slice(0, showMore ? tests.length : 6).map((test, index) => (
            <div className="test-card" key={index}>
              <h3>{test.name}</h3>
              <div className="test-price">
                <span className="price">₹{test.price}</span>
                <span className="original-price">₹{test.originalPrice}</span>
              </div>
              <p>{test.description}</p>
              <div className="test-footer">
                <span className="report-time">Reports in {test.reportTime}</span>
                <button className="action-btn">Add</button>
              </div>
            </div>
          ))}
        </div>
        {!showMore && (
          <button className="show-more-btn" onClick={toggleShowMore}>Show More</button>
        )}
      </section>

      {/* Cancer Packages Section */}
      <section className="cancer-packages-section">
        <h2>Cancer Packages</h2>
        <div className="package-cards-container">
          {packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.name}</h3>
              <div className="package-price">
                <span className="price">₹{pkg.price}</span>
              </div>
              <p>{pkg.description}</p>
              <button className="action-btn">Get Info</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cancer;
