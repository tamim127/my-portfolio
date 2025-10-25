import { createBrowserRouter } from "react-router";
import MainLayouts from "../Componenets/MainLayouts/MainLayouts";
import HomePage from "../Pages/HomePage/HomePage";
import NotFound from "../Pages/NotFound";
import About from "../Componenets/About";
import Projects from "../Componenets/Projects";
import Services from "../Componenets/Services";
import Contact from "../Componenets/Contacts";
import SplashScreen from "../Componenets/SplashScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: (
          <>
            <SplashScreen />
            <HomePage />
          </>
        ),
      },
      { path: "/homepage", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
