import React, { useEffect, useState } from "react";
import loader from "../assets/images/loader-1.gif";
import "./Loader.css";

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // After mount, wait 500ms then start fade out animation
    const timeout = setTimeout(() => setHide(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page-loader ${hide ? "fade-out" : ""}`}>
      <img
        src={loader}
        alt="Loading..."
        className="loader-logo"
      />
    </div>
  );
};

export default Loader;
