import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import data from "./data";
import { useScroll, motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Porfolio = () => {
  return (
    <motion.section id="portfolio" className="container">
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
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Porfolio;
