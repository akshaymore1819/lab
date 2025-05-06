import React, { useEffect } from "react";
import "./Home2.css";

import img1 from '../assets/young.jpg';
import img2 from '../assets/midyoung.jpg';
import img3 from '../assets/old.jpg';

import img4 from '../assets/g1.jpg';
import img5 from '../assets/g2.jpg';
import img6 from '../assets/g3.jpg';

import dna1 from "../assets/dna1.jpg";
import dna2 from "../assets/dna2.jpg";
import dna3 from "../assets/dna3.jpg";
import dna4 from "../assets/dna4.png";
import dna5 from "../assets/dna5.jpg";
import dna6 from "../assets/dna6.jpg";
import dna7 from "../assets/dna7.jpg";

const Home2 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home2-animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.home2-animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home2-container">

      {/* 1. Top Banner */}
      <section className="home2-top-banner home2-animate-on-scroll">
        <div className="home2-banner-content">
          <h1><span>Redcliffe Labs</span> - Healthy India ki Trusted Lab</h1>
          <p>Giving India the right to quality diagnostics.</p>
          <div className="home2-stats-grid">
            {[
              { icon: "🧪", title: "70,00,000+", subtitle: "Customers served" },
              { icon: "📊", title: "70,000+", subtitle: "Tests Processed Everyday" },
              { icon: "🌆", title: "220+", subtitle: "Cities" },
              { icon: "🏥", title: "2000+", subtitle: "Collection Centres" },
              { icon: "🔬", title: "80+", subtitle: "In-house Labs" },
              { icon: "👨‍⚕️", title: "1000+", subtitle: "Home Collection Experts" },
            ].map((item, i) => (
              <div className="home2-stat-item" key={i}>
                <div className="home2-stat-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Custom Package */}
      <section className="home2-custom-package home2-animate-on-scroll">
        <div className="home2-package-left">
          <h2>Create Your Own Package</h2>
          <p>Choose your tests and get extra 10% OFF</p>
          <button className="home2-pulse">Create Now ➜</button>
        </div>
        <div className="home2-package-right">
          <div className="home2-emoji-box">👩‍⚕️</div>
        </div>
      </section>

      {/* 3. Family Care */}
      <section className="home2-family-care home2-animate-on-scroll">
        <h2>Family Care Packages</h2>
        <div className="home2-family-cards">
          {[...Array(4)].map((_, i) => (
            <div className="home2-family-card" key={i}>
              <div className="home2-tag">Free hsCRP</div>
              <h4>Package {i + 1}</h4>
              <p>Rs. 1599/- <span>70% OFF</span></p>
              <button className="home2-hover-grow">Book Now</button>
              <p className="home2-recommend">Recommended for Mothers</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Crore Banner */}
      <section className="home2-crore-banner home2-animate-on-scroll">
        Indians Save <span>1 Crore</span> Daily by Choosing Us!
      </section>

      {/* 5. Sample Collection */}
      <section className="home2-sample-collection home2-animate-on-scroll">
        <p>🛵 Free home sample collection in next 60 min*</p>
        <p>Book your test in just <strong>3 Steps</strong></p>
      </section>

      {/* 6. DNA Insights Slider */}
      <section className="home2-dna-slider home2-animate-on-scroll">
        <h2 className="home2-dna-heading">GeneCliffe DNA Insights</h2>
        <p className="home2-dna-description">
          GeneCliffe DNA Insights unlock a deeper understanding of your genetic blueprint, offering personalized health insights
          to help you make informed lifestyle, nutrition, and wellness decisions. Discover what your DNA says about your future.
        </p>

        <div className="home2-dna-container">
          <button className="home2-slider-btn home2-left" onClick={() => {
            document.querySelector('.home2-dna-track').scrollBy({ left: -300, behavior: 'smooth' });
          }}>←</button>

          <div className="home2-dna-track">
            {[
              { img: dna1, title: "ReproCliffe", info: "Offers insights into reproductive health including fertility and hormone genetics." },
              { img: dna2, title: "GutMicrobiome", info: "Analyzes gut microbiota to improve digestion, immunity, and metabolism." },
              { img: dna3, title: "Health EX", info: "Comprehensive health panel covering multiple wellness and disease markers." },
              { img: dna4, title: "OncoCliffe", info: "Detects genetic predisposition to various types of cancer." },
              { img: dna5, title: "NeuroCliffe", info: "Evaluates genes linked to brain function, mood, and neuro health." },
              { img: dna6, title: "CardioCliff", info: "Assesses risks related to heart disease and cardiovascular function." },
              { img: dna7, title: "NephroCliffe", info: "Screens for kidney health risks based on your DNA makeup." },
            ].map((item, index) => (
              <div className="home2-dna-card" key={index}>
                <img src={item.img} alt={`DNA ${index}`} />
                <h4>{item.title}</h4>
                <p className="home2-dna-info">{item.info}</p>
              </div>
            ))}
          </div>

          <button className="home2-slider-btn home2-right" onClick={() => {
            document.querySelector('.home2-dna-track').scrollBy({ left: 300, behavior: 'smooth' });
          }}>→</button>
        </div>
      </section>

      {/* 7. Routine Health Checkups */}
      <section className="home2-routine-checkups">
        <div className="home2-checkup-container">
          {/* Men Section */}
          <div className="home2-checkup-box">
            <div className="home2-checkup-header">
              <h3>Routine health checkups for men</h3>
              <a href="#">View All &gt;</a>
            </div>
            <div className="home2-checkup-list">
              {[
                { img: img1, age: "Under 30 yrs", doctor: "Dr. Arjun Patel" },
                { img: img2, age: "30 – 45 yrs", doctor: "Dr. Rohan Sharma" },
                { img: img3, age: "45 – 60 yrs", doctor: "Dr. Vikram Singh" },
              ].map((item, i) => (
                <div className="home2-checkup-card" key={i}>
                  <div className="home2-checkup-card-image">
                  <img src={item.img} alt={`Man ${i}`} />
                  </div>
                  <div className="home2-card-footer">
                    <p className="home2-age-group">{item.age}</p>
                    <p className="home2-doctor-name">By {item.doctor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Women Section */}
          <div className="home2-checkup-box">
            <div className="home2-checkup-header">
              <h3>Routine health checkups for women</h3>
              <a href="#">View All &gt;</a>
            </div>
            <div className="home2-checkup-list">
              {[
                { img: img4, age: "Under 30 yrs", doctor: "Dr. Priya Reddy" },
                { img: img5, age: "30 – 45 yrs", doctor: "Dr. Anjali Mehta" },
                { img: img6, age: "45 – 60 yrs", doctor: "Dr. Sunita Kapoor" },
              ].map((item, i) => (
                <div className="home2-checkup-card" key={i}>
                  <img src={item.img} alt={`Woman ${i}`} />
                  <div className="home2-card-footer">
                    <p className="home2-age-group">{item.age}</p>
                    <p className="home2-doctor-name">By {item.doctor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="home2-testimonials home2-animate-on-scroll">
        <h3>What Doctors Are Saying</h3>
        <div className="home2-testimonial-cards">
          {[...Array(3)].map((_, i) => (
            <div className="home2-testimonial home2-hover-grow" key={i}>
              <p>"Redcliffe Labs provides reliable reports and timely care."</p>
              <p className="home2-doc-name">Dr. Jane Doe</p>
              <p className="home2-doc-title">Pathologist</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Awards */}
      <section className="home2-awards home2-animate-on-scroll">
        <h3>Awards & Recognition 🏆</h3>
        <div className="home2-award-cards">
          {[...Array(4)].map((_, i) => (
            <div className="home2-award-card home2-hover-rotate" key={i}>🏅 Award {i + 1}</div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home2;