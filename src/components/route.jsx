// routes.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import App from "../App";

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
      {
        path: "/about",
        element: <MoreAbout />,
      },
      {
        path: "/projectInfo",
        element: <ProjectInfo />,
      },
    ],
  },
]);

export default router;
