import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Porfolio";
import ScrollUp from "./components/scrollup/ScrollUp";
import Cursor from "./components/scrollup/Cursor";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/faq";
import Opportunity from "./components/opportunity/Opportunity";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Faq />
      <Opportunity />
      <Contact />
      <ScrollUp />
      <Cursor />
    </>
  );
};

export default App;
