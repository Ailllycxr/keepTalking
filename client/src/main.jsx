import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import GameWrapper from "./components/GameWrapper.jsx";
import Scores from "./pages/Scores.jsx";
import Manual from "./pages/Manual.jsx";
import Error from "./pages/Error.jsx";
import AboutDev from "./pages/AboutDev.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game",
        element: <GameWrapper />,
      },
      {
        path: "/manual",
        element: <Manual />,
      },
      {
        path: "/scores",
        element: <Scores />,
      },
      {
        path: "/about",
        element: <AboutDev />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
