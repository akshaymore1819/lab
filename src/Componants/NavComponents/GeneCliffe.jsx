import React, { useState } from "react";
import { useEffect, useRef } from "react";
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

      <div className="ReproCliffe-content">
        <div className="ReproCliffe-left">
          <button className="tag-btnReproCliffe">DiagnoCliffe</button>
          <h2>ReproCliffe</h2>
          <p>
            Reproductive health refers to the condition of male and female
            reproductive organs and systems at all stages of life. ReproCliffe,
            at Redcliffe Labs comprises genetic testing , including a vast array
            of tests such as carrier screening, screening for infertility and
            recurrent pregnancy loss, prenatal screening and diagnosis. It also
            includes preconception genetic counseling.
          </p>
          <button
            className="know-more-btnReproCliffe"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>

        <div className="ReproCliffe-right">
          <div className="image-wrapperReproCliffe">
            <img src={ReproCliffe} alt="ReproCliffe" />
          </div>
        </div>
      </div>

      <div className="OncoCliffe-content">
        <div className="OncoCliffe-left">
          <div className="image-OncoCliffe">
            <img src={OncoCliffe} alt="OncoCliffe" />
          </div>
        </div>

        <div className="OncoCliffe-right">
          <button className="tag-btnOncoCliffe">DiagnoCliffe</button>
          <h2>OncoCliffe</h2>
          <p>
            Globally, cancer is the second most common cause of death, claiming
            approximately 9.6 million lives in 2018, representing 1 in 6 deaths.
            Genetic testing for cancer can help you understand your risk of
            cancer and make decisions about cancer prevention and screening.
          </p>
          <button
            className="know-more-btnOncoCliffe"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>
      </div>

      <div className="NeuroCliffe-content">
        <div className="NeuroCliffe-left">
          <button className="tag-btnNeuroCliffe">DiagnoCliffe</button>
          <h2>NeuroCliffe</h2>
          <p>
            The use of genetic testing in neurology is getting more and more
            advantageous. The diagnostic success rate can be significantly
            raised using NGS, PCR, MLPA etc, which enables faster diagnosis,
            which enhances a patient's quality of life.
          </p>
          <button
            className="know-more-btnNeuroCliffe"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>

        <div className="NeuroCliffe-right">
          <div className="image-wrapperNeuroCliffe">
            <img src={NeuroCliffe} alt="NeuroCliffe" />
          </div>
        </div>
      </div>

      <div className="NephroCliffe-content">
        <div className="NephroCliffe-left">
          <div className="image-NephroCliffe">
            <img src={NephroCliffe} alt="NephroCliffe" />
          </div>
        </div>

        <div className="NephroCliffe-right">
          <button className="tag-btnNephroCliffe">DiagnoCliffe</button>
          <h2>NephroCliffe</h2>
          <p>
            Genetic testing for kidney disease can help identify the cause of
            kidney disease, and can provide information on prognosis, treatment,
            and risk of recurrence. Research suggests that genetic factors play
            a significant role in renal disorders, affecting between 5% and 15%
            of the adult population. In fact, genetic forms of kidney disease
            are believed to contribute to 20% of chronic kidney disease (CKD)
            cases.
          </p>
          <button
            className="know-more-btnNephroCliffe"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>
      </div>

      <div className="CardioCliffe-content">
        <div className="CardioCliffe-left">
          <button className="tag-btnCardioCliffe">DiagnoCliffe</button>
          <h2>CardioCliffe</h2>
          <p>
            Genetic testing in cardiology can help identify genetic variants
            that may cause inherited heart conditions. Heart diseases can be
            inherited, affecting individuals of all ages and potentially leading
            to serious health consequences.
          </p>
          <button
            className="know-more-btnCardioCliffe"
            onClick={() => navigate("/healthex")}
          >
            Know More &rarr;
          </button>
        </div>

        <div className="CardioCliffe-right">
          <div className="image-wrapperCardioCliffe">
            <img src={CardioCliffe} alt="CardioCliffe" />
          </div>
        </div>
      </div>

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
