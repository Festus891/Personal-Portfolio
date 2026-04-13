import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const NewService = () => {
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
    <motion.section id="newservice" ref={ref} className="containers">
      <h2>Service</h2>

      <motion.div
        className="containers services_container"
        animate={animations}
      >
        <motion.article className="service">
          <div className="service_head">
            <h3>Web Development and Graphics Design</h3>
          </div>

          <p>
            I help businesses and individuals establish a strong online presence
            through my web development services. I create visually appealing and
            user-friendly websites that are tailored to meet the unique needs of
            each client. Whether you need a simple portfolio site or a complex
            e-commerce platform, Real Estate platform I have the skills and
            expertise to deliver high-quality results. With my services, you can
            expect a seamless and professional experience that will help you
            stand out in the digital world.
          </p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default NewService;
