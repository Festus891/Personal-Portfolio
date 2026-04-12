import img2 from "../../asset/movieinsight.png";
import img4 from "../../asset/n-ImageGetter.jpg";

import ownitmartWeb from "../../asset/ownitmart-web.png";
import ownitmartMobile from "../../asset/ownitmart-mobile.png";

import getNowWeb from "../../asset/getnow-web.png";
import getNowMobile from "../../asset/getnow-mobile.png";

import portfolioWeb from "../../asset/portflio-web.png";
import portfolioMobile from "../../asset/portfolio-mobile.png";

import meshkenWeb from "../../asset/meshken-web.png";
import meshkenMobile from "../../asset/meshken-mobile.png";

import dwellbaseWeb from "../../asset/dwellbase-web.png";
import dwellbaseMobile from "../../asset/dwellbase-mobile.png";

import Mingnets from "../../asset/mingnets-web.png";
import mingnetsMobile from "../../asset/mingnets-mobile.png";
import { get } from "react-scroll/modules/mixins/scroller";

const data = [
  {
    id: 1,
    image: meshkenWeb,
    mobileImage: meshkenMobile,
    title: "Meshken Led Solution",
    github: "",
    role: "Fullstack Developer", // 👈 or "Contributor"
    demo: "https://www.meshken.com/",
    type: "Business",
    status: "Development",
    case_study:
      "Meshken is a modern digital platform for LED display solutions, combining a product marketplace, rental services, and a quote/request system into one scalable web application.",
    stack: "Nextjs, Tailwind, Supabase, TypeScript, Framer Motion, ShadCN UI",
  },

  {
    id: 2,
    image: dwellbaseWeb,
    mobileImage: dwellbaseMobile,
    title: "Dwellbase",
    role: "Fullstack Developer", // 👈 or "Contributor"
    github: "",
    demo: "https://dwell-base.vercel.app/",
    type: "Real Estate",
    status: "In Development",
    case_study:
      "Dwellbase is a modern real estate platform that streamlines the property browsing and listing process. It integrates a comprehensive search functionality, detailed property descriptions, and a seamless booking system into one scalable web application.",
    stack: "React, Tailwind, MongoDB, Lambda, AWS, TypeScript, ShadCN UI",
  },
  {
    id: 3,
    image: Mingnets,
    title: "Mingnets",
    mobileImage: mingnetsMobile,
    role: "Fullstack Developer", // 👈 or "Contributor"
    github: "",
    demo: "https://www.mingnets.net/",
    type: "E-commerce",
    status: "In Development",
    case_study:
      "Mingnets is a modern e-commerce platform where customers and merchants Source and sell at your convenience, anytime, anywhere. With 24/7 access, you can easily discover the best deals, list your items, and connect with buyers or sellers without limitations.",
    stack: "Nextjs, Tailwind, MongoDB, NestJS, ShadCN UI",
  },

  {
    id: 4,
    image: ownitmartWeb,
    mobileImage: ownitmartMobile,
    role: "Fullstack Developer", // 👈 or "Contributor"
    title: "OwnitMart",
    github: "https://github.com/Festus891/Ownitmart-fullstack",
    demo: "https://ownitmart.vercel.app/",
    type: "E-commerce",
    status: "Upgrading",
    case_study:
      "OwnitMart is a fully functional e-commerce website offering a diverse range of products across various categories. Customers can easily browse through the selections, find items they desire, and make purchases seamlessly. The platform also features an admin interface for efficient product and order management.",
    stack:
      "REACTJS, Redux, CSS, Bootstrap, Mongodb, Express, Nodejs, Api Integration, Vercel",
  },
  {
    id: 5,
    image: getNowWeb,
    mobileImage: getNowMobile,
    title: "Fullstack Developer", // 👈 or "Contributor"
    github: "",
    type: "e-commerce",
    status: "Upgrading",
    demo: "https://getnow-shopping.vercel.app/",
    case_study:
      "GetNow is a modern e-commerce platform designed to provide a seamless online shopping experience.The website is fast, responsive, and visually engaging. The backend is powered by Sanity, offering an intuitive admin dashboard for easy product management and updates.",
    stack: "Nextjs, REACTJS, CSS, TailwindCSS, Framer-motion, Sanity, Vercel",
  },
  {
    id: 5,
    image: portfolioWeb,
    mobileImage: portfolioMobile,
    role: "Frontend Developer", // 👈 or "Contributor"
    title: "Personal Portfolio",
    github: "",
    type: "Personal",
    status: "Upgrading",
    demo: "https://www.festuscode.dev/",
    case_study:
      "Welcome to my personal portfolio, which I have meticulously crafted to highlight my expertise in web development. This portfolio is designed with user-friendliness and responsiveness in mind, ensuring an engaging and seamless experience for all visitors. Explore my work and see how I bring professionalism and creativity to every project.",
    stack: "REACTJS, CSS, TailwindCSS, Framer-motion, Vercel",
  },
  {
    id: 6,
    image: img2,
    title: "Movie-Insight",
    github: "",
    demo: "https://movieinsight.vercel.app/",
    type: "Movie",
    status: "Completed",
    case_study:
      "A fully functional movie information website that allows users to search for and view details about any movie they want to watch. This is achieved by utilizing the TMDB APIs to fetch and display movie data on the frontend.",
    stack: "Reactjs, CSS, Material Ui, Api Integration, Vercel",
  },

  // {
  //   id: 2,
  //   image: img2,
  //   title: "Whatsapp clone",
  //   github: "https://github.com/Festus891/Whatsapp_clone_With_React",
  //   demo: "https://whatsapp-clone-18f3f.web.app/",
  //   case_study:
  //     "Whatsapp cloning on web  using Reactjs and firebase to practically understand how data is being store on firebase realtime database and to how data is being retrieve in each collection of database",
  //   stack: "Javascript",
  // },
  {
    id: 7,
    image: img4,
    title: "Image Getter",
    github: "https://github.com/Festus891/ImageGetter-App",
    demo: "https://image-getter-app.vercel.app/",
    type: "Image search",
    status: "Completed",
    case_study:
      "Image Getter is a responsive and efficient website designed to search for various types of images across the internet. Utilizing the Unsplash API, it fetches data from their extensive image repository, providing users with a seamless and diverse image search experience.",
    stack: "HTML, CSS, Javascript, Vercel",
  },
];

export default data;
