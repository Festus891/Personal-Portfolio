import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="skills_text">
        <h2>My Skills </h2>
      </div>
      <h5>My Stacks</h5>
      

      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development </h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                      <h4>HTML</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill  className='experience_details_icon'/>
                    <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                      <h4>JAVACRIPT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                      <h4>REACT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Tailwind</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
            </div>
        </div>
    {/* END OF FRONTEND  */}
        <div className="experience_backend">
        <h3>Frontend Development </h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                      <h4>HTML</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                      <h4>JAVACRIPT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                      <h4>REACT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Tailwind</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience