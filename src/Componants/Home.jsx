import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Home2 from "./Home2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Lucknow",
    "Indore",
    "Bhopal",
    "Patna",
    "Nagpur",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocationDropdown = () =>
    setIsLocationDropdownOpen(!isLocationDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".menu-container") &&
        !event.target.closest(".location-container")
      ) {
        setIsMenuOpen(false);
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const healthPackages = [
    {
      id: 1,
      title:
        "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      time: "Reports in 15 hours | Parameters 92",
      tests: [
        "Heart",
        "Diabetes (HbAlc)",
        "Lipid",
        "Liver",
        "Kidney",
        "Infection",
        "Thyroid",
      ],
      price: "₹1599",
      discount: "78% off",
      originalPrice: "₹7644",
      limitedPeriod: "for a limited period",
    },
    {
      id: 2,
      title: "Fit India Full Body Checkup with Free HbA1c",
      time: "Reports in 15 hours | Parameters 89",
      tests: [
        "Diabetes (HbAlc)",
        "Lipid",
        "Liver",
        "Kidney",
        "Infection",
        "Thyroid",
      ],
      price: "₹1099",
      discount: "78% off",
      originalPrice: "₹5099",
      limitedPeriod: "for a limited period",
    },
    {
      id: 3,
      title: "Senior Citizen Full Body Checkup - Female (Advance)",
      time: "Reports in 15 hours | Parameters 99",
      tests: [
        "CBC",
        "Blood Sugar",
        "Lipid Profile",
        "Liver Function",
        "Kidney Function",
      ],
      price: "₹9970",
      discount: "78% off",
      originalPrice: "₹31200",
      limitedPeriod: "for a limited period",
    },
  ];

  const womensPackages = [
    {
      id: 1,
      title: "Stay Fit Plus Full Body Checkup With Free RA Factor - Female",
      time: "Reports in 15 hours | Parameters 100",
      tests: [
        "Heart",
        "Diabetes (HbAlc)",
        "Liver",
        "Kidney",
        "Infection",
        "Thyroid",
        "Iron",
      ],
      price: "₹8768",
      originalPrice: "₹31200",
    },
    {
      id: 2,
      title: "Female Wellness Package - Complete",
      time: "Reports in 15 hours | Parameters 85",
      tests: ["Hormones", "Thyroid", "Vitamin D", "Iron Studies", "CBC"],
      price: "₹5999",
      originalPrice: "₹12500",
    },
    {
      id: 3,
      title: "Master Full Body Checkup Package-women",
      time: "Reports in 48 hours | Parameters 107",
      tests:
        "The package assesses parameters like TSH, LFT, KFT, CBC, lipid profile, Vit D & B12...",
      price: "₹4499",
      originalPrice: "₹13000",
    },
  ];

  const handleTestClick = (testName) => {
    navigate(`/test-details/${encodeURIComponent(testName)}`);
  };

  const packages = [
    { name: "Full Body Checkup", icon: "🩺", route: "/fullbody" },
    { name: "Diabetes Profile", icon: "🩸" },
    { name: "Heart Health", icon: "❤️", route: "/heart" },
    { name: "Fever", icon: "🤒", route: "/fever" },
    { name: "Vitamin Support", icon: "💊", route: "/vitamin" },
    { name: "Thyroid Panel", icon: "🦋" },
    { name: "Cancer Screening", icon: "🎗️", route: "/cancer" },
    { name: "Lifestyle", icon: "🏃‍♂️", route: "/lifestyle" },
    { name: "Pregnancy", icon: "🤰", route: "/pregnancy" },
    { name: "Fertility", icon: "🧬", route: "/fertility" },
    { name: "Allergy", icon: "🤧", route: "/allergy" },
    { name: "STD", icon: "🛡️", route: "/std" },
    { name: "Combo", icon: "🎯", route: "/combo" },
    { name: "Arthritis", icon: "🦴", route: "/arthritis" },
    { name: "Anemia", icon: "🩸", route: "/anemia" },
    { name: "Antenatal", icon: "🤰", route: "/antental" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPackageSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(
        ".fade-in, .slide-in, .pop-in"
      );
      elements.forEach((el) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      });
    };
    animateElements();

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const animatedElements = document.querySelectorAll(".scroll-animate");
      animatedElements.forEach((element) => {
        if (scrollPosition > element.offsetTop + 100) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="redcliffe-app">
      {/* Hero Section */}
      <section className="hero slide-in">
        <div className="hero-content scroll-animate">
          <h1>Looking for a test?</h1>
          <div className="hero-actions">
            <button className="search-btn pulse">
              <span className="search-icon">🔍</span> Search Tests
            </button>
            <button className="upload-btn hover-grow">
              Upload Prescription
            </button>
            <button className="book-btn pulse hover-grow">Book a Test</button>
          </div>
        </div>
      </section>

      {/* Scrollable Health Packages */}
      <section className="scroll-packages-section">
        <div className="scroll-packages-section-heading">
          <h2 className="section-title">Explore Health Packages</h2>
        </div>
        <div className="scroll-packages-wrapper">
          {packages.map((pkg, index) =>
            pkg.route ? (
              <Link
                to={pkg.route}
                key={index}
                className="scroll-package-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="scroll-package-card">
                  <div className="icon">{pkg.icon}</div>
                  <div className="name">{pkg.name}</div>
                </div>
              </Link>
            ) : (
              <div className="scroll-package-card" key={index}>
                <div className="icon">{pkg.icon}</div>
                <div className="name">{pkg.name}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Popular Health Packages */}
      <section className="health-packages">
        <div className="section-header fade-in">
          <h2>Popular Health Checkup Packages</h2>
          <h3>Top Health Packages</h3>
        </div>
        <div className="packages-grid">
          {healthPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`package-card pop-in delay-${index} hover-grow`}
            >
              <h4>{pkg.title}</h4>
              <p className="time">{pkg.time}</p>
              <div className="tests">
                {pkg.tests.map((test, i) => (
                  <span key={i}>{test}</span>
                ))}
              </div>
              <div className="price-section">
                <span className="price">{pkg.price}</span>
                <span className="discount">{pkg.discount}</span>
                <span className="original-price">{pkg.originalPrice}</span>
              </div>
              <p className="limited-period">{pkg.limitedPeriod}</p>
              <button className="book-btn hover-grow">Book</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us scroll-animate">
        <h2 className="fade-in">Why Book Tests With Us?</h2>
        <div className="features">
          <div className="feature slide-in delay-1 hover-grow">
            <div className="icon">✓</div>
            <h3>Fast Reports</h3>
            <p>Get reports in as little as 15 hours</p>
          </div>
          <div className="feature slide-in delay-2 hover-grow">
            <div className="icon">✓</div>
            <h3>Affordable</h3>
            <p>Up to 80% discount on health packages</p>
          </div>
          <div className="feature slide-in delay-3 hover-grow">
            <div className="icon">✓</div>
            <h3>Home Collection</h3>
            <p>Free home sample collection</p>
          </div>
        </div>
      </section>

      {/* Women's Health */}
      <section className="womens-health scroll-animate">
        <div className="section-header fade-in">
          <h2>Women's Health & Wellness Health Packages</h2>
          <p>
            Take control of your health with our comprehensive women's health
            packages
          </p>
        </div>
        <div className="categories fade-in">
          {[
            "All",
            "Wellness",
            "Pcos/PCOD",
            "Sexual Health",
            "Menstrual Health",
            "Pregnancy",
            "Cancer",
            "Infertility",
          ].map((cat, index) => (
            <button
              key={index}
              className={`hover-grow ${index === 0 ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="packages-grid">
          {womensPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`package-card pop-in delay-${index + 3} hover-grow`}
            >
              <h4>{pkg.title}</h4>
              <p className="time">{pkg.time}</p>
              <div className="tests">
                {Array.isArray(pkg.tests) ? (
                  pkg.tests.map((test, i) => (
                    <span
                      key={i}
                      onClick={() => handleTestClick(test)}
                      className="test-item"
                    >
                      {test}
                    </span>
                  ))
                ) : (
                  <span
                    className="test-description"
                    onClick={() => handleTestClick(pkg.title)}
                  >
                    {pkg.tests}
                  </span>
                )}
              </div>
              <div className="price-section">
                <span className="price">{pkg.price}</span>
                <span className="original-price">{pkg.originalPrice}</span>
              </div>
              <button className="book-btn hover-grow">Book</button>
            </div>
          ))}
        </div>
      </section>

      <Home2 />
    </div>
  );
};

export default Home;
