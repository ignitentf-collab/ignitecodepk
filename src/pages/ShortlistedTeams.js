// src/pages/ShortlistedTeams.js
import React from "react";
import { motion } from "framer-motion";
import "./ShortlistedTeams.css";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const ShortlistedTeams = () => {
  return (
    <motion.div
      className="shortlisted-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="shortlisted-hero">Shortlisted Teams</section>

      {/* PDF Link Section */}
      <section className="shortlisted-content">
        <h2>Download the Shortlisted Teams List</h2>
        <a
          href="/Final_onsite_teams.pdf" // ✅ public folder se link
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-link"
        >
          View PDF
        </a>
      </section>
    </motion.div>
  );
};

export default ShortlistedTeams;
