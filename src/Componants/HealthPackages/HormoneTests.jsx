import React, { useState } from 'react';
import './HormoneTests.css';

const hormoneTests = [
  { id: 1, title: "Thyroid Panel", price: 799, cutPrice: 1299, desc: "Thyroid health check", reportTime: "24 hrs" },
  { id: 2, title: "Testosterone Test", price: 599, cutPrice: 899, desc: "Male hormone level test", reportTime: "12 hrs" },
  { id: 3, title: "Estrogen Test", price: 699, cutPrice: 999, desc: "Female hormone analysis", reportTime: "18 hrs" },
  { id: 4, title: "Cortisol Test", price: 749, cutPrice: 1099, desc: "Stress hormone test", reportTime: "24 hrs" },
  { id: 5, title: "FSH Test", price: 650, cutPrice: 950, desc: "Fertility hormone", reportTime: "24 hrs" },
  { id: 6, title: "LH Test", price: 700, cutPrice: 1000, desc: "Luteinizing hormone", reportTime: "24 hrs" },
  { id: 7, title: "Prolactin Test", price: 800, cutPrice: 1200, desc: "Milk hormone levels", reportTime: "24 hrs" },
  { id: 8, title: "Progesterone Test", price: 850, cutPrice: 1250, desc: "Pregnancy hormone", reportTime: "24 hrs" },
  { id: 9, title: "DHEA-S Test", price: 750, cutPrice: 1100, desc: "Adrenal gland function", reportTime: "24 hrs" },
  { id: 10, title: "Insulin Test", price: 699, cutPrice: 999, desc: "Blood insulin levels", reportTime: "24 hrs" },
  { id: 11, title: "Growth Hormone Test", price: 899, cutPrice: 1299, desc: "Growth hormone levels", reportTime: "24 hrs" },
  { id: 12, title: "PTH Test", price: 850, cutPrice: 1200, desc: "Parathyroid hormone", reportTime: "24 hrs" },
  { id: 13, title: "TSH Test", price: 400, cutPrice: 700, desc: "Thyroid stimulating hormone", reportTime: "12 hrs" },
  { id: 14, title: "Free T3 Test", price: 450, cutPrice: 750, desc: "Triiodothyronine levels", reportTime: "12 hrs" },
  { id: 15, title: "Free T4 Test", price: 450, cutPrice: 750, desc: "Thyroxine levels", reportTime: "12 hrs" },
  { id: 16, title: "Androstenedione Test", price: 799, cutPrice: 1199, desc: "Androgen hormone check", reportTime: "24 hrs" },
  { id: 17, title: "Sex Hormone Binding Globulin (SHBG)", price: 799, cutPrice: 1199, desc: "Hormone transport protein", reportTime: "24 hrs" },
  { id: 18, title: "17-OH Progesterone", price: 850, cutPrice: 1300, desc: "Steroid hormone", reportTime: "24 hrs" },
  { id: 19, title: "Anti-Mullerian Hormone (AMH)", price: 1000, cutPrice: 1400, desc: "Ovarian reserve", reportTime: "24 hrs" },
  { id: 20, title: "Renin Test", price: 900, cutPrice: 1300, desc: "Blood pressure regulation", reportTime: "24 hrs" },
  { id: 21, title: "Aldosterone Test", price: 850, cutPrice: 1200, desc: "Sodium conservation", reportTime: "24 hrs" },
  { id: 22, title: "ACTH Test", price: 899, cutPrice: 1300, desc: "Adrenal gland hormone", reportTime: "24 hrs" },
  { id: 23, title: "Calcitonin Test", price: 950, cutPrice: 1350, desc: "Calcium regulation", reportTime: "24 hrs" },
];

