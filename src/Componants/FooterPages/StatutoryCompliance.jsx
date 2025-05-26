import React, { useState } from 'react';
import './StatutoryCompliance.css';

const StatutoryCompliance = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = {
    investor: {
      title: 'Investor Information',
      items: [
        'Notice to Preference shareholders',
        'Notice to Unsecured Creditors'
      ]
    },
    compliance: {
      title: 'Compliance Documents',
      content: {
        generalMeetings: ['Notice of General Meeting'],
        annualReturns: [
          'Annual Return (Form MGT-7) (2020-2021)',
          'Annual Return (Form MGT-7) (2021-2022)',
          'Annual Return (Form MGT-7) (2022-2023)',
          'Annual Return (Form MGT-7) (2023-2024)'
        ]
      }
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="statutory-compliance">
      <header className="header">
        <h1>Statutory Compliance</h1>
      </header>

      <div className="section-container">
        {/* Investor Information Section */}
        <div className={`section ${openSection === 'investor' ? 'open' : ''}`}>
          <div className="section-header" onClick={() => toggleSection('investor')}>
            <h2>{sections.investor.title}</h2>
            <span className="chevron">{openSection === 'investor' ? '▼' : '▶'}</span>
          </div>
          <div className="section-content">
            {sections.investor.items.map((item, index) => (
              <div key={index} className="item">
                <span className="item-text">{item}</span>
                <a href="/" className="view-button">
                  View
                  <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Documents Section */}
        <div className={`section ${openSection === 'compliance' ? 'open' : ''}`}>
          <div className="section-header" onClick={() => toggleSection('compliance')}>
            <h2>{sections.compliance.title}</h2>
            <span className="chevron">{openSection === 'compliance' ? '▼' : '▶'}</span>
          </div>
          <div className="section-content">
            <div className="sub-section">
              <h3>General Meetings</h3>
              {sections.compliance.content.generalMeetings.map((item, index) => (
                <div key={index} className="item">
                  <span className="item-text">{item}</span>
                  <a href="/" className="view-button">
                    View
                    <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="sub-section">
              <h3>Annual Return (Form MGT-7)</h3>
              {sections.compliance.content.annualReturns.map((item, index) => (
                <div key={index} className="item">
                  <span className="item-text">{item}</span>
                  <a href="/" className="view-button">
                    View
                    <span className="arrow">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatutoryCompliance;