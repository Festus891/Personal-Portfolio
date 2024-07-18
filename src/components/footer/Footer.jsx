import React, { useEffect, useState } from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <footer>
      <div className="footer_social">
        <h2>Don't be a stranger!</h2>
        <p>Let connet, let's chat</p>
        <a href="https://wa.me/+2348143430827" target="_blank">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer_copyright">
        <p>&copy; Copyright - Aderibigbe festus 2023</p>
        <p>{formatDate(currentTime)}</p>
      </div>
    </footer>
  );
};

export default Footer;
