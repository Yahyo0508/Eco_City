import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />, // Ensure this path uses the Home component
  },
  {
    path: '/user',
    element: <User />, // Add route for User page
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
