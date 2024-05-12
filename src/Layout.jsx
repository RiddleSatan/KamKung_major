import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useEffect, useState } from "react";

function Layout() {
  const [data, setData] = useState([]);
  function fetchData() {
    axios
      .get("/data")
      .then((res) => {
        console.log(res.data)
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
      {/* {data ? data : <h1>Something is damn wrong</h1>} */}
      {/* <Outlet /> */}
      <Login/>
      <Footer />
    </>
  );
}

export default Layout;
