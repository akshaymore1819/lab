import React from "react";
import "../NavComponents/HealthBlog.css";

// Image imports
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import img4 from "../../assets/f4.jpg";
import img5 from "../../assets/f5.jpg";
import img6 from "../../assets/f6.jpg";
import img7 from "../../assets/f7.jpg";
import img8 from "../../assets/f8.jpg";
import img9 from "../../assets/f9.jpg";
import img10 from "../../assets/f10.jpg";
import img11 from "../../assets/f11.jpg";
import img12 from "../../assets/f12.jpg";
import img13 from "../../assets/f13.jpg";
import img14 from "../../assets/f14.jpg";
import img15 from "../../assets/f16.jpg";
import img16 from "../../assets/f16.jpg";
import img17 from "../../assets/f17.jpg";
import img18 from "../../assets/f18.jpg";
import img19 from "../../assets/f18.jpg";
import l1 from "../../assets/l1.jpg";
import l2 from "../../assets/l2.jpg";
import l3 from "../../assets/l2.jpg";
import l4 from "../../assets/l2.jpg";
import l5 from "../../assets/l2.jpg";
import l6 from "../../assets/l2.jpg";
import f1 from "../../assets/fo1.jpg";
import f2 from "../../assets/fo2.jpg";
import k1 from "../../assets/fo2.jpg";
import k2 from "../../assets/fo2.jpg";
import f21 from "../../assets/fo2.jpg";
import f22 from "../../assets/fo2.jpg";
import f23 from "../../assets/fo2.jpg";
import f24 from "../../assets/fo2.jpg";

const HealthBlog = () => {
  return (
    <div className="healthblogs-container">


<section className="feature-section">
  <h2>Featured Contents</h2>
  <div className="feature-grid">
    {[img1, img2, img3, img4].map((img, i) => (
      <div className="feature-card" key={i}>
        <img src={img} alt={`Blog  ${i + 1}`} />
        <div className="feature-text">
        <p className="health">Health</p>
          <h3>Sample Featured Content Title {i + 1}</h3>
          <span className="datefeature">Apr {15 - i}, 2025 • </span>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="webstories-section">
  <h2>Web Stories</h2>
  <div className="webstories-grid">
    {[img4, img5, img6, img6].map((img, i) => (
      <div className="webstories-card" key={i}>
        <img src={img} alt={`Story ${i + 1}`} />
        <div className="blog-text">
          <h3>Web Story Title {i + 1}</h3>
          <span className="date">Apr {15 - i}, 2025 • 2 min read</span>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Awareness Campaigns */}
<section className="awareness-section">
  <h2>Awareness Campaigns</h2>
  <div className="awareness-grid">
    {[img7, img8, img9].map((img, i) => (
      <div className="awareness-card" key={i}>
        <img src={img} alt={`Campaign ${i + 1}`} />
        <h3>Campaign Title {i + 1}</h3>
        <p className="awareness-author">Written by: Muskan Taneja</p>
      </div>
    ))}
  </div>
</section>

{/* Women's Health */}
<section className="women-section">
  <h2>Women's Health</h2>
  <div className="women-grid">
    {[img10, img11, img12, img13, img13, img13].map((img, i) => (
      <div className="women-card" key={i}>
        <img src={img} alt={`Women's ${i + 1}`} />
        <h3>Women's Health Topic {i + 1}</h3>
        <p className="women-author">Written by: Author {i + 1}</p>
      </div>
    ))}
  </div>
</section>

{/* Diabetes */}
<section className="diabetes-section">
  <h2>Diabetes</h2>
  <div className="diabetes-grid">
    {[img14, img15, img16, img17, img18, img19].map((img, i) => (
      <div className="diabetes-card" key={i}>
        <img src={img} alt={`Diabetes ${i + 1}`} />
        <h3>Diabetes Topic {i + 1}</h3>
        <p className="diabetes-author">Written by: Kirti Saxena</p>
      </div>
    ))}
  </div>
</section>

{/* Lab Test */}
<section className="screening-section">
  <h2>Health Screenings & Tests</h2>
  <div className="screening-grid">
    {[l1, l2, l3, l4, l5, l6].map((img, i) => (
      <div className="screening-card" key={i}>
        <img src={img} alt={`Health Screening ${i + 1}`} />
        <h3>Essential Health Screenings for Your Age</h3>
        <p className="screening-author">Written by: Medical Expert Team</p>
      </div>
    ))}
  </div>
</section>

{/* Healthy Eating Tips for Every Season */}
<section className="seasonal-eating-section">
  <h2>Healthy Eating Tips for Every Season</h2>
  <div className="seasonal-eating-grid">
    {[f1, f2, f21, f22, f23, f24].map((img, i) => (
      <div className="seasonal-card" key={i}>
        <img src={img} alt={`Seasonal Food ${i + 1}`} />
        <h3>Seasonal Superfoods to Add to Your Diet</h3>
        <p className="seasonal-author">Written by: Nutritionist Maya</p>
        <div className="wave-shape"></div>
      </div>
    ))}
  </div>
</section>


{/* Smart Videos */}
<section className="video-section">
  <h2>Smart Videos</h2>
  <div className="video-grid">
    {[
      { src: "/assets/video1.jpg", title: "Vitamin Deficiency Signs" },
      { src: "/assets/video2.jpg", title: "How Diabetes Affects You" },
      { src: "/assets/video3.jpg", title: "Top Immunity Foods" },
      { src: "/assets/video4.jpg", title: "Heart-Healthy Diet Tips" }
    ].map((video, i) => (
      <div className="video-card" key={i}>
        <div className="video-thumb">
          <img src={video.src} alt={`Video ${i + 1}`} />
          <div className="play-icon">&#9658;</div>
        </div>
        <h3>{video.title}</h3>
      </div>
    ))}
  </div>
  <div className="video-wave-shape"></div>
</section>

{/* Knowledge Hub Section */}
<section className="knowledge-hub-section">
  <h2 className="knowledge-hub-heading">Knowledge Hub</h2>
  <div className="knowledge-hub-grid">
    {["k1.jpg", "k2.jpg", "k3.jpg", "k4.jpg", "k5.jpg", "k6.jpg"].map((img, i) => (
      <div className="knowledge-hub-card" key={i}>
        <img src={`/assets/${img}`} alt={`Knowledge ${i + 1}`} />
        <div className="knowledge-hub-content">
          <h3 className="knowledge-hub-title">Smart Health Checkups for the Entire Family</h3>
          <p className="knowledge-hub-author">Written by: Dr. Nikita Verma</p>
        </div>
      </div>
    ))}
  </div>
</section>




{/* Callback & App Download */}
<section className="callback-section">
  <h2>Request a Call Back</h2>
  <p>Need assistance with tests, packages or services? Request a call back from our health experts.</p>
  <button className="callback-btn">Request Call Back</button>

  <div className="app-download">
    <h3>Download Our App</h3>
    <div className="app-links">
      <a href="#"><img src="/assets/playstore.png" alt="Play Store" /></a>
      <a href="#"><img src="/assets/appstore.png" alt="App Store" /></a>
    </div>
  </div>
</section>

    </div>
  );
};

export default HealthBlog;
