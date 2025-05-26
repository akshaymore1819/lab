// ESGPractices.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ESGPractices.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroImage from "../../assets/hiro3.jpg";
import commitmentImage from "../../assets/esg1.jpg";
import pledgeImg1 from "../../assets/esg4.jpg";
import pledgeImg2 from "../../assets/esg2.jpg";
import pledgeImg3 from "../../assets/esg3.jpg";
import tshirtImg from "../../assets/esg2.jpg";
import dataProtectionImg from "../../assets/esg4.jpg";
import cprImg from "../../assets/esg3.jpg";

const ESGPractices = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const imageData = [
      {
        title: "T-Shirt Painting",
        desc: "From brushes to paints, we made the nature convene, with vibrant hues, on fabric, we crafted some creative scenes.",
        url: tshirtImg,
      },
      {
        title: "Data Protection Day",
        desc: "We created awareness on ensuring data privacy at our organization, by an in-house session on Data Protection.",
        url: dataProtectionImg,
      },
      {
        title: "CPR Training",
        desc: "A training session on CPR was organized to help employees understand how to handle emergencies with care.",
        url: cprImg,
      },
    ];
    setImages(imageData);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pledgeImages = [pledgeImg1, pledgeImg2, pledgeImg3];

  return (
    <div className="esg-container">
      {/* HERO */}
      <div className="hero-banner">
        <img src={heroImage} alt="ESG Practices" />
        <div className="hero-text" data-aos="fade-up">
          <h1>ESG Practices at Redcliffe</h1>
        </div>
      </div>

      {/* COMMITMENT */}
      <section className="commitment-section" data-aos="fade-up">
        <img src={commitmentImage} alt="Commitment" className="commitment-image" />
        <div className="commitment-text">
          <h2>Our Commitment to ESG</h2>
          <p>
            Redcliffe Labs is committed to operating in a sustainable manner,
            with a strong focus on Environmental, Social & Governance (ESG)
            initiatives. We understand the importance of reducing our
            environmental burden & actively seek to incorporate sustainable
            practices while promoting social responsibility & ethical governance.
          </p>
        </div>
      </section>

      {/* SUSTAINABILITY BANNER */}
      <section className="sustainability-strip" data-aos="zoom-in">
        <strong>Sustainability</strong> — Our dedication to sustainable practices underscores our
        commitment to a healthier future for both individuals and the planet.
      </section>

      {/* PLEDGE SLIDER */}
      <section className="pledge-section" data-aos="fade-left">
        <div className="pledge-left">
          <p>“I feel happy when I use public or green transit to commute.”</p>
          <h3>Our ESG Pledge</h3>
        </div>
        <div className="pledge-slider">
          <Slider {...sliderSettings}>
            {pledgeImages.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`pledge ${i + 1}`} className="pledge-slide-img" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="initiatives-section" data-aos="fade-up">
        <h2>ESG Initiatives At Redcliffe</h2>
        <div className="initiatives-grid">
          {images.map((item, idx) => (
            <div className="initiative-card" key={idx} data-aos="zoom-in">
              <img src={item.url} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ESGPractices;
