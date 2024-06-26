// routes.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import App from "../App";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Porfolio from "./portfolio/Porfolio";
import About from "./about/About";
import MoreAbout from "./about/MoreAbout";
import ProjectInfo from "./portfolio/ProjectInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App tab="home" />,
      },
      { path: "/about", element: <About /> },
      { path: "/moreAbout", element: <MoreAbout /> },
      { path: "/portfolio", element: <Porfolio /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projectInfo", element: <ProjectInfo /> },
    ],
  },
]);

export default router;
