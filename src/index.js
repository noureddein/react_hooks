import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main";
import Home from "./useEffect/Home";
import User from "./useEffect/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/posts",
        element: <Home />,
    },
    {
        path: "user/:userId",
        element: <User />,
      },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);
