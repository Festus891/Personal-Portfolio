import React from "react";
import CV from "../../asset/Aderibigbe resume.pdf";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href="https://drive.google.com/file/d/18QMV8Hxrf89sWcxNg2a4Tl8taR4j_2Vu/view?usp=sharing"
        className="btn"
        target="_blank"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        whileHover={{
          scale: [1, 1.1, 1, 1.1, 1, 1.1],
        }}
      >
        Resume
        <FaDownload style={{ paddingLeft: "5px", paddingTop: "2px" }} />
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
