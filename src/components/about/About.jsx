import React, { useEffect } from "react";
import "./about.css";
import profile from "../../asset/profile.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      animations.start({ x: "100vw" });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);
  return (
    <motion.section id="about" ref={ref}>
      <h2>ABOUT ME</h2>
      <div className="text"></div>

      <h5>Get to know me!</h5>

      <motion.div className="container about_container" animate={animations}>
        <div className="about_me">
          <div className="about_me_image">
            <img src={profile} alt="profile" />
          </div>
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
            Hello!, I am passionate self taught frontend web developer, I can
            create user friendly and interactive website with the skills and
            knowledge I have acquired so far, I bring a unique blend of
            technical skills and creativity to the table. As a Frontend Web
            Developer, I specialize in creating beautiful and functional
            websites and web applications that are optimized for user
            experience. My expertise lies in HTML, CSS, JavaScript, React and
            other libraries and frameworks.
            <br />
            <br />I am open to great job opportunities to collaborate, learn and
            grow as a developer and creator. If you're interested in my skills
            and expertise and got a great opportunity for me then please don't
            hesitate to connect with me. Let's work together to bring your ideas
            to life and make a real impact!
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
