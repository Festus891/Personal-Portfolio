import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Service = () => {
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
      animations.start({ x: "-100vw" });
    }
    console.log("use effect hook, inView=", inView);
  }, [inView]);
  console.log("service in view");
  return (
    <motion.section id="service" ref={ref}>
      <h2>Service</h2>
      <div className="text"></div>
      <h5>Here you get to know what I offer</h5>

      <motion.div className="container services_container" animate={animations}>
        <motion.article className="service">
          <div className="service_head">
            <h3>Web Development and Graphics Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I develope websites from scratch and also ensure a responsive,
                well-designed, and functional user interface is implemented
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I Ensuring that the website I develope function consistently and
                correctly across different web browsers, including Chrome,
                Firefox, Safari, and Edge.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Implementing animations, transitions, and interactive elements
                to enhance user engagement and provide a smooth browsing
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Identifying and fixing frontend issues, bugs, and
                inconsistencies using browser developer tools and testing on
                different devices.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I Collaborating with backend developers to integrate frontend
                components with server-side functionality and APIs.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I am also into designing of logos, flyers, Business card,
                Stationary, Banner, invitation, letterhead design with one of
                the popular tools use for designing
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                I am into designing of Advertisment flyers for social media
                advert
              </p>
            </li>
          </ul>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default Service;
