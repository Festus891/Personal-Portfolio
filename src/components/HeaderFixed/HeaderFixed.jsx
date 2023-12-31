import React, { useEffect, useState } from "react";
import "./HeaderFixed.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import NewLogo from "../../asset/logo.png";

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
        {clicked ? <GiCancel /> : <GiHamburgerMenu />}
      </div>

      <ul className={clicked ? "header_link active" : "header_link"}>
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
            href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
          >
            <MdPermContactCalendar className="list_icon" />
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderFixed;
