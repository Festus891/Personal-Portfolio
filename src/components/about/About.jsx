import React, { useEffect } from "react";
import "./about.css";
import profile from "../../asset/festus3.png";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const About = () => {
  const { ref, inView } = useInView();
  const animations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.4,
        },
      });
    }

    if (!inView) {
      animations.start({ x: "-100vw" });
    }
  }, [inView]);

  console.log("about in view");
  return (
    <motion.section id="about" ref={ref} className="container">
      <motion.div
        className="about_container container" /*animate={animations}*/
      >
        <div className="about_me">
          <h4>About Me</h4>
        </div>

        <motion.div className="about_content">
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

          <p>
            I'm Festus. I'm a Frontend web developer, I specialize in
            transforming design concepts into clean and user-friendly
            interfaces, whether it's crafting responsive websites or interactive
            functional websites . With a keen eye for detail and a passion for
            creativity, I strive to deliver engaging, visually appealing, and
            functional solutions that exceed expectations .
            <br /> <br />I am open to great job opportunities to collaborate,
            learn, and grow as a developer and creator. If you're interested in
            my skills and expertise and have a great opportunity for me, then
            please don't hesitate to connect with me. Let's work together to
            bring your ideas to life and make a real impact!
          </p>

          <Link to="about" className="more_about">
            MORE ABOUT ME
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
