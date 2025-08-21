// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const About = () => {
  return (
    <motion.div
      className="whycodepk-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="whycodepk-hero"></section>

      {/* Main Content */}
      <section className="whycodepk-content">
        <h2>Why Participate in CodePK?</h2>
        <p>
          CodePK is more than just a competition – it's a platform for
          identifying, nurturing, and showcasing the brightest programming minds
          in Pakistan.
        </p>
        <p>
          Through CodePK, students can sharpen their coding skills, gain
          confidence, and connect with industry leaders and peers from across
          the country.
        </p>

        <h2>Key Reasons to Participate:</h2>
        <ul>
          <li>Improve real-world problem-solving skills</li>
          <li>National recognition and certification</li>
          <li>Exciting prizes and internship opportunities</li>
          <li>Exposure to competitive programming culture</li>
          <li>Chance to qualify for international competitions</li>
        </ul>

        <h2>Objectives</h2>
        <ul>
          <li>
            Skill Development: Improve/optimize coding and problem‑solving
            skills.
          </li>
          <li>
            Problem Solving: Solve challenging problems and improve ability to
            tackle complex issues.
          </li>
          <li>
            Community Building: Connect and share your passion for coding.
          </li>
          <li>
            Competition: Foster a spirit of healthy competition and build a
            sense of community.
          </li>
          <li>
            Time Management & Pressure Handling: Work efficiently under
            pressure.
          </li>
          <li>
            Promoting Innovation: Encourage novel algorithms and solutions.
          </li>
          <li>
            Identifying Talent: Get job offers, scholarships, or other
            opportunities.
          </li>
          <li>Exposure to New Technologies: Be a more versatile programmer.</li>
          <li>
            Global Representation: Qualify for international competitions.
          </li>
        </ul>

        <h2>Format of the Competition</h2>
        <p>
          The competition will be held in phases – online as a preliminary
          phase, and on-site for those who qualify. Proposed languages: JAVA,
          C/C++/.Net, and Python.
        </p>
        <p>
          Regional training sessions and mock rounds will be held in major
          cities. Finalists will be invited to compete on-site, and winners
          selected by score.
        </p>
        <p>
          Computer Science/Engineering students are encouraged to participate.
        </p>
      </section>

      {/* Footer */}
      {/* <footer className="footer">
        <p>2025 © Ignite | CodePK Programming Competition</p>
      </footer> */}
    </motion.div>
  );
};

export default About;
