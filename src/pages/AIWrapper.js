import React, { useState, useEffect } from "react";
import "./AIWrapper.css";
import AIcomp from "../assets/images/AIcomp.jpg";

const AIWrapper = () => {
  // ✅ Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("2025-09-30T23:59:59").getTime(); // 🔹 yahan apni deadline set karen
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = deadline - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="ai-wrapper-container">
        {/* ✅ Hero Section */}
        <div className="ai-hero">
          <img
            src={AIcomp}
            alt="AI Competition"
            className="ai-wrapper-banner"
          />
        </div>

        <p>
          The Digital Pakistan AI Wrapper Competition 2025 is a national-level
          challenge aiming to identify and promote AI-based solutions tailored
          to local challenges in Pakistan. The competition will be conducted in
          two stages – Regional Rounds and a Grand Finale in Islamabad –
          covering four domains.
        </p>

        <h2>DOMAINS</h2>
        <p>
          Participants will be required to address real, local problems within
          the chosen domain.
        </p>

        {/* ✅ Education */}
        <div className="ai-card">
          <h3>Education (EdTech)</h3>
          <ul>
            <li>Digital access to quality education in underserved regions</li>
            <li>Personalized learning & adaptive assessment</li>
            <li>AI-powered learning analytics to improve outcomes</li>
            <li>Accessibility for students with special needs</li>
          </ul>
        </div>

        {/* ✅ Health */}
        <div className="ai-card">
          <h3>Health (HealthTech)</h3>
          <ul>
            <li>Early disease detection using AI</li>
            <li>Health record digitization & predictive analytics</li>
            <li>Remote diagnostics & telemedicine AI solutions</li>
            <li>AI-assisted drug interaction & prescription safety</li>
          </ul>
        </div>

        {/* ✅ Governance */}
        <div className="ai-card">
          <h3>Governance (GovTech)</h3>
          <ul>
            <li>Citizen service automation & complaint redressal</li>
            <li>AI-driven policy decision support systems</li>
            <li>Fraud detection in tax, subsidies & public finance</li>
            <li>Transparency & accountability tools using AI</li>
          </ul>
        </div>

        {/* ✅ Climate */}
        <div className="ai-card">
          <h3>Climate (Climate-Tech)</h3>
          <ul>
            <li>AI-powered disaster prediction & response planning</li>
            <li>Air quality monitoring & public health advisories</li>
            <li>AI for climate-driven agricultural planning</li>
            <li>Flood/drought risk analysis using satellite & IoT data</li>
          </ul>
        </div>

        {/* ✅ Financial */}
        <div className="ai-card">
          <h3>Financial (FinTech)</h3>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>

        <h2>EVALUATION PROCESS</h2>
        <ol>
          <li>
            Initial assessment will be conducted to verify eligibility,
            completeness, and compliance.
          </li>
          <li>
            Regional Round Evaluation: A panel of judges will assess
            domain-specific projects and assign score based on the prescribed
            evaluation matrix.
          </li>
          <li>
            Final Round Evaluation: A panel of judges will assess
            domain-specific projects with increased emphasis on working
            prototypes and scalability.
          </li>
        </ol>

        <h2>Evaluation Criteria:</h2>
        <p>
          The following criteria would be applied on assessment of
          projects/solutions.
        </p>

        <ul className="ai-criteria">
          <li>
            <strong>Problem Relevance (15%)</strong>
            <br />
            Alignment with Pakistani context & domain challenges
          </li>
          <li>
            <strong>Innovation & Creativity (20%)</strong>
            <br />
            Originality and novelty of the AI wrapper solution
          </li>
          <li>
            <strong>Technical Feasibility (15%)</strong>
            <br />
            Architecture, algorithms, data handling
          </li>
          <li>
            <strong>Use of Local Datasets (10%)</strong>
            <br />
            Preference to validated local/national datasets
          </li>
          <li>
            <strong>Impact Potential (15%)</strong>
            <br />
            Scalability, replicability, societal/economic benefit
          </li>
          <li>
            <strong>Presentation & Communication (5%)</strong>
            <br />
            Clarity and persuasiveness during pitching
          </li>
          <li>
            <strong>Prototype Functionality (15%)</strong>
            <br />
            Working demonstration, accuracy and usability
          </li>
          <li>
            <strong>Ethical Compliance (5%)</strong>
            <br />
            Privacy, bias avoidance, responsible AI
          </li>
        </ul>

        {/* ✅ Countdown + Register Button at the bottom */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h3 className="ai-countdown">
            Registration closes in:{" "}
            <span>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </span>
          </h3>
          <a
            href="https://forms.gle/7Dh6FFpZTBCYsxBk7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ai-register-btn">Get Registered</button>
          </a>
        </div>
      </div>
      <footer className="ai-footer">
        <p>
          © 2025 Digital Pakistan AI Wrapper Competition. All rights reserved.
        </p>
      </footer>
    </>
  );
  
};

export default AIWrapper;
