import React, { useEffect } from "react";
import "./Package1.css";
import { FaHeartbeat, FaFlask, FaUserMd, FaHome, FaFileMedical, FaStar, FaCheck } from "react-icons/fa";
import { GiMedicalPack } from "react-icons/gi";
import { BsClockFill, BsShieldCheck } from "react-icons/bs";
import { MdLocalOffer, MdHealthAndSafety } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Package1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="health-package-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <div className="popular-tag">
              <span className="best-seller">🔥 TOP SELLING</span>
              <span className="recent-bookings">72,109+ Recent Bookings</span>
            </div>
            <h1 className="hero-heading">
              Complete Body Health Checkup 
              <span className="highlight"> with Advanced Vitamin Screening</span>
            </h1>
            <p className="hero-subheading">Includes FREE HsCRP Screening (Cardiac Risk Marker) in Amravati</p>

            <div className="usp-grid">
              <div className="usp-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="usp-icon">
                  <FaFlask />
                </div>
                <div>
                  <h3>92 Parameters Analyzed</h3>
                  <p>Complete health assessment covering all major systems</p>
                </div>
              </div>
              <div className="usp-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="usp-icon">
                  <BsClockFill />
                </div>
                <div>
                  <h3>24-Hour Reports</h3>
                  <p>Digital + Physical reports with doctor's interpretation</p>
                </div>
              </div>
              <div className="usp-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="usp-icon">
                  <BsShieldCheck />
                </div>
                <div>
                  <h3>NABL Certified Labs</h3>
                  <p>Highest accuracy standards maintained</p>
                </div>
              </div>
            </div>

            <div className="pricing-section" data-aos="fade-up" data-aos-delay="400">
              <div className="price-display">
                <div className="current-price">
                  <span className="amount">₹1599</span>
                  <span className="price-note">All inclusive</span>
                </div>
                <div className="original-price">
                  <del>₹7614</del>
                  <span className="discount">78% OFF</span>
                </div>
              </div>
              <button className="cta-button pulse">
                <FaHeartbeat /> Book Your Checkup Now
              </button>
              <p className="vip-offer">💎 VIP Members: ₹1439 (Extra 10% Off)</p>
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left">
            <img 
              src="https://img.freepik.com/free-vector/health-check-up-concept-illustration_114360-7483.jpg" 
              alt="Health Checkup" 
              className="hero-img"
            />
            <div className="certification-badge">
              <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" alt="Certified" />
              <p>NABL & CAP Certified Labs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features-section" data-aos="fade-up">
        <h2 className="section-title">Why Choose Our Health Checkup?</h2>
        <p className="section-subtitle">Comprehensive care designed for your wellness</p>
        <div className="feature-grid">
          <div className="feature-card" data-aos="flip-left" data-aos-delay="100">
            <div className="feature-icon">
              <FaHome />
            </div>
            <h3>Free Home Collection</h3>
            <p>Certified phlebotomists collect samples from your home at your preferred time</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="200">
            <div className="feature-icon">
              <FaUserMd />
            </div>
            <h3>Doctor Consultation</h3>
            <p>Free report interpretation by our senior physicians</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="300">
            <div className="feature-icon">
              <MdHealthAndSafety />
            </div>
            <h3>100% Safe</h3>
            <p>Sterilized equipment and strict safety protocols followed</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="400">
            <div className="feature-icon">
              <FaFileMedical />
            </div>
            <h3>Detailed Reports</h3>
            <p>Comprehensive analysis with reference ranges and explanations</p>
          </div>
        </div>
      </section>

      {/* Comprehensive Health Screening */}
      <section className="health-screening-section">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">🩺 Comprehensive Health Analysis Includes</h2>
          <p className="section-subtitle">92 parameters covering all major health aspects</p>
        </div>
        <div className="screening-grid">
          <div className="screening-card cardiac" data-aos="fade-right" data-aos-delay="100">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2489/2489397.png" alt="Heart" />
              </div>
              <h3>Cardiac Health (12 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> Complete Lipid Profile</li>
              <li><FaCheck /> Hs-CRP (Cardiac Risk Marker)</li>
              <li><FaCheck /> Apollo Lipoprotein (A)</li>
              <li><FaCheck /> Homocysteine</li>
            </ul>
          </div>

          <div className="screening-card diabetes" data-aos="fade-right" data-aos-delay="200">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1591/1591025.png" alt="Diabetes" />
              </div>
              <h3>Diabetes Screening (8 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> HbA1c (3 Month Sugar Average)</li>
              <li><FaCheck /> Fasting Glucose</li>
              <li><FaCheck /> Post Prandial Sugar</li>
              <li><FaCheck /> Insulin Levels</li>
            </ul>
          </div>

          <div className="screening-card liver" data-aos="fade-right" data-aos-delay="300">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png" alt="Liver" />
              </div>
              <h3>Liver Function (11 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> SGOT, SGPT</li>
              <li><FaCheck /> ALP, Bilirubin</li>
              <li><FaCheck /> Protein, Albumin</li>
              <li><FaCheck /> GGT</li>
            </ul>
          </div>

          <div className="screening-card kidney" data-aos="fade-right" data-aos-delay="400">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2771/2771407.png" alt="Kidney" />
              </div>
              <h3>Kidney Function (7 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> Blood Urea Nitrogen</li>
              <li><FaCheck /> Serum Creatinine</li>
              <li><FaCheck /> Uric Acid</li>
              <li><FaCheck /> Calcium, Phosphorus</li>
            </ul>
          </div>

          <div className="screening-card vitamins" data-aos="fade-right" data-aos-delay="500">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Vitamins" />
              </div>
              <h3>Vitamin Profile (6 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> Vitamin D (25-OH)</li>
              <li><FaCheck /> Vitamin B12</li>
              <li><FaCheck /> Folic Acid</li>
              <li><FaCheck /> Iron Studies</li>
            </ul>
          </div>

          <div className="screening-card thyroid" data-aos="fade-right" data-aos-delay="600">
            <div className="card-header">
              <div className="card-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2936/2936886.png" alt="Thyroid" />
              </div>
              <h3>Thyroid Function (3 Tests)</h3>
            </div>
            <ul>
              <li><FaCheck /> TSH</li>
              <li><FaCheck /> Free T3, Free T4</li>
              <li><FaCheck /> Thyroid Antibodies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="process-section">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">📌 How It Works</h2>
          <p className="section-subtitle">Simple 3-step process for your convenience</p>
        </div>
        <div className="process-steps">
          <div className="process-step" data-aos="zoom-in" data-aos-delay="100">
            <div className="step-number">1</div>
            <div className="step-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" 
                alt="Booking" 
              />
            </div>
            <div className="step-content">
              <h3>Easy Online Booking</h3>
              <p>Select preferred date & time slot from our flexible scheduling</p>
            </div>
          </div>

          <div className="process-step" data-aos="zoom-in" data-aos-delay="200">
            <div className="step-number">2</div>
            <div className="step-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3043/3043788.png" 
                alt="Sample Collection" 
              />
            </div>
            <div className="step-content">
              <h3>Home Sample Collection</h3>
              <p>Certified technician visits you with complete safety measures</p>
            </div>
          </div>

          <div className="process-step" data-aos="zoom-in" data-aos-delay="300">
            <div className="step-number">3</div>
            <div className="step-icon">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" 
                alt="Reports" 
              />
            </div>
            <div className="step-content">
              <h3>Get Digital Reports</h3>
              <p>Within 24-48 hours with doctor's recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="package-comparison">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">📦 Choose Your Health Plan</h2>
          <p className="section-subtitle">Select the package that fits your health needs</p>
        </div>
        <div className="package-grid">
          <div className="package-card basic" data-aos="fade-up" data-aos-delay="100">
            <h3>Basic Wellness</h3>
            <div className="package-price">₹999</div>
            <div className="package-desc">Essential health screening</div>
            <ul className="package-features">
              <li><FaCheck /> 54 Parameters</li>
              <li><FaCheck /> Basic Diabetes Panel</li>
              <li><FaCheck /> Complete Lipid Profile</li>
              <li><FaCheck /> Liver & Kidney Function</li>
              <li><FaCheck /> Complete Blood Count</li>
            </ul>
            <button className="package-button">Book Now</button>
          </div>

          <div className="package-card recommended" data-aos="fade-up" data-aos-delay="200">
            <div className="recommended-badge">Most Popular</div>
            <h3>Complete Health Check</h3>
            <div className="package-price">₹1599</div>
            <div className="package-desc">Comprehensive health assessment</div>
            <ul className="package-features">
              <li><FaCheck /> 92 Parameters</li>
              <li><FaCheck /> Advanced Vitamin Screening</li>
              <li><FaCheck /> Cardiac Risk Markers</li>
              <li><FaCheck /> Thyroid Function Tests</li>
              <li><FaCheck /> Iron Studies</li>
              <li><FaCheck /> Urine Analysis</li>
            </ul>
            <button className="package-button primary">Book Now</button>
          </div>

          <div className="package-card premium" data-aos="fade-up" data-aos-delay="300">
            <h3>Advanced Care</h3>
            <div className="package-price">₹2999</div>
            <div className="package-desc">Complete health evaluation</div>
            <ul className="package-features">
              <li><FaCheck /> 121 Parameters</li>
              <li><FaCheck /> Cancer Markers (PSA/CA-125)</li>
              <li><FaCheck /> Hormonal Profile</li>
              <li><FaCheck /> Advanced Cardiac Markers</li>
              <li><FaCheck /> Complete Vitamin Panel</li>
              <li><FaCheck /> Arthritis Screening</li>
            </ul>
            <button className="package-button">Book Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">❤️ What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by thousands of happy customers</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-header">
              <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="User" />
              <div>
                <h4>Priya Sharma</h4>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="testimonial-text">
              "The home collection service was excellent. The technician was professional and punctual. 
              Reports came within 24 hours with detailed explanations. Highly recommended!"
            </p>
          </div>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-header">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
              <div>
                <h4>Rahul Patel</h4>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="testimonial-text">
              "Comprehensive package at an affordable price. The doctor's consultation after the reports 
              helped me understand my vitamin deficiencies and take corrective action."
            </p>
          </div>
          <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
            <div className="testimonial-header">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" />
              <div>
                <h4>Ananya Gupta</h4>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
            <p className="testimonial-text">
              "I was skeptical about online booking but the entire process was seamless. 
              The cardiac markers in the report helped detect early risks I wasn't aware of."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="faq-section">
  <div className="section-header" data-aos="fade-up">
    <h2 className="section-title">❓ Frequently Asked Questions</h2>
    <p className="section-subtitle">Find answers to common queries</p>
  </div>
  <div className="faq-container">
    <div className="faq-grid">
      <div className="faq-card" data-aos="fade-up" data-aos-delay="100">
        <div className="faq-question">
          <h3>What is the preparation required for the test?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            8-10 hours fasting is required. You can drink water. 
            For accurate lipid profile results, avoid fatty foods 24 hours prior.
          </p>
        </div>
      </div>
      
      <div className="faq-card" data-aos="fade-up" data-aos-delay="200">
        <div className="faq-question">
          <h3>How long does sample collection take?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            The process typically takes 15-20 minutes. Our technicians are trained 
            to make the experience quick and comfortable.
          </p>
        </div>
      </div>
      
      <div className="faq-card" data-aos="fade-up" data-aos-delay="300">
        <div className="faq-question">
          <h3>When will I receive my reports?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            Digital reports are delivered within 24-48 hours. Physical reports 
            (if opted) are dispatched within 3 working days.
          </p>
        </div>
      </div>
      
      <div className="faq-card" data-aos="fade-up" data-aos-delay="400">
        <div className="faq-question">
          <h3>Is doctor consultation included?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            Yes, a free 15-minute teleconsultation with our doctor is included 
            to help you understand your reports and next steps.
          </p>
        </div>
      </div>
      
      <div className="faq-card" data-aos="fade-up" data-aos-delay="500">
        <div className="faq-question">
          <h3>What safety measures are followed?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            Our technicians wear full PPE, use sterilized equipment, and follow 
            strict safety protocols for your protection.
          </p>
        </div>
      </div>
      
      <div className="faq-card" data-aos="fade-up" data-aos-delay="600">
        <div className="faq-question">
          <h3>Can I reschedule my appointment?</h3>
          <span className="faq-toggle">+</span>
        </div>
        <div className="faq-answer">
          <p>
            Yes, you can reschedule anytime before your appointment time through 
            your account or by calling our support.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Final CTA Section */}
<section className="final-cta-section" data-aos="fade-up">
  <div className="cta-container">
    <div className="cta-content">
      <h2>Ready to Take Charge of Your Health?</h2>
      <p>Book your comprehensive health checkup today and get 78% off</p>
      <button className="cta-button pulse">
        <FaHeartbeat /> Book Now for ₹1599
      </button>
      <div className="assurance-badges">
        <div className="badge">
          <GiMedicalPack className="badge-icon" />
          <span>NABL Certified Labs</span>
        </div>
        <div className="badge">
          <MdLocalOffer className="badge-icon" />
          <span>Best Price Guarantee</span>
        </div>
        <div className="badge">
          <BsShieldCheck className="badge-icon" />
          <span>100% Safe</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

    
  );
};

export default Package1;