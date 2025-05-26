import React from 'react';
import './Quality.css';
import { motion } from 'framer-motion';

const QualityPage = () => {
  return (
    <div className="quality-assurance-container">

      {/* Hero Section */}
      <div className="quality-assurance-hero">
        <div className="quality-assurance-hero-overlay" />
        <motion.div
          className="quality-assurance-hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="quality-assurance-title">Quality Assurance at Redcliffe Labs</h1>
          <p className="quality-assurance-subtitle">Quality is a way of life at Redcliffe Labs</p>
        </motion.div>
      </div>

      {/* Why Quality Matters */}
      <section className="quality-assurance-section">
        <h2 className="quality-assurance-heading">Why Quality Matters</h2>
        <p className="quality-assurance-text">
          At Redcliffe Labs, we believe in providing accurate and reliable diagnostic services...
        </p>
      </section>

      {/* Commitment to Quality */}
      <section className="quality-assurance-section">
        <motion.div
          className="quality-assurance-flex"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="quality-assurance-image"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Lab"
          />
          <div className="quality-assurance-textbox">
            <h2 className="quality-assurance-heading">Commitment to Quality</h2>
            <p className="quality-assurance-text">
              Redcliffe National Reference Lab, Noida has an intensive in-house Program...
            </p>
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="quality-assurance-section quality-assurance-certifications">
        <h2 className="quality-assurance-heading">Our Certifications</h2>
        <ul className="quality-assurance-list">
          <li className="quality-assurance-list-item">NABL Accreditation</li>
          <li className="quality-assurance-list-item">ISO Certified Processes</li>
          <li className="quality-assurance-list-item">Stringent Quality Control Measures</li>
        </ul>
      </section>

      {/* Stats Section */}
      <section className="quality-assurance-stats">
        {[
          ['500+', 'Instruments used for real-time QC monitoring'],
          ['100+', 'Quality Checks & Processes on Every Sample'],
          ['15+', 'Quality Indicators monitored daily']
        ].map(([value, desc]) => (
          <div className="quality-assurance-stat-card" key={value}>
            <h3 className="quality-assurance-stat-value">{value}</h3>
            <p className="quality-assurance-stat-desc">{desc}</p>
          </div>
        ))}
      </section>

      {/* Labs Overview */}
      <section className="quality-assurance-section quality-assurance-labs-overview">
        <motion.div
          className="quality-assurance-flex"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="quality-assurance-textbox">
            <h2 className="quality-assurance-heading">Redcliffe National Reference Lab (NRL)</h2>
            <p className="quality-assurance-text">
              Located in Noida and spread across 30,000 sqft, NRL is equipped with cutting-edge...
            </p>
          </div>
          <img
            className="quality-assurance-image"
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Reference Lab"
          />
        </motion.div>
      </section>

      {/* Departments Section */}
      <section className="quality-assurance-section quality-assurance-departments">
        <h2 className="quality-assurance-heading">Departments</h2>
        <div className="quality-assurance-grid">
          {[
            "Biochemistry", "Immunoassays", "Serology & Immunology", "Microbiology",
            "Hemato - Oncology", "Histopathology", "Clinical Genomics", "Cytogenetics",
            "Molecular Diagnostics", "Molecular Oncology"
          ].map((name, idx) => (
            <div className="quality-assurance-dept-card" key={idx}>
              <span className="quality-assurance-dept-icon">🧬</span>
              <span className="quality-assurance-dept-name">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="quality-assurance-section quality-assurance-cta">
        <h2 className="quality-assurance-heading">Continuous Quality Improvements</h2>
        <p className="quality-assurance-text">
          Redcliffe Labs continuously improves its systems using Six Sigma processes...
        </p>
      </section>
    </div>
  );
};

export default QualityPage;
