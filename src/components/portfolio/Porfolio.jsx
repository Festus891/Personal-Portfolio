import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import data from "./data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useInView, useAnimation, motion } from "framer-motion";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animations = useAnimation();

  useEffect(() => {
    if (isInView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.5,
        },
      });
    } else {
      animations.start({ x: "-100vw" });
    }
  }, [isInView, animations]);

  return (
    <motion.section id="portfolio" className="container" ref={ref}>
      <motion.div className="container portfolio_container">
        <div className="portfolio_head">
          <h2>My Projects</h2>
          <p>
            Here are some of the selected projects that showcase my passion for
            front-end development
          </p>
        </div>

        {data.map(({ id, image, title, github, demo, case_study, stack }) => {
          return (
            <motion.article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img
                  src={image}
                  alt="project-image "
                  className="portfolio_image"
                />
              </div>
              <motion.div
                className="portfolio_item-cta"
                animate={animations}
                initial={{ x: "-100vw" }}
              >
                <h3>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </h3>
                <p>{case_study}</p>
                <p className="stacks">Stacks: {stack}</p>

                <div className="portfolio_item-cta_link">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>

                  <a href={github} target="_blank" rel="noopener noreferrer">
                    GitHub
                    <FaGithub />
                  </a>
                  {/* <Link to="projectInfo">
                    More Info
                    <IoMdInformationCircle />
                  </Link> */}
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
