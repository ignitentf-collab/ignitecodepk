// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const current = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile toggle state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo hover-logo">
        &lt;<span className="orange">code</span>PK&gt;
      </div>

      {/* ✅ Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={current === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={current === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/rules"
          className={current === "/rules" ? "active" : ""}
          onClick={closeMenu}
        >
          Rules
        </Link>
        <Link
          to="/calendar"
          className={current === "/calendar" ? "active" : ""}
          onClick={closeMenu}
        >
          Calendar
        </Link>
        <Link
          to="/partners"
          className={current === "/partners" ? "active" : ""}
          onClick={closeMenu}
        >
          Partners
        </Link>
        <Link
          to="/shortlisted-teams" // ✅ Fixed route
          className={current === "/shortlisted-teams" ? "active" : ""}
          onClick={closeMenu}
        >
          Shortlisted Teams
        </Link>
        <Link
          to="/gallery"
          className={current === "/gallery" ? "active" : ""}
          onClick={closeMenu}
        >
          Gallery
        </Link>
        <button className="search-button">🔍</button>
      </nav>
    </header>
  );
};

export default Navbar;
