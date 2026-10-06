import React, { useEffect, useRef } from "react";
import "./about.css";
import writingCode from "../../asset/about-me.png";

import { FaAward, FaCode, FaServer, FaEnvelope } from "react-icons/fa";
import { FiUsers, FiSettings, FiGlobe } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

import { motion, useScroll, useAnimation, useInView } from "framer-motion";

import ParticlesBG from "../ParticlesBG";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Business websites, landing pages, portfolio websites, and custom web experiences.",
  },
  {
    icon: <FaServer />,
    title: "Full-Stack Applications",
    description:
      "Dashboards, portals, e-commerce platforms, real estate solutions, and custom digital products.",
  },
  {
    icon: <FiSettings />,
    title: "Website Maintenance & Support",
    description:
      "Updates, bug fixes, performance improvements, security checks, and ongoing technical support.",
  },
  {
    icon: <FiGlobe />,
    title: "Domain, Hosting & Deployment",
    description:
      "Domain setup, hosting configuration, SSL, deployment, and production setup.",
  },
  {
    icon: <TbPlugConnected />,
    title: "API & Integration Support",
    description:
      "Payments, authentication, third-party services, backend integrations, and data connections.",
  },
  {
    icon: <MdOutlineRocketLaunch />,
    title: "Digital Launch Support",
    description:
      "Supporting design and brand assets needed to help a business establish a professional digital presence.",
  },
  {
    icon: <FaEnvelope />,
    title: "Business Email Setup",
    description:
      "Professional email configuration using business domains for teams and organisations.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const h4Animation = useAnimation();
  const pAnimation = useAnimation();

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      h4Animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
        },
      });

      pAnimation.start("visible");
    } else {
      h4Animation.start({
        x: "-100vw",
      });

      pAnimation.start("hidden");
    }
  }, [isInView, h4Animation, pAnimation]);

  return (
    <motion.section id="about" className="containers" ref={ref}>
      <ParticlesBG />

      {/* Scroll Progress Glow */}
      <motion.div
        className="about_progress containers"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="about_container containers">
        {/* LEFT SIDE */}
        <motion.div className="about_me">
          <motion.h2 animate={h4Animation}>
            About <span>Me</span>
          </motion.h2>

          <motion.p variants={childVariants}>A little about me</motion.p>

          <motion.div
            className="about_image"
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            <img src={writingCode} alt="Festus working on web development" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about_content"
          variants={contentVariants}
          initial="hidden"
          animate={pAnimation}
        >
          {/* OVERVIEW */}
          <motion.div variants={childVariants}>
            <h2 className="about_content_heading">Overview</h2>
          </motion.div>

          <motion.p variants={childVariants}>
            Hi, I'm <span className="highlight">Festus</span>, a{" "}
            <span className="highlight">Full-Stack Developer</span> focused on
            turning ideas and business needs into reliable, scalable digital
            products.
          </motion.p>

          <motion.p variants={childVariants}>
            I work across both frontend and backend development, combining
            strong engineering execution with an increasing focus on product
            thinking, user needs, and business outcomes. From shaping an idea to
            building and deploying the final product, I care about creating
            solutions that are not only technically sound, but genuinely useful.
          </motion.p>

          {/* DELIVERY PRINCIPLES */}
          <motion.div className="about_delivery" variants={childVariants}>
            <h3>I focus on delivering</h3>

            <div className="about_delivery_list">
              <div className="about_delivery_item">
                <span />
                Scalable and maintainable architectures
              </div>

              <div className="about_delivery_item">
                <span />
                Fast, responsive, and accessible interfaces
              </div>

              <div className="about_delivery_item">
                <span />
                Secure and efficient backend systems
              </div>

              <div className="about_delivery_item">
                <span />
                Intuitive and engaging user experiences
              </div>

              <div className="about_delivery_item">
                <span />
                Solutions aligned with real user and business needs
              </div>
            </div>
          </motion.div>

          {/* SERVICES */}
          {/* <motion.div className="about_services" variants={childVariants}>
            <span className="about_label">SERVICES</span>

            <h2 className="about_content_heading">Service & Expertise</h2>

            <p className="about_services_intro">
              I help businesses, founders, and engineering teams transform ideas
              into polished, production-ready digital products.
            </p>

            <div className="about_services_grid">
              {services.map((service, index) => (
                <motion.article
                  className="about_service_card"
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <div className="about_service_icon">{service.icon}</div>

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div> */}

          {/* APPROACH */}
          {/* <motion.p className="about_approach" variants={childVariants}>
            My approach goes beyond simply writing code. I aim to understand the
            problem, the users, and the desired business outcome before
            translating those needs into practical digital solutions.
          </motion.p> */}

          {/* CARDS */}
          <motion.div className="about_cards" variants={contentVariants}>
            <motion.article
              className="about_card"
              whileHover={{
                y: -8,
                boxShadow: "0 0 20px rgba(211,233,122,0.18)",
              }}
            >
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years Experience</small>
            </motion.article>

            <motion.article
              className="about_card"
              whileHover={{
                y: -8,
                boxShadow: "0 0 20px rgba(211,233,122,0.18)",
              }}
            >
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ Clients Served</small>
            </motion.article>

            <motion.article
              className="about_card"
              whileHover={{
                y: -8,
                boxShadow: "0 0 20px rgba(211,233,122,0.18)",
              }}
            >
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Projects Completed</small>
            </motion.article>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="cta_btn"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Let&apos;s Work Together →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
