import React, { useEffect } from 'react';
import './Coverage.css';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import c1 from '../../assets/coverage.jpg';
import c2 from '../../assets/coverage1.jpg';
import c3 from '../../assets/coverage2.jpg';
import in1 from '../../assets/in1.jpg';
import in2 from '../../assets/in2.jpg';
import in3 from '../../assets/in3.jpg';
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import a3 from '../../assets/a3.jpg';
import a4 from '../../assets/a4.jpg';
import a5 from '../../assets/a5.jpg';
import a6 from '../../assets/a6.jpg';
import a7 from '../../assets/a7.jpg';

const Coverage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="media-page">
      {/* Headline Announcement */}
      <motion.section
        className="headline-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Redcliffe Labs claims its pregnancy risk screening test cut downs false detection by 36%
        </motion.h2>
        <motion.button
          className="read-article-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Read Article
        </motion.button>
      </motion.section>

      {/* Media Coverage */}
      <section className="media-coverage" data-aos="fade-up">
        <div className="media-header">
          <h3>Media Coverage</h3>
          <a href="#" className="view-all-link">View All Articles</a>
        </div>

        <div className="media-cards">
          {[{ img: c1, title: "3 in 5 women at risk of anaemia in India, says Redcliffe Labs report", source: "Business Standard", date: "06 Mar 2025" },
            { img: c2, title: "Redcliffe Labs addresses Women's Health risks with nationwide campaign", source: "Adgully", date: "28 Feb 2025" },
            { img: c3, title: "Redcliffe Labs strengthens presence in Jharkhand", source: "Biospectrum India", date: "21 Feb 2025" }].map((item, index) => (
              <motion.div
                className="media-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <img src={item.img} alt={`Media ${index + 1}`} className="media-img" />
                <div className="media-content">
                  <h4>{item.title}</h4>
                  <p>{item.source}</p>
                  <span>{item.date}</span>
                </div>
              </motion.div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="insights-section" data-aos="fade-up">
        <h3 className="insights-title">Insights</h3>
        <ul className="insights-list">
          <li className="insight-card">
            <div className="insight-avatar">
              <img src={in1} alt="Author" />
            </div>
            <p>One in every two individuals has a lifestyle disorder</p>
          </li>
          <li className="insight-card">
            <div className="insight-avatar">
              <img src={in2} alt="Author" />
            </div>
            <p>Redcliffe Labs Study Highlights Rising Arthritis Risk Across All Age Groups</p>
          </li>
          <li className="insight-card">
            <div className="insight-avatar">
              <img src={in3} alt="Author" />
            </div>
            <p>AI Dominance in 2024: What Industry Leaders Anticipate for 2025</p>
          </li>
        </ul>
      </section>

      {/* Media Contact */}
      <section className="media-contact-full-section" data-aos="fade-up">
        <div className="media-contact-overlay">
          <h3 className="media-contact-full-title">For Media Queries, please contact</h3>
          <p className="media-contact-full-text">
            <strong>Corporate Communications</strong><br />
            Redcliffe Labs Pvt. Ltd.
          </p>
          <p className="media-contact-full-email">
            📧 <a href="mailto:pr@redcliffelabs.com">pr@redcliffelabs.com</a>
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section-container" data-aos="fade-up">
        <h3 className="awards-section-title">Awards & Recognition</h3>
        <div className="awards-section-grid">
          {[
            {
              title: "Environment",
              desc: "Global ESG Business Award 2023",
              org: "Deloitte",
              img: a1,
            },
            {
              title: "Growth & Innovation",
              desc: "Deloitte Technology Fast 50 India 2023",
              org: "Deloitte",
              img: a2,
            },
            {
              title: "Health Tech Innovation",
              desc: "3rd IHW Digital Health Awards 2024",
              org: "IHW Health Awards",
              img: a3,
            },
            {
              title: "Growth",
              desc: "VOH Awards 2024",
              org: "VOH Diagnostics",
              img: a4,
            },
            {
              title: "Customer Experience",
              desc: "3rd Annual Excellence Awards 2024",
              org: "Quantic",
              img: a5,
            },
            {
              title: "Customer Experience & Tech Innovation",
              desc: "5th CX Summit & Awards 2024",
              org: "The Brainalytics",
              img: a6,
            },
            {
              title: "Healthcare & Innovation",
              desc: "“Leading Diagnostic Chain” at the 14th Elets Healthcare Innovation Summit & Awards.",
              org: "Elets Healthcare",
              img: a7,
            }
          ].map((award, index) => (
            <motion.div
              className="awards-section-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="awards-section-card-title">{award.title}</h4>
              <p className="awards-section-card-desc">{award.desc}</p>
              <div className="awards-section-card-org">
                <img src={award.img} alt={award.org} className="org-logo" />
                <span>{award.org}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Coverage;
