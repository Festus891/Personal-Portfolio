import React from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const { ref, inView } = useInView();
  const animations = useAnimation();

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
    console.log("use effect hook, inView=", inView);
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
  };

  return (
    <motion.section id="contact" ref={ref}>
      <h2>Contact</h2>
      <div className="text"></div>
      <h5>
        Feel free to Contact me through my social handles or by submitting the
        form below and I will get back to you as soon as possible
      </h5>

      <motion.div className="container contact_container" animate={animations}>
        <motion.div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>festus891@yahoo.com</h5>
            <a
              className="btn"
              href="mailto:festus891@yahoo.com"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aderibigbe festus</h5>
            <a
              className="btn"
              href="https://www.linkedin.com/in/aderibigbe-festus/detail/recent-activity/shares/"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348143430827</h5>
            <a
              className="btn"
              href="https://wa.me/+2348143430827"
              target="_blank"
            >
              Send Message
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
              required=""
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
              required=""
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
              required=""
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
              required=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary contact__btn">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
