import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
// import myself from "../../asset/festus3.png";
import myself from "../../asset/festus.png";
import HeaderSociial from "./HeaderSociial";
import { motion } from "framer-motion";
import Availability from "./Availability";
const variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.25,
    },
  },
};

const Header = () => {
  useEffect(() => {
    const line = document.querySelector(".header_box .vertical-line");
    if (line) {
      line.classList.add("animate-line");
    }
  }, []);

  return (
    <header id="home">
      <motion.div
        className="header_container"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>Hi!, I am Aderibigbe Festus</h1>
        <p>
          I'm a <strong>FRONTEND DEVELOPER</strong> passionate about building
          accessible and user friendly websites.
        </p>
        <div className="me">
          <img src={myself} alt="profile" />
        </div>
        <Availability />
        <CTA />

        <HeaderSociial />
      </motion.div>
      <div className="header_box">
        <div className="header_box_left">Imaginative Ideas</div>
        <div className="vertical-line"></div>
        <div className="header_box_right">Into Reality</div>
      </div>
    </header>
  );
};

export default Header;
