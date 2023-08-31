import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';



const Contact = () => {
  const {ref, inView} = useInView()
  const animations =useAnimation();

  useEffect(()=>{
    if(inView){
      animations.start({
        x: 0,
        transition: {
          type: 'spring', duration: 4, bounce:0.5
        }
      })
    }

    if(!inView){
      animations.start({x: '-100vw'})
    }
      console.log("use effect hook, inView=" ,inView)
  }, [inView])


  const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cv22a6c', 'template_0hsa564', form.current, '7cRlYFoaFx0rbf33P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    

  return (
    <motion.section id='contact' ref={ref}>
      <div className="contact_text">
           <h2>Contact</h2>
      </div>
      <h5>Get In Touch</h5>

      <motion.div className="container contact_container" animate={animations}>
        <motion.div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>festus891@yahoo.com</h5>
            <a className='btn' href="mailto:festus891@yahoo.com" target='_blank'>Send Message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aderibigbe festus</h5>
            <a className='btn' href="https://www.linkedin.com/in/aderibigbe-festus/detail/recent-activity/shares/" target='_blank'>Send Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+2348143430827</h5>
            <a className='btn' href="https://wa.me/+2348143430827" target='_blank'>Send Message</a>
          </article>
        </motion.div>
      {/* end of contact optiom */}
          <motion.form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your full name' id="" />
            <input type="email" name="email"  
            placeholder='Your Email' />
            <input type="text" name="subject"  placeholder='Your subject' />
            <textarea name="message" rows="7" placeholder='Type your Message'></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </motion.form>
      </motion.div>
    </motion.section>
  )
}

export default Contact