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
      <div className="faq_wrapper">
        <div className="faq_header">
          <h2>
            Common <span>Questions</span>
          </h2>
          <p>
            Find answers to standard questions about my engineering process and
            technical expertise.
          </p>
        </div>

        <div className="faq_list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq_item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq_question"
                onClick={() => toggle(index)}
                type="button"
              >
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? <IoRemove /> : <IoAdd />}</span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="faq_answer_wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="faq_answer">
                      <p>{item.answer}</p>
                    </div>
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
