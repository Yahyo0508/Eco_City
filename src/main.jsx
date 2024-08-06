import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Admin from "./pages/Admin";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <Home />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
