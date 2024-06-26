import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderFixed.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
// import { GiCancel } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import NewLogo from "../../asset/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const HeaderFixed = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    setActive(path);
    setTimeout(() => {
      navigate(path);
    }, 300); // Adjust delay as needed
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={`header_fixed_container ${show && "nav_background"}`}>
      <div className="header_logo">
        <a href="#">
          <img src={NewLogo} alt="logo" />
        </a>
      </div>

      <div onClick={handleClick} className="menu">
        {menuOpen ? <MdCancel /> : <HiMenuAlt2 />}
      </div>

      <div className={menuOpen ? "header_link active" : "header_link"}>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("/")}
              className={active === "/" ? "active" : ""}
            >
              <AiOutlineHome className="list_icon" />
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("/#about")}
              className={active === "/#about" ? "active" : ""}
            >
              <AiOutlineUser className="list_icon" />
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handleLinkClick("/#portfolio")}
              className={active === "/#portfolio" ? "active" : ""}
            >
              <MdHomeRepairService className="list_icon" />
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleLinkClick("/#skills")}
              className={active === "/#skills" ? "active" : ""}
            >
              <BiBook className="list_icon" />
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleLinkClick("/#contact")}
              className={active === "/#contact" ? "active" : ""}
            >
              <MdPermContactCalendar className="list_icon" />
              CONTACT
            </a>
          </li>
        </ul>
        <div className="header_fixed_text">
          <h3>Have an idea?</h3>
          <p>Tell me about it</p>
        </div>
        <div className="header_fixed_social">
          <a
            href="https://www.linkedin.com/in/aderibigbe-festus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://twitter.com/AdeHimself12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="Mailto:festus891@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Festus891"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+2348143430827"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderFixed;
