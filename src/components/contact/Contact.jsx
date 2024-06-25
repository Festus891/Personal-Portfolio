import React, { useState } from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const { ref, inView } = useInView();
  const animations = useAnimation();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (inView) {
      animations.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.5,
        },
      });
    }

    if (!inView) {
      animations.start({ x: "-100vw" });
    }
  }, [inView]);

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
    <motion.section id="contact" ref={ref}>
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
          <div className="about_social">
            <a
              href="https://www.linkedin.com/in/aderibigbe-festus/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://x.com/AdeHimself12" target="_blank">
              <BsTwitterX />
            </a>
            <a href="Mailto:festus4537@gmail.com" target="_blank">
              <MdEmail />
            </a>
            <a href="https://github.com/Festus891" target="_blank">
              <FaGithub />
            </a>
            <a href="https://wa.me/+2348143430827" target="_blank">
              <IoLogoWhatsapp />
            </a>
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
