import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <div className="quality-page">
      {/* Banner Section */}
      <div className="quality-banner">
        <div className="quality-banner-content">
          <h1>Quality Assurance at Redcliffe Labs</h1>
          <p>Trusted Diagnostic Services</p>
        </div>
      </div>

      {/* Why Quality Matters */}
      <section className="quality-section">
        <h2>Why Quality Matters</h2>
        <p>
          At Redcliffe Labs, we believe in providing accurate and reliable diagnostic
          services. Our commitment to quality ensures that every report is a step
          toward better health.
        </p>
      </section>

      {/* Certifications */}
      <section className="quality-section alt">
        <h2>Our Certifications</h2>
        <ul className="quality-certifications">
          <li>NABL Accreditation</li>
          <li>ISO Certified Processes</li>
          <li>Stringent Quality Control Measures</li>
        </ul>
      </section>

      {/* Lab Infrastructure */}
      <section className="quality-section">
        <h2>State-of-the-art Lab Infrastructure</h2>
        <p>
          We use advanced technology and modern equipment to maintain high
          standards. Our laboratories follow strict hygiene and procedural
          protocols.
        </p>
      </section>

      {/* Trained Professionals */}
      <section className="quality-section alt">
        <h2>Trained & Qualified Professionals</h2>
        <p>
          Our team includes expert pathologists, microbiologists, and lab
          technicians trained to handle diagnostics with precision and care.
        </p>
      </section>

      {/* Regular Audits */}
      <section className="quality-section">
        <h2>Regular Audits & Monitoring</h2>
        <p>
          We conduct internal and external audits regularly to evaluate our
          performance and identify areas of improvement.
        </p>
      </section>

      {/* Customer Confidence */}
      <section className="quality-section alt">
        <h2>Building Customer Confidence</h2>
        <p>
          We ensure transparency and accountability to maintain the trust of our
          patients, partners, and stakeholders.
        </p>
      </section>
    </div>
  );
};

export default Quality;
