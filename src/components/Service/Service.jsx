import React, { useEffect } from "react";
import "./Service.css";

import { FaCode, FaServer, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { FiSettings, FiGlobe, FiLayers } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Business websites, landing pages, portfolio websites, and custom web experiences designed to be responsive, fast, and easy to use.",
  },
  {
    icon: <FaServer />,
    title: "Full-Stack Applications",
    description:
      "Dashboards, portals, e-commerce platforms, real estate solutions, internal tools, and custom digital products across frontend and backend.",
  },
  {
    icon: <FiSettings />,
    title: "Website Maintenance & Support",
    description:
      "Website updates, bug fixes, performance improvements, feature enhancements, security checks, and ongoing technical support.",
  },
  {
    icon: <FiGlobe />,
    title: "Domain, Hosting & Deployment",
    description:
      "Domain setup, hosting configuration, SSL, deployment, production setup, and getting your website or application live.",
  },
  {
    icon: <TbPlugConnected />,
    title: "API & Integration Support",
    description:
      "Payment integrations, authentication, third-party services, backend APIs, data connections, and application integrations.",
  },
  {
    icon: <MdOutlineRocketLaunch />,
    title: "Digital Launch Support",
    description:
      "Supporting design and brand assets, digital setup, and the technical pieces needed to establish a professional online presence.",
  },
  {
    icon: <FaEnvelope />,
    title: "Business Email Setup",
    description:
      "Professional business email configuration using your company domain for individuals, teams, and organisations.",
  },
  {
    icon: <FiLayers />,
    title: "Product & Technical Support",
    description:
      "Helping shape digital ideas through user flows, technical planning, feature implementation, and practical product-focused development.",
  },
];

const Service = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const animations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start("visible");
    } else {
      animations.start("hidden");
    }
  }, [inView, animations]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const serviceVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="service" className="containers service_section" ref={ref}>
      <div className="containers service_container">
        {/* HEADER */}
        <motion.div
          className="service_header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="heading">
            Service & <span>Expertise</span>
          </h2>

          <p>
            Digital solutions and technical support for businesses, founders,
            and teams looking to build, launch, and grow online.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          className="services_container"
          variants={containerVariants}
          initial="hidden"
          animate={animations}
        >
          {services.map((service) => (
            <motion.article
              className="service_item"
              key={service.title}
              variants={serviceVariants}
              whileHover={{
                x: 4,
              }}
            >
              <div className="service_icon">{service.icon}</div>

              <div className="service_content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="service_cta"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <div>
            <span>Have a project in mind?</span>

            <p>
              Let&apos;s discuss what you&apos;re building and how I can help
              bring it to life.
            </p>
          </div>

          <a href="#contact" className="service_cta_link">
            Start a Conversation
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
