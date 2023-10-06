import React from "react";
// import CV from "../../asset/Festus_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1HRdxS5iiNBHjhxU8WCtRxMjhEdWpp8X8/view?usp=drive_link"
        download
        className="btn"
        target="_blank"
      >
        Download Cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire me
      </a>
    </div>
  );
};

export default CTA;
