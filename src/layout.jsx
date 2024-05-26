import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { api } from "./components/config/axios.config";
import { addInfo } from "./features/slice";
import { useDispatch } from "react-redux";





function Layout() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
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

  const loginCheck = async () => {
    
    const user = await api.get("/getCurrentUser", { withCredentials: true });
    const id = user.data._id;
    const email = user.data.email;
    dispatch(addInfo({ userId: id, email }));
  
  };

  useEffect(() => {
    fetchData();
    loginCheck();
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
