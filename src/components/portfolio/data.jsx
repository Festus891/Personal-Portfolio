import img3 from "../../asset/portfolio.png";
import img2 from "../../asset/movieinsight.png";
import img4 from "../../asset/n-ImageGetter.jpg";
// import img4 from "../../asset/n-CountDownApp.jpg";
import img1 from "../../asset/ownit-2.png";
import getNow from "../../asset/getnow1.png";

const data = [
  {
    id: 1,
    image: img1,
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
    id: 2,
    image: getNow,
    title: "GetNow ",
    github: "",
    type: "e-commerce",
    status: "Upgrading",
    demo: "https://getnow-shopping.vercel.app/",
    case_study:
      "GetNow is a modern e-commerce platform designed to provide a seamless online shopping experience.The website is fast, responsive, and visually engaging. The backend is powered by Sanity, offering an intuitive admin dashboard for easy product management and updates.",
    stack: "Nextjs, REACTJS, CSS, TailwindCSS, Framer-motion, Sanity, Vercel",
  },
  {
    id: 3,
    image: img2,
    title: "Movie-Insight",
    // github: "https://github.com/Festus891/TheYearCountDown-App",
    demo: "https://movieinsight.vercel.app/",
    type: "Movie",
    status: "Completed",
    case_study:
      "A fully functional movie information website that allows users to search for and view details about any movie they want to watch. This is achieved by utilizing the TMDB APIs to fetch and display movie data on the frontend.",
    stack: "Reactjs, CSS, Material Ui, Api Integration, Vercel",
  },
  {
    id: 4,
    image: img3,
    title: "Personal Portfolio",
    github: "",
    type: "Personal",
    status: "Upgrading",
    demo: "https://festus.codes/",
    case_study:
      "Welcome to my personal portfolio, which I have meticulously crafted to highlight my expertise in web development. This portfolio is designed with user-friendliness and responsiveness in mind, ensuring an engaging and seamless experience for all visitors. Explore my work and see how I bring professionalism and creativity to every project.",
    stack: "REACTJS, CSS, TailwindCSS, Framer-motion, Vercel",
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
    id: 6,
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
