import React, { useEffect } from "react";
import "./about.css";
import profile from "../../asset/festus3.png";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

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
    console.log("use effect hook, inView=", inView);
  }, [inView]);

  console.log("about in view");
  return (
    <motion.section id="about" ref={ref}>
      <h2>ABOUT ME</h2>
      <div className="text"></div>

      <h5>
        Get to know me!, Here you will find more information about me and what I
        do
      </h5>

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
            Hello!, I am <strong>Aderibigbe Festus</strong>. I am a passionate,
            self-taught <strong>frontend developer</strong> who builds the
            front-end of websites and web applications that leads to the success
            of the overall product. Check out some of my work in the{" "}
            <a href="#portfolio">
              <strong>Projects</strong>
            </a>{" "}
            section. I can create a user-friendly and interactive website with
            the skills and knowledge I have acquired so far. I bring a unique
            blend of technical skills and creativity to the table. As a frontend
            web developer, I specialize in creating beautiful and functional
            websites and web applications that are optimized for the user
            experience. My expertise lies in HTML, CSS, JavaScript, React, and
            other libraries and frameworks.
            <br /> <br />I am open to great job opportunities to collaborate,
            learn, and grow as a developer and creator. If you're interested in
            my skills and expertise and have a great opportunity for me, then
            please don't hesitate to connect with me. Let's work together to
            bring your ideas to life and make a real impact!
          </p>
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/aderibigbe-festus/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://twitter.com/AdeHimself12" target="_blank">
              <BsTwitter />
            </a>
            <a href="Mailto:festus891@yahoo.com" target="_blank">
              <MdEmail />
            </a>
            <a href="https://github.com/Festus891" target="_blank">
              <FaGithub />
            </a>
            <a href="https://wa.me/+2348143430827" target="_blank">
              <IoLogoWhatsapp />
            </a>
          </div>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
