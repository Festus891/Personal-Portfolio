import React, { useRef } from "react";
import "./Skills.css";

import data from "./SkillsData";
import { motion, useScroll } from "framer-motion";

const Skills = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1 1"],
  // });

  return (
    <motion.section className="container " id="skills">
      <motion.div
        className="container experience_container"
        /*animate={animations}*/
        // ref={ref}
        // style={{
        //   scale: scrollYProgress,
        //   opacity: scrollYProgress,
        //   transition: {
        //     type: "spring",
        //     stiffness: 300,
        //   },
        // }}
      >
        <div className="skills_heading">
          <h2>MY SKILLS </h2>
          <p>The tools I work with</p>
        </div>
        <motion.div className="experience_frontend">
          <div className="experience_content">
            {data.map(({ id, image, skill }) => {
              return (
                <div key={id} className="experience_details">
                  <img src={image} alt="icon" /> <p>{skill}</p>
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
