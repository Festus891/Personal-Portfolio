import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import data from "./data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Porfolio = () => {
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
  console.log("portfolio in view");
  return (
    <motion.section id="portfolio" className="container" ref={ref}>
      <motion.div
        className="container portfolio_container"
        /*animate={animations}*/
      >
        <div className="portfolio_head">
          <h2>My Projects</h2>
          <p>
            Here are some of the selected projects that showcase my passion for
            front-end development
          </p>
        </div>

        {data.map(({ id, image, title, github, demo, case_study, stack }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt="project1" />
              </div>
              <div className="portfolio_item-cta">
                <h3>
                  <a href={demo} target="_blank">
                    {title}
                  </a>
                </h3>
                <p>{case_study}</p>
                <p>Stacks: {stack}</p>

                <div className="portfolio_item-cta_link">
                  <a href={demo} target="_blank">
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>

                  <a href={github} target="_blank">
                    GitHub
                    <FaGithub />
                  </a>
                  {/* <Link to="projectInfo">
                    More Info
                    <IoMdInformationCircle />
                  </Link> */}
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Porfolio;
