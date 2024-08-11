import React, { useEffect, useRef } from "react";
import "./about.css";
import profile from "../../asset/festus3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <motion.section id="about" ref={ref} className="container">
      <motion.div
        className="about_container container"
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
          transition: {
            type: "spring",
            stiffness: 300,
          },
        }}
      >
        <div className="about_me">
          <h4>About Me</h4>
        </div>

        <motion.div className="about_content">
          <p>
            - Hi, I'm Festus a Frontend web developer, I specialize in
            transforming design concepts into clean and user-friendly
            interfaces, whether it's crafting responsive websites or interactive
            functional websites . With a keen eye for detail and a passion for
            creativity
          </p>
          <p>
            - I have a deep understanding of seamlessly integrating frontend
            interfaces with backend services, APIs, and databases, ensuring
            smooth communication across the entire system."
          </p>
          <p>
            - I strive to deliver engaging, visually appealing, and functional
            solutions that exceed expectations . I am open to great job
            opportunities to collaborate, learn, and grow as a developer and
            creator. If you're interested in my skills and expertise and have a
            great opportunity for me, then please don't hesitate to connect with
            me. Let's work together to bring your ideas to life and make a real
            impact!
          </p>

          {/* <Link to="/moreAbout" className="more_about">
            MORE ABOUT ME
          </Link> */}

          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <small>80+ project</small>
            </article>
          </div> */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
