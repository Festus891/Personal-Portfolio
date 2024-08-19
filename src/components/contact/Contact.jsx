import React, { useState } from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  // Animation hook for the h4 tag
  const h4Animation = useAnimation();

  // Animation hook for the p tags
  const pAnimation = useAnimation();

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      // Animate h4 tag
      h4Animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.3,
        },
      });

      // Animate p tags
      pAnimation.start("visible");
    } else {
      // Reset h4 tag
      h4Animation.start({ x: "-100vw" });

      // Reset p tags
      pAnimation.start("hidden");
    }
  }, [isInView, h4Animation, pAnimation]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv22a6c",
        "template_0hsa564",
        form.current,
        "7cRlYFoaFx0rbf33P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  console.log("Contact in view");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="containers"
      variants={contentVariants}
      initial="hidden"
      animate={pAnimation}
    >
      <div className=" contact_header">
        <motion.h2 animate={h4Animation}>Get In Touch!</motion.h2>
        <motion.p variants={childVariants}>
          I’m currently open to joining a new team of creative developers. Also,
          if you have a question, proposal, idea or just want to say hi, Go
          ahead.
        </motion.p>
      </div>

      <motion.div
        className="containers contact_container" /*animate={animations}*/
      >
        <motion.div className="contact_options ">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-3xl transform translate-x-2 translate-y-3"></div>
            <article className="relative bg-black text-white p-6 rounded-3xl border-2 border-white  border-solid shadow-lg z-10 ">
              <div className="flex flex-col items-center">
                <MdOutlineEmail className="contact_option-icon text-4xl mb-2" />
                <h3 className="text-lg font-semibold">Email</h3>
                <a
                  href="mailto:festus4537@gmail.com"
                  target="_blank"
                  className="mt-2"
                >
                  festus4537@gmail.com
                </a>
                <a
                  href="mailto:festus4537@gmail.com"
                  target="_blank"
                  className="mt-4 flex items-center cursor-pointer"
                >
                  Write Me <span className="ml-2">➔</span>
                </a>
              </div>
            </article>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-3xl transform translate-x-2 translate-y-3"></div>
            <article className="relative bg-black text-white p-6 rounded-3xl border-2 border-white  border-solid shadow-lg z-10 ">
              <div className="flex flex-col items-center">
                <BsLinkedin className="contact_option-icon text-4xl mb-2" />
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/aderibigbe-festus"
                  target="_blank"
                  className="mt-2"
                >
                  Aderibigbe festus
                </a>
                <a
                  href="https://www.linkedin.com/in/aderibigbe-festus"
                  target="_blank"
                  className="mt-4 flex items-center cursor-pointer"
                >
                  Write Me <span className="ml-2">➔</span>
                </a>
              </div>
            </article>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-3xl transform translate-x-2 translate-y-3"></div>
            <article className="relative bg-black text-white p-6 rounded-3xl border-2 border-white  border-solid shadow-lg z-10 ">
              <div className="flex flex-col items-center">
                <BsWhatsapp className="contact_option-icon text-4xl mb-2" />
                <h3 className="text-lg font-semibold">WhatSapp</h3>
                <a
                  href="https://wa.me/+2348143430827"
                  target="_blank"
                  className="mt-2"
                >
                  +2348143430827
                </a>
                <a
                  href="https://wa.me/+2348143430827"
                  target="_blank"
                  className="mt-4 flex items-center cursor-pointer"
                >
                  Write Me <span className="ml-2">➔</span>
                </a>
              </div>
            </article>
          </div>
        </motion.div>
        {/* end of contact optiom */}
        <motion.form ref={form} onSubmit={sendEmail}>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="name">
              Name
            </label>
            <input
              required
              placeholder="Enter Your Full Name"
              type="text"
              className="contact__form-input"
              name="name"
              id="name"
            />
          </div>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="email">
              Email
            </label>
            <input
              required
              placeholder="Enter Your Email"
              type="email"
              className="contact__form-input"
              name="email"
              id="email"
            />
          </div>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="email">
              Subject
            </label>
            <input
              required
              placeholder="Enter Your subject"
              type="text"
              className="contact__form-input"
              name="subject"
              id="subject"
            />
          </div>
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="message">
              Message
            </label>
            <textarea
              required
              // cols="30"
              // rows="10"
              className="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary contact__btn">
            Send Message
          </button>
          {showPopup && (
            <div className="popup">
              <p>Message Sent successfully!</p>
              <p>You will receive a reply shortly</p>
              <button className="close" onClick={closePopup}>
                close
              </button>
            </div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
