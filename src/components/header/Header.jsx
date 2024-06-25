import React from "react";
import "./header.css";
import CTA from "./CTA";
import myself from "../../asset/festus3.png";
import HeaderSociial from "./HeaderSociial";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h1>Hi!, I am Aderibigbe Festus</h1>
        <p>
          I'm a <strong>FRONTEND DEVELOPER</strong> passionate about building
          accessible and user friendly websites.
        </p>
        <div className="me">
          <img src={myself} alt="profile" />
        </div>

        {/* <CTA /> */}

        <HeaderSociial />
      </div>
      <div className="horizontal-line"></div>
    </header>
  );
};

export default Header;
