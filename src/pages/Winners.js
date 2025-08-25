// src/pages/Calendar.js
import React from "react";
import { motion } from "framer-motion";
import "./Winners.css";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Calendar = () => {
  const winners = [
    {
      id: 1,
      team: "SundarSTEM Comp",
      institution: "SundarSTEM School, Sundar Sharif, Lahore",
    },
    {
      id: 2,
      team: "SundarSTEM ATTACK ON ICPC",
      institution: "SundarSTEM School, Sundar Sharif, Lahore",
    },
    {
      id: 3,
      team: "SundarSTEM Leftovers",
      institution: "SundarSTEM School, Sundar Sharif, Lahore",
    },
    {
      id: 4,
      team: "3AM",
      institution: "National University of Science & Technology, Islamabad",
    },
    {
      id: 5,
      team: "AC47",
      institution: "GIKI Institute of Engineering Sciences & Technology, Swabi",
    },
    {
      id: 6,
      team: "Teen Patti",
      institution:
        "National University of Computer & Emerging Sciences, Karachi",
    },
    {
      id: 7,
      team: "Jannati Coders",
      institution:
        "National University of Computer & Emerging Sciences, Karachi",
    },
    { id: 8, team: "Code Paladins", institution: "Habib University, Karachi" },
    {
      id: 9,
      team: "Compile Crew",
      institution: "National University of Science & Technology, Quetta",
    },
    {
      id: 10,
      team: "GATO",
      institution:
        "Punjab University College of Information Technology, Lahore",
    },
  ];

  return (
    <motion.div
      className="calendar-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero section with background image now in CSS */}
      <section className="calendar-hero">
        <div className="overlay"></div>
        <h1 className="hero-heading">Event Winners</h1>
      </section>

      {/* Winners details section */}
      <section className="winners-section">
        <h2>Top Teams</h2>
        <div className="winners-grid">
          {winners.map((winner) => (
            <div key={winner.id} className="winner-card">
              <div className="winner-rank">#{winner.id}</div>
              <h3 className="winner-team">{winner.team}</h3>
              <p className="winner-institution">{winner.institution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="footer">
        <p>2025 © Ignite | CodePK Programming Competition</p>
      </footer> */}
    </motion.div>
  );
};

export default Calendar;
