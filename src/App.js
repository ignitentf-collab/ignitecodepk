// ✅ App.js (Fully updated — copy/paste)

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer import
import Loader from "./components/Loader"; // ✅ Loader added
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Calendar from "./pages/Calendar";
import Partners from "./pages/Partners";
import ShortlistedTeams from "./pages/ShortlistedTeams"; // ✅ New page import

import AIWrapper from "./pages/AIWrapper";

// Optional Pages
// import NotFound from "./pages/NotFound";

// ✅ This component handles routing + loading logic
function AnimatedRoutes({ setLoading }) {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // duration of loader
    return () => clearTimeout(timeout);
  }, [location.pathname, setLoading]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/shortlisted-teams" element={<ShortlistedTeams />} />{" "}
        {/* ✅ New route */}
        <Route path="/AI-Wrapper-Competition" element={<AIWrapper />} />
        {/* Optional routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

// ✅ Custom layout component to conditionally show Navbar/Footer
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAIPage = location.pathname === "/AI-Wrapper-Competition";

  return (
    <>
      {!isAIPage && <Navbar />}
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1 }}>{children}</div>
        {!isAIPage && <Footer />}
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ScrollToTop />
      {loading && <Loader />} {/* ✅ Loader shows only during route change */}
      <LayoutWrapper>
        <AnimatedRoutes setLoading={setLoading} />
      </LayoutWrapper>
    </>
  );
}

export default App;
