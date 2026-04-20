import React, { useRef, useEffect } from "react";
import "./SkillsNew.css";
import { useAnimation, motion, useInView } from "framer-motion";
import skillsData from "./skillsDataNoIcon";

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

const SkillsNew = () => {
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
        y: 0,
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
      imageAnimation.start({ opacity: 0, y: 40 });
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
          <p>The tools and technologies I work with</p>
        </motion.div>

        <div className="skills_main">
          <motion.div
            className="experience_frontend"
            initial={{ opacity: 0, y: 40 }}
            animate={imageAnimation}
          >
            <div className="skills_category_wrapper">
              {skillsData.map((item, index) => (
                <motion.div
                  className="skills_category_card"
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={imageAnimation}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3>{item.category}</h3>

                  <div className="skills_tags">
                    {item.skills.map((skill, skillIndex) => (
                      <span className="skill_tag" key={skillIndex}>
                        {skill}
                      </span>
                    ))}
                  </div>
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

export default SkillsNew;
