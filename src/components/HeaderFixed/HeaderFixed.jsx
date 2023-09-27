import React from "react";
import "./HeaderFixed.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import NewLogo from "../../asset/logo.png";

import { useState } from "react";

const HeaderFixed = () => {
  const [active, setActive] = useState("#");

  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  return (
    <div className="header_fixed_container">
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
            onClick={() => setActive("#experience")}
            className={active === "#eskills" ? "active" : ""}
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
