// src/components/ScrollUp.js
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

import "./ScrollUp.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className={`scroll-up-button ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollUp;
