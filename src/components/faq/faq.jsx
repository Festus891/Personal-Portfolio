import React, { useState } from "react";
import "./faq.css";
import faqData from "./faqData";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd, IoRemove } from "react-icons/io5";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq_section containers">
      <div className="containers faq_container">
        <div className="faq_header">
          <h2>
            Common <span>Questions</span>
          </h2>
          <p>
            Find answers to standard questions about my engineering process and
            technical expertise.
          </p>
        </div>

        <div className="faq_container">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq_item ${activeIndex === index ? "active" : ""}`}
            >
              {/* QUESTION */}
              <div className="faq_question" onClick={() => toggle(index)}>
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? <IoRemove /> : <IoAdd />}</span>
              </div>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq_answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
