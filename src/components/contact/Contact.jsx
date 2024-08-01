import React, { useState } from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animations = useAnimation();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isInView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.5,
        },
      });
    }

    if (!isInView) {
      animations.start({ x: "-100vw" });
    }
  }, [isInView]);

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
    <motion.section id="contact" ref={ref} /*animate={animations}*/>
      <div className="contact_header">
        <h2>Get In Touch!</h2>
        <p>
          I’m currently open to joining a new team of creative developers. Also,
          if you have a question, proposal, idea or just want to say hi, Go
          ahead.
        </p>
      </div>

      <motion.div
        className="container contact_container" /*animate={animations}*/
      >
        <motion.div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <a href="mailto:festus4537@gmail.com" target="_blank">
              festus4537@gmail.com
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <a
              href="https://www.linkedin.com/in/aderibigbe-festus"
              target="_blank"
            >
              Aderibigbe festus
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <a href="https://wa.me/+2348143430827" target="_blank">
              +2348143430827
            </a>
          </article>
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
