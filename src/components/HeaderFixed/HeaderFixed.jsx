import React, { useEffect, useState } from "react";
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
  const [active, setActive] = useState("#");
  const [show, handleShow] = useState(false);

  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header_fixed_container ${show && "nav_background"}`}>
      <div className="header_logo">
        <a href="#">
          <img src={NewLogo} alt="logo" />
        </a>
      </div>

      <div onClick={handleClick} className="menu">
        {clicked ? <MdCancel /> : <HiMenuAlt2 />}
      </div>

      <div className={clicked ? "header_link active" : "header_link"}>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => setActive("#")}
              className={active === "#" ? "active" : ""}
            >
              <AiOutlineHome className="list_icon" />
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActive("#about")}
              className={active === "#about" ? "active" : ""}
            >
              <AiOutlineUser className="list_icon" />
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActive("#portfolio")}
              className={active === "#portfolio" ? "active" : ""}
            >
              <MdHomeRepairService className="list_icon" />
              PORTFOLIO
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActive("#skills")}
              className={active === "#skills" ? "active" : ""}
            >
              <BiBook className="list_icon" />
              SKILLS
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setActive("#contact")}
              className={active === "#contact" ? "active" : ""}
            >
              <MdPermContactCalendar className="list_icon" />
              CONTACT
            </a>
          </li>
        </ul>
        <div className=" header_fixed_text">
          <h3>Have an idea?</h3>
          <p>Tell me about it</p>
        </div>
        <div className="heade_fixed_social">
          <a
            href="https://www.linkedin.com/in/aderibigbe-festus/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/AdeHimself12" target="_blank">
            <BsTwitter />
          </a>
          <a href="Mailto:festus891@yahoo.com" target="_blank">
            <MdEmail />
          </a>
          <a href="https://github.com/Festus891" target="_blank">
            <FaGithub />
          </a>
          <a href="https://wa.me/+2348143430827" target="_blank">
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderFixed;
