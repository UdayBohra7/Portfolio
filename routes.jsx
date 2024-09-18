import { useMemo } from "react";
import Root from "./src/layout/Root";
import About from "./src/components/pages/about";
import Contact from "./src/components/pages/contact";
import Experience from "./src/components/pages/Experience";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact",
          element: <Experience />,
        },
      ]
    }
  ]);
  
  return (
    <RouterProvider router={routes}/>
  )
}

export default Routes