import React from 'react';
import './Quality.css';
import { motion } from 'framer-motion';

const Quality = () => {
  return (
    <div className="qa-page">

      {/* Hero Section */}
      <div className="qa-hero">
        <div className="qa-hero-overlay" />
        <motion.div
          className="qa-hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Quality Assurance at Redcliffe Labs</h1>
          <p>Quality is a way of life at Redcliffe Labs</p>
        </motion.div>
      </div>

      {/* Intro Section */}
      <section className="qa-section">
        <motion.div
          className="qa-text-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Lab" />
          <div>
            <h2>Commitment to Quality</h2>
            <p>
              Redcliffe National Reference Lab, Noida has an intensive in-house Program for Quality Assurance
              which enables it to meet the internationally accepted standards in clinical laboratory testing.
              Our Lab is committed to providing the best quality services through a dedicated QA team.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="qa-stats">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Instruments used for real-time QC monitoring</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Quality Checks & Processes on Every Sample</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Quality Indicators monitored daily</p>
        </div>
      </section>

      {/* Labs Overview */}
      <section className="qa-section reverse">
        <motion.div
          className="qa-text-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2>Redcliffe National Reference Lab (NRL)</h2>
            <p>
              Located in Noida and spread across 30,000 sqft, NRL is equipped with cutting-edge technology,
              experienced doctors, scientists, and state-of-the-art equipment. With 3500+ tests across specialities,
              Redcliffe Labs is enrolled in international EQAS programs and runs robust internal quality protocols.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Reference Lab" />
        </motion.div>
      </section>

      {/* Departments Section */}
      <section className="qa-departments">
        <h2>Departments</h2>
        <div className="qa-grid">
          {[
            { name: "Biochemistry", icon: "🧪" },
            { name: "Immunoassays", icon: "🔬" },
            { name: "Serology & Immunology", icon: "🦠" },
            { name: "Microbiology", icon: "🧫" },
            { name: "Hemato - Oncology", icon: "💉" },
            { name: "Histopathology", icon: "🔍" },
            { name: "Clinical Genomics", icon: "🧬" },
            { name: "Cytogenetics", icon: "🧬" },
            { name: "Molecular Diagnostics", icon: "🧬" },
            { name: "Molecular Oncology", icon: "🧬" }
          ].map(dept => (
            <div className="qa-card" key={dept.name}>
              <span className="qa-icon">{dept.icon}</span>
              <span>{dept.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="qa-cta">
        <h2>Continuous Quality Improvements</h2>
        <p>
          Redcliffe Labs continuously improves its systems using Six Sigma processes, daily monitored indicators,
          and expert reviews, ensuring the most accurate and reliable results for every patient.
        </p>
      </section>
    </div>
  );
};

export default Quality;