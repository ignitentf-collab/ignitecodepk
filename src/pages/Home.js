// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

// ✅ Import images
import logo1 from "../assets/images/logo-1.png";
import logo2 from "../assets/images/logo-2.png";
import logo3 from "../assets/images/logo-3.png";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Home = () => {
  return (
    <motion.div
      className="home-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            Digital Pakistan Speed Programming Competition{" "}
            <span className="logo-style">
              &lt;<span className="orange">code</span>PK&gt;
            </span>
          </h1>
          <p>
            Ignite presents CodePK – a national-level programming competition
            that identifies and promotes the best coding talent in Pakistan.
          </p>
          <a href="/about" className="cta-button">
            Learn More
          </a>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="section">
        <div className="container">
          <h2 className="section-heading">Overview</h2>
          <p>
            Digital Pakistan Speed Programming Competition (codePK) will be a
            team-based programming competition that fosters problem-solving,
            programming and team work skills amongst the participants.
          </p>
          <p>
            This competition will provide opportunities to interact,
            demonstrate, and improve teamwork, programming, and problem-solving
            skills. The platform is for academia, industry, and the community to
            shine the spotlight on and raise the aspirations of the next
            generation of computing professionals as they pursue excellence.
          </p>
          <p>
            The brain teaser games not only help in becoming a good problem
            solver but also help in accepting the challenge and acquiring skills
            under pressure. For those who really enjoy solving complex problems
            and dealing with challenging things in life then jumping into
            programming is the best career option for them.
          </p>
        </div>
      </section>

      {/* SUPPORTED LANGUAGES */}
      <section id="languages" className="section">
        <div className="container">
          <h2 className="section-heading">Languages Supported</h2>
          <p>The competition supports the following languages:</p>
          <div className="language-logos">
            <img src={logo1} alt="C++" />
            <img src={logo2} alt="Java" />
            <img src={logo3} alt="Python" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
