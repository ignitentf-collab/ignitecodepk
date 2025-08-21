// src/pages/Rules.js
import React from "react";
import { motion } from "framer-motion";
import "./Rules.css";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

const Rules = () => {
  return (
    <motion.div
      className="rules-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="rules-hero">
        <div className="overlay"></div>
        <h1 className="hero-heading">Rules & Regulations</h1>
      </section>

      {/* Rules Content Section */}
      <section className="rules-content">
        <h2>Competition Rules</h2>
        <p>
          Ignite, at its sole and absolute discretion, reserves the right to
          disqualify any team and/or forfeit any Prize(s) that any participant
          may be eligible to receive if Ignite reasonably believes such
          participants, where applicable, is/are in breach of these Competition
          Rules.
        </p>

        <h2>Eligibility</h2>
        <p>
          Participants must compete as part of a team. A team is comprised of 3
          members. Only those members who register in a team are allowed to
          participate in the competition. Universities and Colleges can have
          multiple teams.
        </p>

        <h2>Registration</h2>
        <p>
          Upon registration, participants must submit required data, including
          their name, postal address, phone number, email address, etc. Ignite
          may use such information to contact participants, confirm their
          eligibility, and for other purposes related to the Competition.
        </p>
        <p>
          A participant may only create one (1) valid participant profile when
          registering for the competition. You risk disqualification if you
          participate in the Competition using multiple participant profiles.
        </p>

        <h2>Assignments</h2>
        <p>
          All assignments are developed and judged by experts. Assignments will
          be categorized as easy, medium, hard, and difficult. An assignment can
          be solved in any of the supported programming languages i.e., Java,
          C/C++, Python. Each assignment will have time and memory limits.
        </p>

        <h2>Plagiarism</h2>
        <p>
          Ignite reserves the right, at its sole discretion, to review the
          submissions to detect any act of plagiarism and to disqualify any team
          identified (during or after the competition) for inappropriate
          collaboration, reuse of material, and/or failing to meet the
          requirements as indicated by the contest rules.
        </p>

        <h2>Selection of Winners</h2>
        <p>
          Winners are selected based on overall score. In the case of a tie,
          time to complete the assignment will be considered as a factor to
          grade teams.
        </p>

        <h2>FAQs</h2>
        <dl>
          <dt>
            Q1: What is the purpose of the training/Mock session before the
            Competition?
          </dt>
          <dd>
            Answer: The purpose is to train participants for the Competition
            through hands-on training and a mock Session.
          </dd>

          <dt>Q2: What is the cost of a mock session?</dt>
          <dd>Answer: A Mock session will be offered free of cost.</dd>

          <dt>Q3: What is the benefit of attending the mock sessions?</dt>
          <dd>Answer: To understand and prepare for the Competition.</dd>

          <dt>Q4: Will the Competition be held virtually or physically?</dt>
          <dd>
            Answer: After closing the registration process, Ignite will arrange
            an online assessment for shortlisting the teams. Successful teams
            will be invited for an on-site competition.
          </dd>

          <dt>Q5: Is there a fee/cost to join the Challenge?</dt>
          <dd>Answer: No, there is no fee for joining the competition.</dd>

          <dt>Q6: What are the Awards?</dt>
          <dd>
            Answer:
            <ul>
              <li>1st prize PKR. 1,500,000/-</li>
              <li>2nd prize PKR. 1,000,000/-</li>
              <li>3rd prize PKR. 500,000/-</li>
              <li>
                Sponsorships for participation in international competitions.
              </li>
            </ul>
          </dd>

          <dt>Q7: Is this competition only for university students?</dt>
          <dd>
            Answer: We welcome all school, college, and university students
            under the age of 25 to enroll in the contest.
          </dd>

          <dt>
            Q8: Can we make a team from multiple universities/institutions?
          </dt>
          <dd>
            Answer: NO, the Team should be formed within the same university.
          </dd>
        </dl>
      </section>

      {/* <footer className="footer">
        <p>2025 © Ignite | CodePK Programming Competition</p>
      </footer> */}
    </motion.div>
  );
};

export default Rules;
