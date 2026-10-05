import React, { useEffect, useRef } from "react";
import "./SkillsNew.css";
import { motion, useAnimation, useInView } from "framer-motion";
import skillsData from "./skillsDataNoIcon";

const professionalSkills = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications across frontend, backend, databases, authentication, APIs, and deployment with a focus on maintainability and scalability.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible, and intuitive interfaces with strong attention to usability, performance, component architecture, and user experience.",
  },
  {
    title: "Backend & API Development",
    description:
      "Developing server-side functionality, REST APIs, authentication systems, database integrations, and application logic for reliable web products.",
  },
  {
    title: "Product Thinking",
    description:
      "Understanding user problems, business goals, requirements, and product priorities before translating them into practical technical solutions.",
  },
  {
    title: "API & Third-Party Integration",
    description:
      "Connecting applications with internal and external services while managing authentication, data flow, loading states, errors, and reliability.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving application speed, responsiveness, loading performance, and overall efficiency to create better digital experiences.",
  },
  {
    title: "Responsive & Accessible Design",
    description:
      "Building interfaces that work consistently across mobile, tablet, desktop, and modern browsers while following accessibility and responsive design principles.",
  },
  {
    title: "Collaboration & Version Control",
    description:
      "Using Git-based workflows to manage code, collaborate with developers and product teams, review changes, and maintain clean project history.",
  },
];

const SkillsNew = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.15,
  });

  const headingAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const textAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      headingAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.15,
          ease: "easeOut",
        },
      });

      skillsAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        },
      });

      textAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.25,
          ease: "easeOut",
        },
      });
    } else {
      headingAnimation.start({
        opacity: 0,
        y: -40,
      });

      skillsAnimation.start({
        opacity: 0,
        y: 40,
      });

      textAnimation.start({
        opacity: 0,
        x: 40,
      });
    }
  }, [isInView, headingAnimation, skillsAnimation, textAnimation]);

  return (
    <motion.section className="skills_section containers" id="skills" ref={ref}>
      <div className="experience_container containers">
        {/* Section Heading */}
        <motion.div
          className="skills_heading"
          initial={{ opacity: 0, y: -40 }}
          animate={headingAnimation}
        >
          <h2>
            My <span>Skills</span>
          </h2>

          <p>
            Technical expertise and product capabilities behind the solutions I
            build.
          </p>
        </motion.div>

        <div className="skills_main">
          {/* Technologies */}
          <motion.div
            className="experience_frontend"
            initial={{ opacity: 0, y: 40 }}
            animate={skillsAnimation}
          >
            <div className="skills_category_wrapper">
              {skillsData.map((item, index) => (
                <motion.div
                  className="skills_category_card"
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={skillsAnimation}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <h3>{item.category}</h3>

                  {item.description && (
                    <p className="skills_category_description">
                      {item.description}
                    </p>
                  )}

                  <div className="skills_tags">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        className="skill_tag"
                        key={`${item.id}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Capabilities */}
          <motion.div
            className="skills_info"
            initial={{ opacity: 0, x: 40 }}
            animate={textAnimation}
          >
            <div className="skills_info_heading">
              <span className="skills_info_label">WHAT I BRING</span>

              <h3>Engineering & Product Capabilities</h3>

              <p>
                Beyond individual technologies, these are the capabilities I use
                to turn ideas and requirements into reliable digital products.
              </p>
            </div>

            <div className="skills_info_list">
              {professionalSkills.map((item, index) => (
                <motion.div
                  className="skills_info_item"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  transition={{
                    duration: 0.45,
                    delay: 0.3 + index * 0.06,
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsNew;
