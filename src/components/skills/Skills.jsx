import React, { useRef, useEffect } from "react";
import "./Skills.css";
import { useAnimation, motion, useInView } from "framer-motion";

import data from "./SkillsData";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const headingAnimation = useAnimation();
  const imageAnimation = useAnimation();

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      headingAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        },
      });

      imageAnimation.start({
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        },
      });
    } else {
      headingAnimation.start({ opacity: -1, y: -50 });
      imageAnimation.start({ scale: 0.5 });
    }
  }, [isInView, headingAnimation, imageAnimation]);

  return (
    <motion.section className="container" id="skills" ref={ref}>
      <motion.div className="container experience_container">
        <motion.div
          className="skills_heading"
          initial={{ opacity: 0, y: -100 }}
          animate={headingAnimation}
        >
          <motion.h2>MY SKILLS</motion.h2>
          <motion.p>The tools I work with</motion.p>
        </motion.div>

        <motion.div className="experience_frontend">
          <div className="experience_content">
            {data.map(({ id, image, skill }) => (
              <motion.div
                key={id}
                className="experience_details"
                initial={{ scale: 0.5 }}
                animate={imageAnimation}
              >
                <img src={image} alt="icon" />
                <p>{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
