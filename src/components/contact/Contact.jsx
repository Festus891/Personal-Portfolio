import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // ✅ INIT EMAILJS
  useEffect(() => {
    emailjs.init("7cRlYFoaFx0rbf33P"); // your public key
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

  return (
    <motion.section
      id="contact"
      className="contact_section containers"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {" "}
      <div className="contact_header">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>
          Let’s build something amazing together. Got a project or idea? I’m
          ready.
        </p>
      </div>
      <div className="contact_container">
        {/* 🔥 LEFT CONTACT CARDS */}

        <motion.div
          className="contact_options"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="contact_card">
            <MdOutlineEmail />
            <h3>Email</h3>
            <p>festus4537@gmail.com</p>
            <a href="mailto:festus4537@gmail.com">Send Message →</a>
          </div>

          <motion.div
            className="contact_card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <BsLinkedin />
            <h3>LinkedIn</h3>
            <p>Aderibigbe Festus</p>
            <a
              href="https://www.linkedin.com/in/aderibigbe-festus"
              target="_blank"
            >
              Visit Profile →
            </a>
          </motion.div>

          <motion.div
            className="contact_card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <BsWhatsapp />
            <h3>WhatsApp</h3>
            <p>+2348143430827</p>
            <a href="https://wa.me/2348143430827" target="_blank">
              Message Me →
            </a>
          </motion.div>
        </motion.div>

        {/* 🔥 FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact_form"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          <div className="form_group">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="form_group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="form_group">
            <input type="text" name="subject" required />
            <label>Subject</label>
          </div>
          <div className="form_group">
            <textarea name="message" required rows="5"></textarea>
            <label>Message</label>
          </div>
          <button type="submit" className="contact_btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
      {/* 🔥 POPUP */}
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
