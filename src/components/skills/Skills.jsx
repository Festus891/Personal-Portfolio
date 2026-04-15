import React, { useRef, useEffect } from "react";
import "./Skills.css";
import { useAnimation, motion, useInView } from "framer-motion";
import data from "./SkillsData";

const professionalSkills = [
  {
    title: "Frontend Experience",
    description:
      "Building modern, responsive, and interactive user interfaces with strong attention to layout, usability, accessibility, and smooth user experience.",
  },
  {
    title: "Backend Experience",
    description:
      "Working with server-side logic, databases, authentication, and application structure to support scalable and functional web applications.",
  },
  {
    title: "API Integration",
    description:
      "Connecting frontend applications to external and internal APIs, handling requests, responses, data flow, loading states, and error handling.",
  },
  {
    title: "Responsive and Mobile-First Design",
    description:
      "Ensuring applications work seamlessly across different screen sizes and resolutions.",
  },
  {
    title: "Version Control / Git",
    description:
      "Managing code changes, collaborating with other developers, and maintaining project history.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensuring that web applications work consistently across modern browsers and devices.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving speed, responsiveness, and efficiency for a better user experience.",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const headingAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();

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
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        },
      });

      textAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        },
      });
    } else {
      headingAnimation.start({ opacity: 0, y: -50 });
      imageAnimation.start({ opacity: 0, scale: 0.85 });
      textAnimation.start({ opacity: 0, x: 50 });
    }
  }, [isInView, headingAnimation, imageAnimation, textAnimation]);

  return (
    <motion.section className="skills_section containers" id="skills" ref={ref}>
      <div className="experience_container containers">
        <motion.div
          className="skills_heading"
          initial={{ opacity: 0, y: -100 }}
          animate={headingAnimation}
        >
          <h2>
            My <span>Skills</span>
          </h2>
          <p>The tools I work with</p>
        </motion.div>

        <div className="skills_main">
          <motion.div className="experience_frontend">
            <div className="experience_content">
              {data.map(({ id, image, skill }, index) => (
                <motion.div
                  key={id}
                  className="experience_details"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={imageAnimation}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <img src={image} alt={skill} />
                  <p>{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills_info"
            initial={{ opacity: 0, x: 60 }}
            animate={textAnimation}
          >
            <h3>Core Professional Skills</h3>

            <div className="skills_info_list">
              {professionalSkills.map((item, index) => (
                <div className="skills_info_item" key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
