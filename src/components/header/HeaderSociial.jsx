import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const HeaderSociial = () => {
  return (
    <>
      <div className="header_socials_left ">
        <a
          href="https://www.linkedin.com/in/aderibigbe-festus/"
          target="_blank"
        >
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a href="https://github.com/Festus891" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/AdeHimself12" target="_blank">
          <BsTwitterX />
        </a>
        <a href="https://wa.me/+2348143430827" target="_blank">
          <IoLogoWhatsapp />
        </a>
        <a href="Mailto:festus4537@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
      <div className="header_socials_right ">
        <a
          href="https://drive.google.com/file/d/1U6fdHRCesqkWh11RWY0qW1gFew7efAIh/view?usp=sharing"
          target="_blank"
        >
          My Resume
        </a>
      </div>
    </>
  );
};

export default HeaderSociial;
