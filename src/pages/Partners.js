// src/pages/Partners.js
import React from "react";
import { motion } from "framer-motion";
import "./Partners.css";
import partner1 from "../assets/images/partner-1.png";
import partner2 from "../assets/images/partner-2.png";
import partner3 from "../assets/images/partner-3.png";
import partner4 from "../assets/images/partner-4.png";
import partner5 from "../assets/images/partner-5.png";
import partner6 from "../assets/images/partner-6.png";
import partner7 from "../assets/images/partner-7.png";
import partner8 from "../assets/images/partner-8.png";
import partner9 from "../assets/images/partner-9.png";
import partner10 from "../assets/images/partner-10.png";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Partners = () => {
  return (
    <motion.div
      className="partners-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="partners-hero">Our Partners</section>

      {/* Partners Grid Section */}
      <section className="partners-content">
        {/* Row 1 - Single centered logo */}
        <div className="image-row row-1">
          <img src={partner1} alt="Partner 1" />
        </div>

        {/* Row 2 - Five logos */}
        <div className="image-row row-5">
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
          <img src={partner6} alt="Partner 6" />
        </div>

        {/* Row 3 - Four styled logos */}
        <div className="image-row row-4 last-row">
          <img src={partner7} alt="Partner 7" />
          <img src={partner8} alt="Partner 8" />
          <img src={partner9} alt="Partner 9" />
          <img src={partner10} alt="Partner 10" />
        </div>
      </section>
    </motion.div>
  );
};

export default Partners;
