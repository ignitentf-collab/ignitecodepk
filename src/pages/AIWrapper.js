import React, { useState, useEffect } from "react";
import "./AIWrapper.css";
import AIcomp from "../assets/images/AIcomp.jpg";
import LeftLogo from "../assets/images/techdestination-logo.png";
import RightLogo from "../assets/images/ignite-logo.png";
import { Helmet } from "react-helmet-async";
import { FaArrowUp } from "react-icons/fa"; // 👈 Scroll to top arrow

// ✅ Domain logos
import ETech from "../assets/images/ETech.png";
import HTech from "../assets/images/HTech.png";
import GTech from "../assets/images/GTech.png";
import CTech from "../assets/images/CTech.png";
import FTech from "../assets/images/FTech.png";
import Timeline from "../assets/images/Timeline.png";

const AIWrapper = () => {
  // ✅ Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date("2025-09-30T23:59:59").getTime();
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

  // ✅ Tabs
  const [activeTab, setActiveTab] = useState("about");

  // ✅ Scroll-to-top logic
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>AIWrapper Competition</title>
      </Helmet>

      <div className="ai-wrapper-container">
        {/* ✅ Logos */}
        <div className="ai-logos">
          <img src={LeftLogo} alt="Left Logo" className="top-logo" />
          <img src={RightLogo} alt="Right Logo" className="top-logo" />
        </div>

        {/* ✅ Hero Banner */}
        <div className="ai-hero">
          <img
            src={AIcomp}
            alt="AI Competition"
            className="ai-wrapper-banner"
          />
        </div>

        {/* ✅ Sticky Tabs */}
        <div className="ai-tabs-bar">
          <button
            className={`ai-tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`ai-tab-btn ${
              activeTab === "objectives" ? "active" : ""
            }`}
            onClick={() => setActiveTab("objectives")}
          >
            Objectives
          </button>
          <button
            className={`ai-tab-btn ${activeTab === "domains" ? "active" : ""}`}
            onClick={() => setActiveTab("domains")}
          >
            Domains
          </button>
          <button
            className={`ai-tab-btn ${
              activeTab === "evaluation" ? "active" : ""
            }`}
            onClick={() => setActiveTab("evaluation")}
          >
            Evaluation
          </button>
          <button
            className={`ai-tab-btn ${activeTab === "timeline" ? "active" : ""}`}
            onClick={() => setActiveTab("timeline")}
          >
            Timeline
          </button>
          <button
            className={`ai-tab-btn ${
              activeTab === "guidelines" ? "active" : ""
            }`}
            onClick={() => setActiveTab("guidelines")}
          >
            Guidelines
          </button>
          <button
            className={`ai-tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* ✅ TAB CONTENT — EXACT your content */}
        <div className="ai-tab-content">
          {activeTab === "about" && (
            <>
              <p>
                The AI Wrapper Competition 2025, under the Digital Pakistan
                initiative, is a national-level challenge aiming to identify and
                promote AI-based solutions tailored to local challenges in
                Pakistan. This strategic initiative is aligned with Pakistan’s
                National AI Policy by fostering a skilled workforce, promoting
                ethical and explainable AI, and catalysing civic innovation in
                EdTech, Health-Tech, Gov-Tech, Fin-Tech and Climate-Tech.
              </p>
              <p>
                By mobilizing AI wrapper fellows and creating a pipeline of
                deployable solutions, it builds national capacity for real world
                AI adoption. Internationally, it meets global standards by
                leveraging cloud infrastructure, open datasets, and cross-sector
                collaboration. The competition elevates Pakistan’s AI profile by
                preparing teams for global stages reinforcing a sustainable,
                inclusive, and innovation-driven digital ecosystem.
              </p>
            </>
          )}

          {/* ✅ Objectives */}
          {activeTab === "objectives" && (
            <>
              <h2>OBJECTIVES</h2>
              <ul>
                <li>
                  To promote applied AI innovation in proposed priority areas
                </li>
                <li>
                  To build a community of 500+ AI fellows and produce 25+
                  prototypes
                </li>
                <li>
                  To inspire public sector digital transformation through
                  scalable solutions
                </li>
                <li>
                  Support entrepreneurship and incubation pathways for young
                  innovators
                </li>
                <li>
                  Position Pakistan in global AI competitions (AI for Good,
                  NeurIPS)
                </li>
                <li>To foster academia–industry–government collaboration</li>
              </ul>
            </>
          )}

          {/* ✅ Domains */}
          {activeTab === "domains" && (
            <>
              <h2>DOMAINS</h2>
              <p>
                Participants will be required to address real, local problems
                within the chosen domain.
              </p>

              <div className="ai-cards">
                {/* ✅ Education */}
                <div className="ai-card">
                  <img src={ETech} alt="EdTech Logo" className="domain-logo" />
                  <h3>Education (EdTech)</h3>
                  <ul>
                    <li>
                      Digital access to quality education in underserved regions
                    </li>
                    <li>Personalized learning & adaptive assessment</li>
                    <li>AI-powered learning analytics to improve outcomes</li>
                    <li>Accessibility for students with special needs</li>
                  </ul>
                </div>

                {/* ✅ Health */}
                <div className="ai-card">
                  <img
                    src={HTech}
                    alt="HealthTech Logo"
                    className="domain-logo"
                  />
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
                  <img src={GTech} alt="GovTech Logo" className="domain-logo" />
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
                  <img
                    src={CTech}
                    alt="ClimateTech Logo"
                    className="domain-logo"
                  />
                  <h3>Climate (Climate-Tech)</h3>
                  <ul>
                    <li>AI-powered disaster prediction & response planning</li>
                    <li>Air quality monitoring & public health advisories</li>
                    <li>AI for climate-driven agricultural planning</li>
                    <li>
                      Flood/drought risk analysis using satellite & IoT data
                    </li>
                  </ul>
                </div>

                {/* ✅ Finance */}
                <div className="ai-card">
                  <img src={FTech} alt="FinTech Logo" className="domain-logo" />
                  <h3>Financial (FinTech)</h3>
                  <ul>
                    <li>Tax fraud & anomaly detection</li>
                    <li>Smart complaint classification</li>
                    <li>License & permit automation</li>
                    <li>AI driven credit scoring & risk analysis</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* ✅ Evaluation */}
          {activeTab === "evaluation" && (
            <>
              <h2>EVALUATION PROCESS</h2>
              <ol>
                <li>
                  Initial assessment will be conducted to verify eligibility,
                  completeness, and compliance.
                </li>
                <li>
                  Regional Round Evaluation: A panel of judges will assess
                  domain-specific projects and assign score based on the
                  prescribed evaluation matrix.
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
            </>
          )}

          {/* ✅ Timeline */}
          {activeTab === "timeline" && (
            <>
              <h2>TIMELINE</h2>
              <img src={Timeline} alt="Timeline img" className="timeline-img" />
            </>
          )}

          {/* ✅ Guidelines */}
          {activeTab === "guidelines" && (
            <>
              <h2>GUIDELINES FOR PARTICIPANTS</h2>
              <ul>
                <li>
                  Participants may compete in only one of the four domains.
                </li>
                <li>
                  Solutions must address local problems in Pakistan and
                  demonstrate practical feasibility.
                </li>
                <li>
                  Both Regional and Final rounds require working prototypes (or
                  functional MVPs).
                </li>
                <li>
                  Participants must arrange all resources (hardware, software,
                  datasets, compute) required for solution development.
                </li>
                <li>
                  Datasets may be global, but locally validated datasets
                  (sources of data) from national institutions are preferred.
                </li>
                <li>
                  The core AI model or wrapper integration must be developed by
                  the team; off-the-shelf solutions without significant
                  customization will be disqualified.
                </li>
                <li>
                  Solutions must follow ethical AI principles: transparency,
                  fairness, privacy compliance.
                </li>
                <li>
                  Ignite will provide broad challenge themes but no direct
                  technical assistance.
                </li>
                <li>
                  All intellectual property will belong to the participants,
                  with due acknowledgment to Ignite.
                </li>
                <li>
                  Each team will consist of up to 2 members (individuals can
                  also apply)
                </li>
                <li>
                  Competition is open to all citizens of Pakistan – students,
                  faculty, researchers, industry professionals, entrepreneurs.
                </li>
                <li>
                  One (01) Minute (60 Sec only) Video of the Product/Concept
                  depicting all possible aspects of AI Wrapper should be
                  uploaded.
                </li>
              </ul>

              <h2>Core Technical Inclusions for AI Wrapper Solutions</h2>
              <p>
                The following checkpoints will be used to validate the AI
                Wrapper solution.
              </p>
              <h1>1. Base Model Integration</h1>
              <ul>
                <li>
                  Ability to connect with foundational models (e.g., LLMs,
                  vision models, speech models).
                </li>
                <li>
                  Support for multiple APIs/frameworks (OpenAI, Hugging Face,
                  LangChain, local LLMs etc.).
                </li>
              </ul>

              <h1>2. Abstraction Layer (Wrapper Logic)</h1>
              <ul>
                <li>
                  Standardized API endpoints for model requests and responses.
                </li>
                <li>
                  Middleware that handles prompts, input parsing, and response
                  normalization.
                </li>
              </ul>

              <h1>3. Multi-Modal Support (if applicable)</h1>
              <ul>
                <li>Text, Image, Audio, Video data handling.</li>
                <li>
                  Unified processing pipeline for different input/output
                  formats.
                </li>
              </ul>

              <h1>4. Orchestration & Multi-Agent Support</h1>
              <ul>
                <li>
                  Task decomposition and agent collaboration (e.g., planner,
                  executor, verifier agents).
                </li>
                <li>Workflow management for chaining multiple AI tasks.</li>
              </ul>

              <h1>5. Data Handling & Pre-/Post-Processing</h1>
              <ul>
                <li>Input sanitization, formatting, embedding generation.</li>
                <li>
                  Post-response refinement (validation, summarization, ranking).
                </li>
              </ul>

              <h1>6. Evaluation & Benchmarking Module</h1>
              <ul>
                <li>
                  Built-in evaluation metrics (accuracy, latency, hallucination
                  detection).
                </li>
                <li>Logging of model performance across tasks.</li>
              </ul>

              <h1>7. Scalability & Deployment Readiness</h1>
              <ul>
                <li>Containerized deployment (Docker, Kubernetes).</li>
                <li>Cloud-native compatibility (AWS, GCP, Azure).</li>
              </ul>

              <h1>8. Security & Compliance</h1>
              <ul>
                <li>Secure API calls with authentication.</li>
                <li>Data privacy compliance (GDPR-like rules).</li>
                <li>Prompt injection defense and content filtering.</li>
              </ul>

              <h1>9. Extensibility</h1>
              <ul>
                <li>
                  Plugin system for integrating external tools (e.g., search
                  engines, databases).
                </li>
                <li>
                  Support for connecting with enterprise applications (ERP, CRM,
                  BI tools).
                </li>
              </ul>

              <h1>10. Monitoring & Analytics</h1>
              <ul>
                <li>Real-time logs and dashboards for API usage.</li>
                <li>
                  Error tracking, model drift detection, and system health
                  checks.
                </li>
              </ul>

              <h1>11. Documentation & Standardization</h1>
              <ul>
                <li>Well-documented SDKs/APIs.</li>
                <li>Standard input-output schemas for interoperability.</li>
              </ul>
            </>
          )}

          {/* ✅ Register */}
          {activeTab === "register" && (
            <>
              <div className="ai-register-section">
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
            </>
          )}
        </div>
      </div>

      {/* ✅ Scroll-to-top button */}
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <footer className="ai-footer">
        <p>
          © 2025 Digital Pakistan AI Wrapper Competition. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default AIWrapper;
