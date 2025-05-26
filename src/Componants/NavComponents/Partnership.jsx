import "./Partnership.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

import img1 from "../../assets/part1.jpg";
import img2 from "../../assets/part2.jpg";
import img3 from "../../assets/part3.jpg";
import img4 from "../../assets/part4.jpg";
import img5 from "../../assets/part1.jpg";

// Testimonials Data
const testimonials = [
  {
    name: "Amit Verma",
    designation: "VP Partnerships, Healthify",
    feedback:
      "Redcliffe Labs has been instrumental in scaling our diagnostic integrations with minimal friction.",
  },
  {
    name: "Sneha Rao",
    designation: "Chief Medical Officer, MedLink",
    feedback:
      "Working with Redcliffe means seamless workflows and trustworthy reporting for our doctors.",
  },
  {
    name: "Ravi Iyer",
    designation: "CEO, Care24",
    feedback:
      "Their doorstep sample collection and turnaround times are unmatched in the homecare space.",
  },
];

const categories = [
  {
    name: "Disease Management Platforms",
    description:
      "We collaborate with disease management platforms to enhance patient outcomes and streamline care.",
    partners: ["Healthify", "DocOn", "Curefit"],
  },
  {
    name: "Report Consultation Platforms",
    description:
      "Integration with report consultation platforms provides expert insights directly from diagnostic data.",
    partners: ["MedLink", "eReports", "Clinico"],
  },
  {
    name: "Pharmacies",
    description:
      "Partnering with pharmacies for on‑site sample drop‑off and faster report delivery.",
    partners: ["1mg", "NetMeds", "Apollo Pharmacy"],
  },
  {
    name: "Corporates",
    description:
      "Corporate wellness programs backed by timely diagnostics for your employees’ health.",
    partners: ["TCS", "Infosys", "HCL"],
  },
  {
    name: "Corporate Wellness Platforms",
    description:
      "Seamless integration with wellness platforms to proactively monitor workforce health.",
    partners: ["HealthifyMe", "GOQii", "Truworth"],
  },
  {
    name: "Third-Party Administrators",
    description:
      "TPAs benefit from our streamlined diagnostics for rapid insurance claim processing.",
    partners: ["MediAssist", "Raksha", "Heritage Health"],
  },
  {
    name: "Insurance Companies",
    description:
      "Underwriting and preventive care modules integrated with leading insurers.",
    partners: ["ICICI Lombard", "HDFC Ergo", "Star Health"],
  },
  {
    name: "Financial Institutions",
    description:
      "Diagnostics tied into employee benefits and health financing solutions.",
    partners: ["Axis Bank", "SBI", "Bajaj Finance"],
  },
  {
    name: "PSUs and Panels",
    description:
      "Empanelled with PSUs for mandatory health checks and panel management.",
    partners: ["ONGC", "BHEL", "GAIL"],
  },
  {
    name: "Logistics Companies",
    description:
      "On‑the‑move health monitoring services for field and delivery staff.",
    partners: ["Delhivery", "BlueDart", "DTDC"],
  },
  {
    name: "Wellness Platforms",
    description:
      "Complete wellness suites powered by our diagnostic APIs and dashboards.",
    partners: ["Fitternity", "CureJoy", "InnerHour"],
  },
  {
    name: "EMR/ Clinic Management",
    description:
      "Deep EMR integrations for unified patient records and diagnostics.",
    partners: ["Practo", "MocDoc", "MediBuddy"],
  },
  {
    name: "Homecare",
    description:
      "Door‑step sample collection and home‑lab services for senior care.",
    partners: ["Care24", "Portea", "CallHealth"],
  },
  {
    name: "Verification",
    description:
      "Pre‑employment and background screening with lab‑verified health checks.",
    partners: ["IDfy", "AuthBridge", "Quinfy"],
  },
];

