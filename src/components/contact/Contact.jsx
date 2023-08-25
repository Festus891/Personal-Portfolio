import React from 'react'
import './Contact.css'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
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
    <section id='contact'>
      <div className="contact_text">
           <h2>Contact</h2>
      </div>
      <h5>Get In Touch</h5>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>festus891@yahoo.com</h5>
            <a href="mailto:festus891@yahoo.com" target='_blank'>Send Message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aderibigbe festus</h5>
            <a href="https://linked.com" target='_blank'>Send Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+2348143430827</h5>
            <a href="https://api.whatsapp.com/send?phone+23408143430827" target='_blank'>Send Message</a>
          </article>
        </div>
      {/* end of contact optiom */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your full name' id="" />
            <input type="email" name="email"  
            placeholder='Your Email' />
            <input type="text" name="subject"  placeholder='Your subject' />
            <textarea name="message" rows="7" placeholder='Type your Message'></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact