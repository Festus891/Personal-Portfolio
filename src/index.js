// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import router from "./components/route";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={router} />);

// ReactDOM.render(<App />, document.querySelector("#root"));
