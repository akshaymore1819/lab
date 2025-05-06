import React from 'react';
import './HelpSupport.css';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HelpSupport = () => {
  const handleCall = () => window.location.href = "tel:8988988787";
  const handleWhatsApp = () => window.open("https://wa.me/8988988787");
  const handleEmail = () => window.location.href = "mailto:care@redcliffelabs.com";

  return (
    <div className="help-wrapper">
      <motion.div
        className="help-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="help-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Help & Support
        </motion.h1>

        <motion.div className="help-banner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h2>We're here to help!</h2>
          <p>
            If you have any queries related to any of our tests or packages, you can contact us using the options below.
          </p>
        </motion.div>

        <motion.div
          className="help-cards"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Phone */}
          <motion.div className="help-card" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} onClick={handleCall}>
            <FaPhone className="icon phone" />
            <div>
              <p className="label">Call</p>
              <p className="value">898 898 8787</p>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div className="help-card" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} onClick={handleWhatsApp}>
            <FaWhatsapp className="icon whatsapp" />
            <div>
              <p className="label">Message</p>
              <p className="value">Chat On WhatsApp</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div className="help-card" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} onClick={handleEmail}>
            <FaEnvelope className="icon email" />
            <div>
              <p className="label">Email</p>
              <p className="value">care@redcliffelabs.com</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Extra Sections */}
        <motion.div className="help-extra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <h3>For specific questions, get in touch below</h3>
          <h4>Help and Support</h4>
          <button>Check FAQ</button>
        </motion.div>

        <motion.div className="help-extra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <h4>Help and Support</h4>
          <h3>Have a Query?</h3>
        </motion.div>

        <motion.div className="help-extra" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <h4>Help and Support</h4>
          <button>Contact Us</button>
        </motion.div>

        <footer className="help-footer">Hospital Labs | Amravati</footer>
      </motion.div>
    </div>
  );
};

export default HelpSupport;