const hormonePackages = [
  { id: 1, title: "Complete Hormone Package", price: 1999, cutPrice: 2999, desc: "All essential hormone tests", reportTime: "48 hrs" },
  { id: 2, title: "Women's Hormone Package", price: 1799, cutPrice: 2599, desc: "Women's health hormones", reportTime: "48 hrs" },
  { id: 3, title: "Men's Hormone Package", price: 1899, cutPrice: 2799, desc: "Men's health hormones", reportTime: "48 hrs" },
  { id: 4, title: "Thyroid & Adrenal Package", price: 1699, cutPrice: 2499, desc: "Thyroid and adrenal check", reportTime: "48 hrs" },
  { id: 5, title: "PCOS Profile", price: 1599, cutPrice: 2299, desc: "PCOS hormone profile", reportTime: "48 hrs" },
  { id: 6, title: "Menopause Panel", price: 1499, cutPrice: 2199, desc: "Menopause hormone panel", reportTime: "48 hrs" },
  { id: 7, title: "Fertility Panel", price: 1899, cutPrice: 2699, desc: "Fertility hormone tests", reportTime: "48 hrs" },
  { id: 8, title: "Stress Hormone Check", price: 1299, cutPrice: 1999, desc: "Cortisol & DHEA-S test", reportTime: "48 hrs" },
  { id: 9, title: "Thyroid Health Check", price: 999, cutPrice: 1499, desc: "Complete thyroid panel", reportTime: "48 hrs" },
  { id: 10, title: "Adrenal Function Package", price: 1599, cutPrice: 2299, desc: "Adrenal hormones", reportTime: "48 hrs" },
  { id: 11, title: "Androgen Panel", price: 1799, cutPrice: 2499, desc: "Male hormone panel", reportTime: "48 hrs" },
  { id: 12, title: "Ovarian Reserve Profile", price: 1699, cutPrice: 2399, desc: "AMH & related hormones", reportTime: "48 hrs" },
  { id: 13, title: "Complete Fertility Package", price: 1999, cutPrice: 2899, desc: "For men and women", reportTime: "48 hrs" },
  { id: 14, title: "Prolactin and Related Tests", price: 1299, cutPrice: 1899, desc: "Milk hormone levels", reportTime: "48 hrs" },
  { id: 15, title: "Pregnancy Hormone Package", price: 1499, cutPrice: 2099, desc: "hCG and progesterone", reportTime: "48 hrs" },
  { id: 16, title: "Metabolic Hormone Panel", price: 1899, cutPrice: 2799, desc: "Insulin, cortisol, thyroid", reportTime: "48 hrs" },
  { id: 17, title: "Growth Hormone Test Panel", price: 1599, cutPrice: 2299, desc: "Growth hormone and factors", reportTime: "48 hrs" },
  { id: 18, title: "Calcium Regulation Panel", price: 1499, cutPrice: 2099, desc: "PTH, Vitamin D, Calcitonin", reportTime: "48 hrs" },
  { id: 19, title: "Pituitary Function Tests", price: 1799, cutPrice: 2499, desc: "Pituitary hormone levels", reportTime: "48 hrs" },
  { id: 20, title: "Blood Pressure Hormone Panel", price: 1699, cutPrice: 2399, desc: "Renin & Aldosterone", reportTime: "48 hrs" },
];

const HormoneTests = () => {
  const [showMoreTests, setShowMoreTests] = useState(false);
  const [showMorePackages, setShowMorePackages] = useState(false);

  const visibleTests = showMoreTests ? hormoneTests : hormoneTests.slice(0, 6);
  const visiblePackages = showMorePackages ? hormonePackages : hormonePackages.slice(0, 6);

  return (
    <div className="hormone-tests">
      <h2 className="section-title">Hormone Tests</h2>
      <div className="tests-list">
        {visibleTests.map((test) => (
          <div className="test-card" key={test.id}>
            <h3>{test.title}</h3>
            <div className="price">
              <span className="discounted-price">₹{test.price}</span>
              <span className="original-price">₹{test.cutPrice}</span>
            </div>
            <p className="description">{test.desc}</p>
            <p className="reports-time">Reports: {test.reportTime}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      {!showMoreTests && (
        <button className="show-more-button" onClick={() => setShowMoreTests(true)}>
          Show More Tests
        </button>
      )}

      <h2 className="section-title">Hormone Test Packages</h2>
      <div className="tests-list">
        {visiblePackages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <h3>{pkg.title}</h3>
            <div className="price">
              <span className="discounted-price">₹{pkg.price}</span>
              <span className="original-price">₹{pkg.cutPrice}</span>
            </div>
            <p className="description">{pkg.desc}</p>
            <p className="reports-time">Reports: {pkg.reportTime}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      {!showMorePackages && (
        <button className="show-more-button" onClick={() => setShowMorePackages(true)}>
          Show More Packages
        </button>
      )}
    </div>
  );
};

export default HormoneTests;
