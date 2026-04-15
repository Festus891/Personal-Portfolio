import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { BsWhatsapp, BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
// import { FaInstagram, FaFacebookF } from "react-icons/fa";
// import { PiThreadsLogoLight } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    emailjs.init("7cRlYFoaFx0rbf33P");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_cv22a6c",
        "template_0hsa564",
        form.current,
      );

      setShowPopup(true);
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  const socials = [
    {
      icon: <BsLinkedin />,
      title: "LinkedIn",
      value: "Aderibigbe Festus",
      link: "https://www.linkedin.com/in/aderibigbe-festus",
    },
    {
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      value: "+2348143430827",
      link: "https://wa.me/2348143430827",
    },
    {
      icon: <BsGithub />,
      title: "GitHub",
      value: "@Festus891",
      link: "https://github.com/Festus891",
    },
    {
      icon: <BsTwitterX />,
      title: "X (Twitter)",
      value: "@OmoAde_One",
      link: "https://x.com/OmoAde_One",
    },
    // {
    //   icon: <FaInstagram />,
    //   title: "Instagram",
    //   value: "@yourhandle",
    //   link: "https://instagram.com/",
    // },
    // {
    //   icon: <PiThreadsLogoLight />,
    //   title: "Threads",
    //   value: "@yourhandle",
    //   link: "https://threads.net/",
    // },
    // {
    //   icon: <FaFacebookF />,
    //   title: "Facebook",
    //   value: "Your Name",
    //   link: "https://facebook.com/",
    // },
    // {
    //   icon: <IoLogoYoutube />,
    //   title: "YouTube",
    //   value: "@yourchannel",
    //   link: "https://youtube.com/",
    // },
  ];

  return (
    <motion.section
      id="contact"
      className="contact_section containers"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact_container containers">
        <motion.div
          className="contact_left"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact_intro">
            <h2>Let’s connect and create something awesome.</h2>
            <p>
              Whether you have a project in mind, need a frontend developer, or
              just want to talk about your next idea, I’d love to hear from you.
            </p>

            <a
              href="mailto:festus4537@gmail.com"
              className="contact_email_link"
            >
              <MdOutlineEmail />
              <span>festus4537@gmail.com</span>
            </a>
          </div>

          <div className="contact_social_grid">
            {socials.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact_social_card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="contact_social_icon">{item.icon}</div>
                <div className="contact_social_text">
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact_form_wrap"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact_form_box">
            <h3>Send me a message</h3>

            <form ref={form} onSubmit={sendEmail} className="contact_form">
              <div className="form_row">
                <div className="form_group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form_group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form_group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What’s this about?"
                  required
                />
              </div>

              <div className="form_group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me more..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact_btn">
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup_box">
            <h3>✅ Message Sent</h3>
            <p>I’ll reply shortly.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