export default function Partnership() {
  const [activeTab, setActiveTab] = useState(categories[0].name);
  const currentCat = categories.find((c) => c.name === activeTab) || {};
  const testimonialRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const container = testimonialRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="partners-page-container">
      {/* Banner Section */}
      <section className="rl_banner_section">
        <div className="rl_banner_container">
          <div className="rl_banner_text">
            <h1>
              Invincible <span>Strategic Alliances</span> and{" "}
              <strong>Partnerships</strong>
            </h1>
          </div>
          <div className="rl_banner_image">
            <img src={img1} alt="Banner Graphic" />
          </div>
        </div>
      </section>

      {/* Why Redcliffe Section */}
      <section className="rl_why_redcliffe_section">
        <div className="rl_why_redcliffe_title">
          <h2>
            What Puts Up Redcliffe Labs as The Leading Diagnostic Partner?
          </h2>
        </div>
        <div className="rl_why_redcliffe_cards">
          {[img2, img3, img4, img5].map((img, i) => (
            <div className="rl_why_redcliffe_card" key={i}>
              <img src={img} alt={`Card ${i + 1}`} />
              <h3>
                {["Technology", "Coverage", "Revenue Models", "Services"][i]}
              </h3>
              <p>
                {[
                  "We ensure smoother, quicker and transparent operations with deep level integrations to automate the experience.",
                  "Redcliffe Labs has the highest geographical coverage with its services in over 150 cities...",
                  "We possess proven customization capabilities in optimizing pricing and offerings for all stakeholders.",
                  "Expect Ultralight Booking, Real-time Phlebo, Sample & Report Tracking, and Dedicated KAMs.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="rl_partners_section">
        <h2 className="rl_partners_heading">
          Why partners opt for <span>Redcliffe</span> as their diagnostics
          service provider?
        </h2>
        <div className="rl_partners_grid">
          {[...Array(8)].map((_, index) => (
            <div className="rl_partners_card" key={index}>
              <h3>{`Partner Feature ${index + 1}`}</h3>
              <p>{`Description of feature ${index + 1}`}</p>
            </div>
          ))}
        </div>
        <button className="rl_partners_view_more">View More</button>
      </section>

      {/* Categories Section */}
      <section className="rl_categories_section">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Glorifying Strategic Partners <br />
          <span>In Different Categories</span>
        </motion.h2>

        <motion.div
          className="rl_categories_tabs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {categories.map((tab, idx) => (
            <motion.button
              key={idx}
              className={`rl_category_tab ${
                activeTab === tab.name ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.1, backgroundColor: "#f0f4ff" }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          className="rl_category_desc"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="rl_category_card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{currentCat.name}</h3>
            <p>{currentCat.description}</p>

            <div className="partner-logos">
              {(currentCat.partners || []).map((partner, i) => (
                <motion.span
                  key={i}
                  className="partner-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
   
<section className="rlp_testimonials_section">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="rlp_testimonials_title"
  >
    What our partners say about <span>Redcliffe Labs</span>
  </motion.h2>

  <div className="rlp_testimonials_controls">
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollTestimonials(-1)}
    >
      ‹
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollTestimonials(1)}
    >
      ›
    </motion.button>
  </div>

  <motion.div
    ref={testimonialRef}
    className="rlp_testimonials_slider"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="rlp_testimonial_card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="quote_mark"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          “
        </motion.div>
        <p className="testimonial_feedback">{testimonial.feedback}</p>
        <div className="testimonial_author">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.designation}</span>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

{/* Contact Form Section */}
<section className="rlp_contact_section">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="rlp_contact_title"
  >
    Get in Touch
  </motion.h2>
  <form
    className="rlp_contact_form"
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Form submitted!");
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
      required
      pattern="^[A-Za-z\s]+$"
      title="Name should contain only letters and spaces"
      className="rlp_contact_input"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="rlp_contact_input"
    />
    <input
      type="tel"
      name="mobile"
      placeholder="Mobile Number"
      required
      pattern="^[0-9]{10}$"
      title="Enter a valid 10-digit mobile number"
      className="rlp_contact_input"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      required
      className="rlp_contact_textarea"
    />
    <button type="submit" className="rlp_contact_button">
      Submit
    </button>
  </form>
</section>

    </div>
  );
}
