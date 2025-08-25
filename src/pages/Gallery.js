// src/pages/Gallery.js
import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

/* Imports sab upar */
import img1 from "../assets/images/img-1.jpeg";
import img2 from "../assets/images/img-2.jpeg";
import img3 from "../assets/images/img-3.jpeg";
import img4 from "../assets/images/img-4.jpeg";
import img5 from "../assets/images/img-5.jpeg";
import img6 from "../assets/images/img-6.jpeg";
import img7 from "../assets/images/img-7.jpeg";
import img8 from "../assets/images/img-8.jpeg";
import img9 from "../assets/images/img-9.jpeg";
import img10 from "../assets/images/img-10.jpeg";
import img11 from "../assets/images/img-11.jpeg";
import img12 from "../assets/images/img-12.jpeg";
import img13 from "../assets/images/img-13.jpeg";
import img14 from "../assets/images/img-14.jpeg";
import img15 from "../assets/images/img-15.jpeg";
import img16 from "../assets/images/img-16.jpeg";
import img17 from "../assets/images/img-17.jpeg";
import img18 from "../assets/images/img-18.jpeg";
import img19 from "../assets/images/img-19.jpeg";
import img20 from "../assets/images/img-20.jpeg";
import img21 from "../assets/images/img-21.jpeg";
import img22 from "../assets/images/img-22.jpeg";
import img23 from "../assets/images/img-23.jpeg";
import img25 from "../assets/images/img-25.jpeg";
import img26 from "../assets/images/img-26.jpeg";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Gallery = () => {
  return (
    <motion.div
      className="gallery-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="gallery-hero">
        <h1>Gallery</h1>
      </section>

      {/* Gallery Section */}
      <section className="gallery-content">
        <h2 className="gallery-heading">The Organizing Team</h2>
        <div className="single-image">
          <img src={img1} alt="Organizing Team" />
        </div>

        <h2 className="gallery-heading">Event Highlights</h2>

        <div className="gallery-grid">
          {/* 3 Images Row */}
          <div className="row row-3">
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
          </div>

          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img9} alt="img9" />
            <img src={img10} alt="img10" />
          </div>

          {/* 3 Images Row */}
          <div className="row row-3">
            <img src={img11} alt="img11" />
            <img src={img12} alt="img12" />
            <img src={img13} alt="img13" />
          </div>

          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img14} alt="img14" />
            <img src={img15} alt="img15" />
            <img src={img16} alt="img16" />
            <img src={img17} alt="img17" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img18} alt="img18" />
            <img src={img19} alt="img19" />
          </div>

          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img20} alt="img20" />
            <img src={img21} alt="img21" />
            <img src={img22} alt="img22" />
            <img src={img23} alt="img23" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img25} alt="img25" />
            <img src={img26} alt="img26" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
