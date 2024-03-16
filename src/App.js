import React from "react";

import "./index.css";

import Menu from "./Menu";
import Info from "./Info";
import Error from "./Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/info",
        element: <Info />,
      },
    ],

    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;