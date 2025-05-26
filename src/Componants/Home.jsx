import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Home2 from "./Home2";
import { Link } from "react-router-dom";

const Home = () => {
  
  const [searchText, setSearchText] = useState("");
  const [currentPackageSlide, setCurrentPackageSlide] = useState(0);

  

  const healthPackages = [
    {
      id: 1,
      title:
        "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
      time: "Reports in 15 hours | Parameters 92",
      tests: [
        <Link to="/Package1">Heart</Link>,
        <Link to="/Package1">Diabetes (HbA1c)</Link>,
        <Link to="/Package1">Lipid</Link>,
        <Link to="/Package1">Liver</Link>,
        <Link to="/Package1">Kidney</Link>,
        <Link to="/Package1">Infection</Link>,
        <Link to="/Package1">Thyroid</Link>
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
       <Link to="/Package1">Diabetes (HbAlc)</Link> ,
       <Link to="/Package1">Lipid</Link> ,
       <Link to="/Package1">Liver</Link> ,
       <Link to="/Package1"> Kidney</Link> ,
       <Link to="/Package1"> Infection</Link> ,
       <Link to="/Package1"> Thyroid</Link> ,
      
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
        <Link to="/Package2"> CBC</Link> ,
        <Link to="/Package1">  Blood Sugar</Link> ,
        <Link to="/Package1">  Lipid Profile</Link> ,
        <Link to="/Package1"> Liver Function</Link> ,
        <Link to="/Package1"> Kidney Function</Link> ,
      
      ],
      price: "₹9970",
      discount: "78% off",
      originalPrice: "₹31200",
      limitedPeriod: "for a limited period",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPackageSlide((prev) => (prev + 1) % healthPackages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [healthPackages.length]);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchText.trim() !== "") {
      console.log("Searching for:", searchText);
      setSearchText("");
    }
  };

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".fade-in, .slide-in, .pop-in");
      elements.forEach((el) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
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

  const packages = [
    { name: "Full Body Checkup", icon: "🩺", route: "/fullbody" },
    { name: "Diabetes Profile", icon: "🩸", route: "/Diabetes"},
    { name: "Heart Health", icon: "❤️", route: "/heart" },
    { name: "Fever", icon: "🤒", route: "/fever" },
      { name: "Vitamin Support", icon: "💊", route: "/vitamin" },
    { name: "Thyroid Panel", icon: "🦋" ,route:"/Thyroide" },
   
    { name: "Pregnancy", icon: "🤰", route: "/pregnancy" },
    { name: "Fertility", icon: "🧬", route: "/fertility" },
    { name: "Hormone Panel", icon: "🧬",route:"/Hormone" },
    { name: "Allergy Screening", icon: "🌼",route:"/Allergy" },
    { name: "Lifestyle", icon: "🏃‍♂️", route: "/lifestyle" },
    { name: "Cancer Screening", icon: "🎗️",route:"/Cancer" },
    { name: "STD", icon: "🛡️", route: "/std" },
    { name: "Combo", icon: "🎯", route: "/combo" },
    { name: "Arthritis", icon: "🦴", route: "/arthritis" },
    { name: "Anemia", icon: "🩸", route: "/anemia" },
    { name: "Antenatal", icon: "🤰", route: "/antental" },
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
  ];

  // Auto slider
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
          <input
            type="text"
            className="search-input"
            placeholder="Search tests..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
         <button className="upload-btn hover-grow">
  <Link to="/upload" style={{ color: 'inherit', textDecoration: 'none' }}>
    Upload Prescription
  </Link>
</button>
<Link to="/herointro" className="book-btn pulse hover-grow">
  Select Health Package
</Link>
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
            <Link to="/package2" className="book-btn hover-grow">Book</Link>
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
      <h4>Certified Labs</h4>
      <p>Get accurate test results from NABL & ICMR certified labs.</p>
    </div>
    <div className="feature slide-in delay-2 hover-grow">
      <div className="icon">✓</div>
      <h4>Free Home Sample Collection</h4>
      <p>Sample collection from your home by trained professionals.</p>
    </div>
    <div className="feature slide-in delay-3 hover-grow">
      <div className="icon">✓</div>
      <h4>Online Reports</h4>
      <p>Get digital reports within 15 hours directly on your phone.</p>
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
           <Link to= "Cancer">All</Link>,
           <Link to ="Cancer">Wellness</Link>,
            <Link to ="Cancer">Pcos/PCOD</Link>,
             <Link to ="Cancer">Sexual Health</Link>,
              <Link to ="Cancer">Menstrual Health</Link>,

            <Link to="Pregnancy">Pregnancy</Link>,
            
        <Link to="Cancer">Cancer</Link>,
         <Link to ="Cancer">Infertility</Link>,
          
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
                {pkg.tests.map((test, i) => (
                  <span key={i}>{test}</span>
                ))}
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

