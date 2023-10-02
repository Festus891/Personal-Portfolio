import React from "react";
import "./header.css";
import CTA from "./CTA";
import myself from "../../asset/festus3.png";
import HeaderSociial from "./HeaderSociial";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h1>Hello!, I'm Aderibigbe Festus</h1>
        <h2>
          I'm a <strong>FRONTEND DEVELOPER</strong>
        </h2>
        <div className="me">
          <img src={myself} alt="profile" />
        </div>

        <CTA />

        <HeaderSociial />
        <HeaderSociial />
      </div>
    </header>
  );
};

export default Header;
