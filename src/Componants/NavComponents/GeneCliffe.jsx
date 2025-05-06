import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DNA_image from "../../assets/DNA_image.webp";
import HealthEX from "../../assets/HealthEX.webp";
import Gut_Microbiome from "../../assets/Gut_Microbiome.webp";
import ReproCliffe from "../../assets/ReproCliffe.webp";
import OncoCliffe from "../../assets/OncoCliffe.webp";
import NeuroCliffe from "../../assets/NeuroCliffe.webp";
import NephroCliffe from "../../assets/NephroCliffe.webp";
import CardioCliffe from "../../assets/CardioCliffe.webp";
import Still_Confused from "../../assets/Still_Confused.webp";
import "./GeneCliffe.css";

const GeneCliffe = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);
  const [hideStickyConsult, setHideStickyConsult] = useState(false);
  const [hideScrollContainer, setHideScrollContainer] = useState(false); 
  const stillConfusedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideStickyConsult(entry.isIntersecting);
        setHideScrollContainer(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (stillConfusedRef.current) {
      observer.observe(stillConfusedRef.current);
    }

    return () => {
      if (stillConfusedRef.current) {
        observer.unobserve(stillConfusedRef.current);
      }
    };
  }, []);

  return (
    <div className="genecliffe-containermain">
      <div
        className="background-imageDNA"
        style={{ backgroundImage: `url(${DNA_image})` }}
      >
        <div className="overlay-contentgene">
          <h1>Bringing GeneCliffe</h1>
          <p className="subtitlegene">
            Discover the insights encoded in your DNA, Chromosomes, and Proteins
            for a better understanding of your health.
          </p>
          <p className="descriptiongene">
            Your genes are unique and carry hidden information that can help you
            understand your personalized health conditions, choose prevention
            strategies, initiate or redefine treatment, or make decisions about
            family planning.
          </p>
          <p className="cta-text">
            Get tested and seek genecounseling with genetic experts.
          </p>
          <button onClick={toggleForm} className="enquire-buttongene">
            Enquire Now <span>&rarr;</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div className="popup-formgene">
          <div className="form-boxgene">
            <h2>Enquire Now</h2>
            <button className="close-btn" onClick={toggleForm}>
              <i className="fas fa-times"></i>
            </button>
            <form>
              <input type="text" placeholder="Patient Name *" required />
              <input type="tel" placeholder="Mobile Number *" required />

              <select required defaultValue="">
                <option value="" disabled selected hidden>
                  Gender *
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input type="number" placeholder="Age *" required />

              <select required defaultValue="">
                <option value="" disabled selected hidden>
                  City *
                </option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>

              <textarea
                rows="4"
                cols="6"
                placeholder="Problems (Previous History)"
                required
              ></textarea>

              <input type="text" placeholder="Doctor Name" />

              <select defaultValue="">
                <option value="" disabled selected hidden>
                  Test Required *
                </option>
                <option>HealthEX</option>
                <option>Gut Microbiome Test</option>
                <option>ReproCliffe</option>
                <option>OncoCliffe</option>
                <option>NeuroCliffe</option>
                <option>NephroCliffe</option>
                <option>CardioCliffe</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* HealthEX Section */}
      <div className="healthex-content">
        <div className="healthex-left">
          <button className="tag-btn">HealthCliffe</button>
          <h2>HealthEX</h2>
          <p>
            Our bodies are intricate; just like machines, they need regular
            maintenance to run smoothly. HealthEx is a specially curated test by
            genetic experts at Redcliffe Labs that enables DNA analysis, giving
            you a comprehensive picture of your health.
          </p>
          <button
            className="know-more-btn"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>

        <div className="healthex-right">
          <div className="image-wrapper">
            <img src={HealthEX} alt="HealthEx" />
          </div>
        </div>
      </div>

      {/* Gut Microbiome Section */}
      <div className="Gut-content">
        <div className="Gut-left">
          <div className="image-Gut">
            <img src={Gut_Microbiome} alt="Gut" />
          </div>
        </div>

        <div className="Gut-right">
          <button className="tag-btnGut">HealthCliffe</button>
          <h2>Gut Microbiome</h2>
          <p>
            Gut Microbiota is unique to every person and varies based on gender,
            geography, eating habits, culture, genetics, lifestyle, and other
            habits. A Gut Microbiome Test is a highly accurate and reliable tool
            for comprehensively analyzing gut health. The results can guide you
            on your journey to holistic health.
          </p>
          <button
            className="know-more-btnGut"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>
      </div>

      {/* Additional Sections: ReproCliffe, OncoCliffe, NeuroCliffe, NephroCliffe, CardioCliffe */}
      {/* Repeated Structure for each section */}

      {/* Still Confused Section */}
      <div className="Still_Confused-content" ref={stillConfusedRef}>
        <div className="Still_Confused-left">
          <h2>Still Confused?</h2>
          <h3>Speak with our experts Now!</h3>
          <p>
            Get answers to all your queries by connecting with a highly
            experienced Genetic Expert at Redcliffe Labs.
          </p>
          <button className="consult-btn" onClick={() => setShowForm(true)}>
            Consult Now &rarr;
          </button>
        </div>

        <div className="Still_Confused-right">
          <div className="image-wrapperStill_Confused">
            <img src={Still_Confused} alt="Still_Confused" />
          </div>
        </div>
      </div>

      {/* Sticky Consult Section */}
      {!hideStickyConsult && (
        <div className="consult-small-container">
          <div className="consult-left">
            <h2>Still Confused?</h2>
            <p>Get Genetic Counseling with Redcliffe Lab's Genetic Experts</p>
          </div>
          <div className="consult-right">
            <button className="consult-btn" onClick={() => setShowForm(true)}>
              Consult Now &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneCliffe;
