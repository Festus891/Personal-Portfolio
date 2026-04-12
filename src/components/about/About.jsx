import React, { useEffect, useRef } from "react";
import "./about.css";
// import profile from "../../asset/festus3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const h4Animation = useAnimation();
  const pAnimation = useAnimation();

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  useEffect(() => {
    if (isInView) {
      h4Animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5 },
      });
      pAnimation.start("visible");
    } else {
      h4Animation.start({ x: "-100vw" });
      pAnimation.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.section id="about" className="containers" ref={ref}>
      {/* 🔥 Scroll Progress Glow */}
      <motion.div
        className="about_progress containers "
        style={{ scaleX: scrollYProgress }}
      />
      <div className="about_container containers">
        {/* LEFT SIDE */}
        <motion.div className="about_me">
          <motion.h4 animate={h4Animation} className="gradient_text">
            About Me
          </motion.h4>

          <motion.p variants={childVariants}>Little About me</motion.p>

          {/* Profile Image */}
          {/* <motion.div
            className="about_image"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={profile} alt="profile" />
          </motion.div> */}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about_content"
          variants={contentVariants}
          initial="hidden"
          animate={pAnimation}
        >
          <h2>Overview</h2>

          <motion.p variants={childVariants}>
            Hi, I'm <span className="highlight">Festus</span>, a{" "}
            <span className="highlight">Fullstack Developer</span> who builds
            scalable, high-performance web applications from concept to
            deployment.
          </motion.p>

          <motion.p variants={childVariants}>
            I specialize in crafting seamless user experiences on the frontend
            while engineering robust, efficient systems on the backend —
            ensuring everything works flawlessly together.
          </motion.p>

          <motion.p variants={childVariants}>
            I focus on delivering:
            <br />- Scalable and maintainable architectures
            <br />- Fast, responsive, and accessible interfaces
            <br />- Secure and efficient backend systems
            <br />- Smooth, engaging user experiences
          </motion.p>

          {/* 🔥 CARDS */}
          <motion.div className="about_cards" variants={contentVariants}>
            <motion.article
              className="about_card"
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 0 20px rgba(211,233,122,0.4)",
              }}
            >
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </motion.article>

            <motion.article
              className="about_card"
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 0 20px rgba(211,233,122,0.4)",
              }}
            >
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </motion.article>

            <motion.article
              className="about_card"
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 0 20px rgba(211,233,122,0.4)",
              }}
            >
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </motion.article>
          </motion.div>

          {/* 🔥 CTA */}
          <motion.a
            href="#contact"
            className="cta_btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Work Together →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
