import img3 from "../../asset/portfolio.png";
import img2 from "../../asset/movieinsight.png";
import img4 from "../../asset/n-ImageGetter.jpg";
// import img4 from "../../asset/n-CountDownApp.jpg";
import img1 from "../../asset/ownit.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "OwnitMart",
    github: "https://github.com/Festus891/Ownitmart-fullstack",
    demo: "https://ownitmart.vercel.app/",
    case_study:
      "OwnitMart is a fully functional e-commerce website offering a diverse range of products across various categories. Customers can easily browse through the selections, find items they desire, and make purchases seamlessly. The platform also features an admin interface for efficient product and order management.",
    stack: "REACTJS, Redux, CSS,BootstrapCss, Mongodb, Express, Nodejs",
  },
  {
    id: 2,
    image: img2,
    title: "Movie-Insight",
    // github: "https://github.com/Festus891/TheYearCountDown-App",
    demo: "https://movieinsight.vercel.app/",
    case_study:
      "A fully functional movie information website that allows users to search for and view details about any movie they want to watch. This is achieved by utilizing the TMDB APIs to fetch and display movie data on the frontend.",
    stack: "Reactjs, CSS, Material Ui, Api Integration",
  },
  {
    id: 3,
    image: img3,
    title: "Personal Portfolio",
    github: "",
    demo: "https://adedev.vercel.app/",
    case_study:
      "Welcome to my personal portfolio, which I have meticulously crafted to highlight my expertise in web development. This portfolio is designed with user-friendliness and responsiveness in mind, ensuring an engaging and seamless experience for all visitors. Explore my work and see how I bring professionalism and creativity to every project.",
    stack: "REACTJS, CSS, Framer-motion",
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
    id: 4,
    image: img4,
    title: "Image Getter",
    github: "https://github.com/Festus891/ImageGetter-App",
    demo: "https://image-getter-app.vercel.app/",
    case_study:
      "Image Getter is a responsive and efficient website designed to search for various types of images across the internet. Utilizing the Unsplash API, it fetches data from their extensive image repository, providing users with a seamless and diverse image search experience.",
    stack: "HTML, CSS, Javascript",
  },
];

export default data;
