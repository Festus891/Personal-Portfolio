import React from "react";
import CV from "../../asset/Aderibigbe resume.pdf";
import { FaDownload } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1G4axHneuV7BCXLQmBHtFewoAmjUKFhED/view?usp=drive_link"
        className="btn"
        target="_blank"
      >
        Resume
        <FaDownload />
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default CTA;
