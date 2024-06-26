import React, { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import Contact from "../contact/Contact";
import { FaDownload } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import myself from "../../asset/festus.png";
import "../about/MoreAbout.css";

const MoreAbout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="container">
      <button className="back">
        <Link to="/">
          <IoMdArrowBack className="icon" />
        </Link>
      </button>

      <div className="more_container container" /*animate={animations}*/>
        <div className="about_me">
          <h4>About Me</h4>
        </div>

        <div className="more_about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <small>80+ project</small>
            </article>
          </div> */}

          <p>
            I'm Festus. I'm a Frontend web developer, I specialize in
            transforming design concepts into clean and user-friendly
            interfaces, whether it's crafting responsive websites or interactive
            functional websites . With a keen eye for detail and a passion for
            creativity, I strive to deliver engaging, visually appealing, and
            functional solutions that exceed expectations .
            <br /> <br />I am open to great job opportunities to collaborate,
            learn, and grow as a developer and creator. If you're interested in
            my skills and expertise and have a great opportunity for me, then
            please don't hesitate to connect with me. Let's work together to
            bring your ideas to life and make a real impact!
          </p>
          <div className="more_about_link">
            <a
              href="https://drive.google.com/file/d/1HRdxS5iiNBHjhxU8WCtRxMjhEdWpp8X8/view?usp=sharing"
              download
              target="_blank"
              className="resume"
            >
              My Resume
              <FaDownload />
            </a>
            <div className="more_about_social">
              <a
                href="https://www.linkedin.com/in/aderibigbe-festus/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://x.com/AdeHimself12" target="_blank">
                <BsTwitterX />
              </a>
              <a href="Mailto:festus4537@gmail.com" target="_blank">
                <MdEmail />
              </a>
              <a href="https://github.com/Festus891" target="_blank">
                <FaGithub />
              </a>
              <a href="https://wa.me/+2348143430827" target="_blank">
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="more-about_image">
        <img src={myself} alt="profile" />
      </div>
      <hr />
      <div className="about_container container" /*animate={animations}*/>
        <div className="about_me">
          <h4>Tools I use</h4>
        </div>

        <div className="about_content">
          <div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
            <div className="tools">HTML</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="about_container container" /*animate={animations}*/>
        <div className="about_me">
          <h4>My Experience</h4>
        </div>

        <div className="about_content">
          <p>
            I'm Festus. I'm a Frontend web developer, I specialize in
            transforming design concepts into clean and user-friendly
            interfaces, whether it's crafting responsive websites or interactive
            functional websites . With a keen eye for detail and a passion for
            creativity, I strive to deliver engaging, visually appealing, and
            functional solutions that exceed expectations .
            <br /> <br />I am open to great job opportunities to collaborate,
            learn, and grow as a developer and creator. If you're interested in
            my skills and expertise and have a great opportunity for me, then
            please don't hesitate to connect with me. Let's work together to
            bring your ideas to life and make a real impact!
          </p>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default MoreAbout;
