// src/pages/Gallery.js
import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

/* Imports sab upar */
import img1 from "../assets/images/img-1.webp";
import img2 from "../assets/images/img-2.webp";
import img3 from "../assets/images/img-3.webp";
import img4 from "../assets/images/img-4.webp";
import img5 from "../assets/images/img-5.webp";
import img6 from "../assets/images/img-6.webp";
import img7 from "../assets/images/img-7.webp";
import img8 from "../assets/images/img-8.webp";
import img9 from "../assets/images/img-9.webp";
import img10 from "../assets/images/img-10.webp";
import img11 from "../assets/images/img-11.webp";
import img12 from "../assets/images/img-12.webp";
import img13 from "../assets/images/img-13.webp";
import img14 from "../assets/images/img-14.webp";
import img15 from "../assets/images/img-15.webp";
import img16 from "../assets/images/img-16.webp";
import img17 from "../assets/images/img-17.webp";
import img18 from "../assets/images/img-18.webp";
import img19 from "../assets/images/img-19.webp";
import img20 from "../assets/images/img-20.webp";
import img21 from "../assets/images/img-21.webp";
import img22 from "../assets/images/img-22.webp";
import img23 from "../assets/images/img-23.webp";
import img25 from "../assets/images/img-25.webp";
import img26 from "../assets/images/img-26.webp";

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
          <img src={img1} alt="Organizing Team"  />
        </div>

        <h2 className="gallery-heading">Event Highlights</h2>

        <div className="gallery-grid">
          {/* 3 Images Row */}
          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img14} alt="img14" loading="lazy" />
            <img src={img15} alt="img15" loading="lazy" />
            <img src={img16} alt="img16" loading="lazy" />
            <img src={img17} alt="img17" loading="lazy" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img18} alt="img18" loading="lazy" />
            <img src={img19} alt="img19" loading="lazy" />
          </div>
          
          <div className="row row-3">
            <img src={img2} alt="img2" loading="lazy" />
            <img src={img3} alt="img3" loading="lazy" />
            <img src={img4} alt="img4" loading="lazy" />
          </div>

          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img5} alt="img5" loading="lazy" />
            <img src={img6} alt="img6" loading="lazy" />
            <img src={img7} alt="img7" loading="lazy" />
            <img src={img8} alt="img8" loading="lazy" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img9} alt="img9" loading="lazy" />
            <img src={img10} alt="img10" loading="lazy" />
          </div>

          {/* 3 Images Row */}
          <div className="row row-3">
            <img src={img11} alt="img11" loading="lazy" />
            <img src={img12} alt="img12" loading="lazy" />
            <img src={img13} alt="img13" loading="lazy" />
          </div>



          {/* 4 Images Row */}
          <div className="row row-4">
            <img src={img20} alt="img20" loading="lazy" />
            <img src={img21} alt="img21" loading="lazy" />
            <img src={img22} alt="img22" loading="lazy" />
            <img src={img23} alt="img23" loading="lazy" />
          </div>

          {/* 2 Images Row → 1:2 ratio */}
          <div className="row row-2">
            <img src={img25} alt="img25" loading="lazy" />
            <img src={img26} alt="img26" loading="lazy" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
