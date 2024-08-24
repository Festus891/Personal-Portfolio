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
    <motion.section className="containers" id="skills" ref={ref}>
      <motion.div className="containers experience_container">
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
          <div className="w-full flex flex-col gap-3">
            <h4 className="text-2xl font-semibold text-tertiary uppercase">
              Core Professional Skills
            </h4>
            <div className="w-full flex flex-col gap-4">
              <div>
                <div className="flex flex-col gap-y-0.5">
                  <div className="w-full flex gap-x-4 items-center flex-wrap">
                    <p className="font-medium text-lg">
                      Responsive and Mobile-First Design:{" "}
                    </p>
                  </div>
                  <ul className="opacity-70 flex flex-col gap-2">
                    <li>
                      Ensure applications work seamlessly across different
                      screen sizes and resolutions.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-0.5">
                  <div className="w-full flex gap-x-4 items-center flex-wrap">
                    <p className="font-medium text-lg">Version Control/Git: </p>
                  </div>
                  <ul className="opacity-70 flex flex-col gap-2">
                    <li>
                      Managing code changes, collaborating with other
                      developers, and maintaining project history.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-0.5">
                  <div className="w-full flex gap-x-4 items-center flex-wrap">
                    <p className="font-medium text-lg">
                      Cross-Browser Compatibility:{" "}
                    </p>
                  </div>
                  <ul className="opacity-70 flex flex-col gap-2">
                    <li>
                      Ensuring that web applications work consistently across
                      different browsers..
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-0.5">
                  <div className="w-full flex gap-x-4 items-center flex-wrap">
                    <p className="font-medium text-lg">
                      Performance Optimization:{" "}
                    </p>
                  </div>
                  <ul className="opacity-70 flex flex-col gap-2">
                    <li>
                      Optimizing web performance is essential for providing a
                      fast and efficient user experience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
