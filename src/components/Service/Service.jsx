import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'
import {animations, motion, useAnimation} from 'framer-motion';
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
         <h2>Service<span>.</span></h2>
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </motion.article>
      </motion.div>

    </motion.section>
  )
}

export default Service