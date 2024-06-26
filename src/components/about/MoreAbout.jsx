import React, { useState, useEffect } from "react";
import Loader from "../loader/Loader";

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
      <div className="about_container container" /*animate={animations}*/>
        <div className="about_me">
          <h4>About Me</h4>
        </div>

        <div className="about_content">
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
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
