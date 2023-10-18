import React from "react";
import "./Skills.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import data from "./SkillsData";

const Skills = () => {
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
            {data.map(({ id, image, skill }) => {
              return (
                <div key={id} className="experience_details">
                  <img src={image} alt="icon" /> {skill}
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
