import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";
import Gallery from "../components/Gallery/Gallery";
import ContactForm from "../components/contact-us/ContactForm";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/work",
        element: <Work/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/contact-us",
        element: <ContactForm/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
]);
