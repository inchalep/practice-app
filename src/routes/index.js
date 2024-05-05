import { Link, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
