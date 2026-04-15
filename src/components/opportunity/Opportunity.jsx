import React from "react";
import "./Opportunity.css";
import { motion } from "framer-motion";

const Opportunity = () => {
  const opportunities = [
    "Frontend Development",
    "Backend Integration",
    "Fullstack Projects",
    "Landing Pages",
    "Portfolio Websites",
    "E-commerce Sites",
    "  Real Estate Websites",
    "Open Source Contributions",
    "Collaborative Projects",
  ];

  return (
    <motion.section
      className="opportunity_section containers"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="opportunity_box">
        <div className="opportunity_glow"></div>

        <div className="opportunity_content">
          <p className="opportunity_label">OPEN TO OPPORTUNITIES</p>

          <h2>
            Let&apos;s build something
            <br />
            great together.
          </h2>

          <div className="opportunity_tags">
            {opportunities.map((item, index) => (
              <span key={index} className="opportunity_tag">
                {item}
              </span>
            ))}
          </div>

          <a href="#contact" className="opportunity_btn">
            Reach Out →
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Opportunity;
