import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';
const Service = () => {

  const {ref, inView} = useInView()
  const animations =useAnimation();

  useEffect(()=>{
    if(inView){
      animations.start({
        x: 0,
        transition: {
          type: 'spring', duration: 4, bounce:0.4
        }
      })
    }

    if(!inView){
      animations.start({x: '-100vw'})
    }
      console.log("use effect hook, inView=" ,inView)
  }, [inView])


  return (
    <motion.section id='service' ref={ref}>
      <div className="service_text">
         <h2>Service</h2>
      </div>
      <h5>What I offer</h5>

      <motion.div className="container services_container" animate={animations}>
        <motion.article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>I develope websites from scratch and also ensure a responsive, well-designed, and functional user interface is implemented</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>I Ensuring that the website I develope function consistently and correctly across different web browsers, including Chrome, Firefox, Safari, and Edge.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Implementing animations, transitions, and interactive elements to enhance user engagement and provide a smooth browsing experience.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Identifying and fixing frontend issues, bugs, and inconsistencies using browser developer tools and testing on different devices.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>I Collaborating with backend developers to integrate frontend components with server-side functionality and APIs.
</p>
            </li>
          </ul>
        </motion.article>
        {/* Another service  */}

        <motion.article className="service">
          <div className="service_head">
            <h3>Graphic Designer</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>I design:-</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>logo, flyers design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Banner, invitation design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Advertisment, letterhead</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Business card, Stationary design</p>
            </li>
          </ul>
        </motion.article>
      </motion.div>

    </motion.section>
  )
}

export default Service