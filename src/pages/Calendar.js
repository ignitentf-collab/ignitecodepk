// src/pages/Calendar.js
import React from "react";
import { motion } from "framer-motion";
import "./Calendar.css";
import event1 from "../assets/images/event-1.jpg";
import event2 from "../assets/images/event-2.jpg";


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
      <section className="calendar-hero">Event Calendar</section>

      {/* Event details section */}
      <section className="event-details">
        <h2>Onsite Round at GIK Institute, Topi</h2>
        <p>16th and 17th of July, 2025</p>

        {/* Images row */}
        <div className="event-images">
          <img src={event1} alt="Event 1" />
          <img src={event2} alt="Event 2" />
        </div>
      </section>

      {/* <footer className="footer">
        <p>2025 © Ignite | CodePK Programming Competition</p>
      </footer> */}
    </motion.div>
  );
};

export default Calendar;
