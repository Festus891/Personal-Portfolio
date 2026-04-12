import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Service from "./components/Service/Service";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Porfolio";
import Footer from "./components/footer/Footer";
import HeaderFixed from "./components/HeaderFixed/HeaderFixed";
import ScrollUp from "./components/scrollup/ScrollUp";
import Cursor from "./components/scrollup/Cursor";
import Testimonial from "./components/testimonial/Testimonial";
import BackgroundCircles from "./components/header/BackgroundCircles";
import Faq from "./components/faq/faq";
import ParticlesBG from "./components/ParticlesBG";

const App = () => {
  return (
    <>
      {/* <BackgroundCircles /> */}
      {/* <ParticlesBG /> */}
      <Header />
      <About />
      {/* <Service /> */}
      <Portfolio />
      <Skills />
      <Testimonial />
      <Faq />
      <Contact />
      <ScrollUp />
      <Cursor />
    </>
  );
};

export default App;
