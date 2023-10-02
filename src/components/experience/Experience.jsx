import React from "react";
import "./Experience.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Experience = () => {
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
  console.log("skills in view");
  return (
    <motion.section id="skills" ref={ref}>
      <h2>MY SKILLS </h2>
      <div className="text"></div>
      <h5>
        Here you get to know my current skills mostly in terms of programming
        and technology
      </h5>

      <motion.div
        className="container experience_container"
        animate={animations}
      >
        <motion.div className="experience_frontend">
          <div className="experience_content">
            <div className="experience_details">HTML</div>

            <div className="experience_details">CSS</div>

            <div className="experience_details">JAVACRIPT</div>

            <div className="experience_details">REACT</div>

            <div className="experience_details">Tailwind</div>

            <div className="experience_details">Bootstrap</div>

            <div className="experience_details">Github</div>

            <div className="experience_details">Version Control/Git</div>

            <div className="experience_details">Figma</div>

            <div className="experience_details">Interactive Design</div>

            <div className="experience_details">Responsive Design</div>

            <div className="experience_details">Graphics designing</div>

            <div className="experience_details">Corel Draw</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
