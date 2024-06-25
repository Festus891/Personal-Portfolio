// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import MoreAbout from "./components/about/MoreAbout";
import ProjectInfo from "./components/portfolio/ProjectInfo";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
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
]);

root.render(<RouterProvider router={router} />);

// ReactDOM.render(<App />, document.querySelector("#root"));
