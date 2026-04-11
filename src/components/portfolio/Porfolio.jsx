import React, { useState, useRef } from "react";
import "./PortfolioNew.css";
import data from "./data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [visible, setVisible] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className=" containers portfolio_section">
      <div className="containers">
        {/* HEADER */}
        <div className="portfolio_header">
          <h2>
            My Top <span>Projects</span>
          </h2>
          <p>
            Highlighting expertise in full-stack development and system design.
          </p>
        </div>

        {/* GRID */}
        <div className="portfolio_grid">
          {data.slice(0, visible).map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio_card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // smooth premium easing
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* IMAGE */}
              <div className="portfolio_img_wrapper">
                <img src={project.image} alt="" />
              </div>

              {/* CONTENT */}
              <div className="portfolio_content">
                <h3>{project.title}</h3>

                <p className="portfolio_desc">
                  {project.case_study.slice(0, 100)}...
                </p>

                <span className="status_badge">{project.status} Project</span>
              </div>

              {/* FOOTER */}
              <div className="portfolio_footer">
                <span>View case study</span>
                <FaArrowUpRightFromSquare />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < data.length && (
          <div className="portfolio_more">
            <button onClick={() => setVisible((prev) => prev + 3)}>
              Show More Projects ↓
            </button>

            <p>
              Showing {visible} of {data.length} — more to explore.
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="project_modal_overlay"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="project_modal"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal_close"
              onClick={() => setSelectedProject(null)}
            >
              <IoMdClose />
            </button>

            <img src={selectedProject.image} alt="" className="modal_image" />

            <h2>{selectedProject.title}</h2>

            <p className="modal_desc">{selectedProject.case_study}</p>

            <div className="modal_stack">
              {selectedProject.stack.split(", ").map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="modal_links">
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                Live Demo <FaArrowUpRightFromSquare />
              </a>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
