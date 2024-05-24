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
import HandlingData from "./components/HandlingData.jsx";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store.js";
import PrivateRoute from "./components/ProtectedRoutes/PrivateRoute.jsx";
import GuestRoute from "./components/ProtectedRoutes/GuestRoute.jsx";

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
        path: "homeappliance",
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
        
        element: <GuestRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <SignUp /> },
        ],
      },
      {
        
        element: <PrivateRoute />,
        children: [
          {
            path: "profile/:id",
            element: <Profile />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "mobile",
//         element: <Mobile />,
//       },
//       {
//         path: "tv",
//         element: <Tv />,
//       },
//       {
//         path: "homeappliance",
//         element: <HomeApplience />,
//       },
//       {
//         path: "computing",
//         element: <Computing />,
//       },
//       {
//         path: "display",
//         element: <Display />,
//       },
//       {
//         path: "accessories",
//         element: <Accessories />,
//       },
//       {
//         path: "login",
//         element: (
//           <GuestRoute>
//             <Login />
//           </GuestRoute>
//         ),
//       },
//       {
//         path: "signup",
//         element: (
//           <GuestRoute>
//             <SignUp />
//           </GuestRoute>
//         ),
//       },
//       {
//         path: "profile/:id",
//         element: (
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "cart",
//         element: (
//           <PrivateRoute>
//             <Cart />
//           </PrivateRoute>
//         ),
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <HandlingData /> */}
    </Provider>
  </React.StrictMode>
);
