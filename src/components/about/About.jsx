import React, { useEffect, useRef } from "react";
import "./about.css";
import profile from "../../asset/festus3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Animation hook for the h4 tag
  const h4Animation = useAnimation();

  // Animation hook for the p tags
  const pAnimation = useAnimation();

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      // Animate h4 tag
      h4Animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });

      // Animate p tags
      pAnimation.start("visible");
    } else {
      // Reset h4 tag
      h4Animation.start({ x: "-100vw" });

      // Reset p tags
      pAnimation.start("hidden");
    }
  }, [isInView, h4Animation, pAnimation]);

  return (
    <motion.section id="about" className="containers" ref={ref}>
      <motion.div className="about_container containers">
        <motion.div className="about_me">
          <motion.h4 animate={h4Animation}>About Me</motion.h4>
        </motion.div>

        <motion.div
          className="about_content"
          variants={contentVariants}
          initial="hidden"
          animate={pAnimation}
        >
          <motion.p variants={childVariants}>
            - Hi, I'm Festus a Frontend web developer, I specialize in
            transforming design concepts into clean and user-friendly
            interfaces, whether it's crafting responsive websites or interactive
            functional websites . With a keen eye for detail and a passion for
            creativity
          </motion.p>
          <motion.p variants={childVariants}>
            - I have a deep understanding of seamlessly integrating frontend
            interfaces with backend services, APIs, and databases, ensuring
            smooth communication across the entire system."
          </motion.p>
          <motion.p variants={childVariants}>
            - I strive to deliver engaging, visually appealing, and functional
            solutions that exceed expectations . I am open to great job
            opportunities to collaborate, learn, and grow as a developer and
            creator. If you're interested in my skills and expertise and have a
            great opportunity for me, then please don't hesitate to connect with
            me. Let's work together to bring your ideas to life and make a real
            impact!
          </motion.p>

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
