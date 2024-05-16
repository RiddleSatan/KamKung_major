import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function Layout() {
  const [data, setData] = useState([]);
  function fetchData() {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {/* {data ? data : <h1>Something is damn wrong</h1>}  */}
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />

      <Footer />
    </>
  );
}

export default Layout;
