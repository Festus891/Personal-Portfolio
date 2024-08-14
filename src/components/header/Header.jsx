import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
// import myself from "../../asset/festus3.png";
import myself from "../../asset/festus.png";
import HeaderSociial from "./HeaderSociial";
import { motion } from "framer-motion";
import Availability from "./Availability";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between animations of child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: -1, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Aderibigbe Festus .A</motion.h1>
        <motion.p variants={itemVariants}>
          I'm a <strong>FRONTEND DEVELOPER</strong> passionate about building
          accessible and user friendly websites.
        </motion.p>
        {/* <p> 
          I blend creativity with technical expertise to cook up lightning-fast
          websites and apps that solve real problems and leave users hungry for
          more.
        </p> */}
        <motion.div className="me" variants={itemVariants}>
          <img src={myself} alt="profile" />
        </motion.div>
        <Availability />
        <CTA />

        <HeaderSociial />
      </motion.div>
      <div className="header_box">
        <div className="header_box_left" variants={itemVariants}>
          Transforming Ideas Into Reality{" "}
        </div>
        <div className="vertical-line"></div>
        <div className="header_box_right" variants={itemVariants}>
          Through Coding And Design.
        </div>
      </div>
    </header>
  );
};

export default Header;
