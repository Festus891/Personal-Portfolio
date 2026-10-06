import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./HeaderFixed.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";

import {
  MdHomeRepairService,
  MdPermContactCalendar,
  MdCancel,
  MdEmail,
  MdDesignServices,
} from "react-icons/md";

import { HiMenuAlt2 } from "react-icons/hi";

import NewLogo from "../../asset/logo.png";

import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { motion } from "framer-motion";

const listVarant = {
  hover: {
    scale: 1.3,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },

  open: {
    opacity: 1,
    originX: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },

  closed: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1.5,
    },
  },
};

const HeaderFixed = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header_fixed_container ${show ? "nav_background" : ""}`}>
      {/* LOGO */}
      <div className="header_logo">
        <Link to="home">
          <img
            src={NewLogo}
            alt="Festus logo"
            onClick={() => scroll.scrollToTop()}
          />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        onClick={handleClick}
        className="menu"
        whileTap={{
          scale: 0.97,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        {menuOpen ? <MdCancel /> : <HiMenuAlt2 />}
      </motion.div>

      {/* NAVIGATION */}
      <motion.div className={menuOpen ? "header_link active" : "header_link"}>
        <motion.ul>
          {/* HOME */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineHome className="list_icon" />
              HOME
            </Link>
          </motion.li>

          {/* ABOUT */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <AiOutlineUser className="list_icon" />
              ABOUT
            </Link>
          </motion.li>

          {/* SERVICE & EXPERTISE */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="service"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <MdDesignServices className="list_icon" />
              SERVICE & EXPERTISE
            </Link>
          </motion.li>

          {/* PORTFOLIO */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <MdHomeRepairService className="list_icon" />
              PORTFOLIO
            </Link>
          </motion.li>

          {/* SKILLS */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <BiBook className="list_icon" />
              SKILLS
            </Link>
          </motion.li>

          {/* CONTACT */}
          <motion.li
            variants={listVarant}
            whileHover="hover"
            whileInView="open"
            initial="closed"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              <MdPermContactCalendar className="list_icon" />
              CONTACT
            </Link>
          </motion.li>
        </motion.ul>

        {/* CTA TEXT */}
        <div className="header_fixed_text">
          <h3>Have an idea?</h3>
          <p>Tell me about it</p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="header_fixed_social">
          <a
            href="https://www.linkedin.com/in/aderibigbe-festus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://x.com/AdeHimself12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <BsTwitterX />
          </a>

          <a href="mailto:festus891@yahoo.com" aria-label="Email">
            <MdEmail />
          </a>

          <a
            href="https://github.com/Festus891"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/2348143430827"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderFixed;
