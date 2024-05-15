import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Accessories from "./components/Accessories.jsx";
import Computing from "./components/Computing.jsx";
import Mobile from "./components/Mobile.jsx";
import HomeApplience from "./components/HomeApplience.jsx";
import Shop from "./components/Shop.jsx";
import Tv from "./components/Tv.jsx";
import Display from "./components/Display.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "mobile",
        element: <Mobile />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "HomeApplience",
        element: <HomeApplience />,
      },
      {
        path: "computing",
        element: <Computing />,
      },
      {
        path: "display",
        element: <Display />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "display",
        element: <Display />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"Cart",
        element:<Cart/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
