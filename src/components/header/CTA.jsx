import React from "react";
import CV from "../../asset/Aderibigbe resume.pdf";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href="https://drive.google.com/file/d/1sEvWwK9AIjayq_7UU6J08d6Ct2Awb5-w/view?usp=sharing"
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
