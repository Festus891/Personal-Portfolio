import React, { useState, useRef, useEffect } from "react";
import "./PortfolioNew.css";
import data from "./data";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";

const Portfolio = () => {
  const [visible, setVisible] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const h4Animation = useAnimation();
  const pAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      h4Animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5 },
      });
      pAnimation.start("visible");
    } else {
      h4Animation.start({ x: "-100vw" });
      pAnimation.start("hidden");
    }
  }, [isInView]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="containers portfolio_section" ref={ref}>
      <div className="containers portfolio_container">
        {/* HEADER */}
        <div className="portfolio_header">
          <motion.h2 animate={h4Animation}>
            My Top <span>Projects</span>
          </motion.h2>
          <motion.p animate={pAnimation}>
            A showcase of my best work, blending creativity with technical
            expertise to solve real problems and leave users hungry for more.
          </motion.p>
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

                <span className="status_badge">{project.type} Project</span>
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
            {/* 🔥 FIXED HEADER */}
            <div className="modal_header">
              <h2 className="modal_title">{selectedProject.title}</h2>

              <div
                className="modal_close"
                onClick={() => setSelectedProject(null)}
              >
                <IoMdClose />
              </div>
            </div>

            {/* 🔥 SCROLLABLE BODY */}
            <div className="modal_body">
              {/* 🔥 PREVIEW SECTION */}
              <div className="modal_preview">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="modal_image"
                />

                {/* 📱 MOBILE PREVIEW (optional) */}
                {selectedProject.mobileImage && (
                  <div className="mobile_preview">
                    <img src={selectedProject.mobileImage} alt="mobile view" />
                  </div>
                )}
              </div>

              {/* 🔥 ROLE / CONTRIBUTION */}
              {selectedProject.role && (
                <div className="modal_role">
                  <strong>Role:</strong> {selectedProject.role}
                </div>
              )}

              <p className="modal_desc">{selectedProject.case_study}</p>

              <div className="modal_stack">
                {selectedProject.stack.split(", ").map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* 🔥 LINKS */}
              <div className="modal_links">
                <a href={selectedProject.demo} target="_blank">
                  Live Demo <FaArrowUpRightFromSquare />
                </a>

                {selectedProject.github ? (
                  <a href={selectedProject.github} target="_blank">
                    GitHub <FaGithub />
                  </a>
                ) : (
                  <span className="confidential">
                    GitHub <FaGithub />: Source Code Confidential
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
