import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "./Hooks/useFetchData";
import { api } from "./config/axios.config";
import axios from "axios";


const Header = () => {
  
  const [search, setSearch] = useState([]);
 
  const id = useSelector((state) => state.userId);
  const cancelTokenSource = useRef(null);
  // const cancelTokenSource = axios.CancelToken.source();
  const handleChange = async (val) => {
    if (cancelTokenSource.current) {
      cancelTokenSource.current.cancel("Canceling previous request");
    }
    // Create a new cancel token
    cancelTokenSource.current = axios.CancelToken.source();
    try {
      const { data, loading, error } = await axios.get(
        `https://www.omdbapi.com/?s=${val}&page=1&apikey=507669ab`,
        { cancelToken: cancelTokenSource.current.token }
      );
      if (data.Search) {
        setSearch(data.Search);
      } else {
        setSearch([]);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled");
      } else {
        console.error(error);
      }
    }
  };
  // useEffect(() => {
  //   // Create a new CancelTokenSource only when search changes
  //   const currentCancelTokenSource = axios.CancelToken.source();
  //   cancelTokenSource.current = currentCancelTokenSource;

  //   // Cleanup function to cancel pending requests on unmount
  //   return () => {
  //     currentCancelTokenSource.cancel("canceling the request on unmount");
  //   };
  // }, [search]); // Ensure cancellation and re-creation on search changes


  useEffect(() => {
    return () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel("Canceling the request");
      }
    };
  }, []);

  console.log(search);
  return (
    <>
      <div className="w-[95vw] mx-auto h-16  flex justify-between pl-5 mt-5 rounded-3xl bg-black text-white ">
        <div className="overflow-hidden w-28  ml-16">
          <NavLink to="">
            <img
              className="w-full  h-full object-cover invert-[100%] "
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex items-center justify-center ml-10  ">
          <NavLink
            to=""
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
          >
            Home
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Computing"
          >
            Services
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="contactUs"
          >
            Contact Us
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="aboutUs"
          >
            About Us
          </NavLink>
          <NavLink
            className="px-2 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Accessories"
          >
            For Business
          </NavLink>
          {/* <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Mobile"
          >
            Mobile
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Tv"
          >
            Tv
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Display"
          >
            Display
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-black "
            to="Accessories"
          >
            Accessories
          </NavLink> */}
        </div>
        <div className="w-fit flex gap-3 h-7 my-auto mr-16">
          {/* <NavLink
            className="px-2 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-white "
            to="Accessories"
          >
            Support
          </NavLink> */}
          <div className="flex flex-col ">
            <input
              className="px-2 py-1 rounded-[6px] h-auto my-auto outline-none text-black"
              name="search"
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search your movies"
              type="text"
            />
            {search && search.length > 0 ? (
              <div className=" bg-blue-100 py-[3px] text-black w-[15.5rem] rounded px-2 z-10">
                {search.slice(0, 3).map((item, index) => (
                  <h1 className="pl-1 py-[1px] hover:bg-blue-400 hover:cursor-pointer" key={index}>{item.Title}</h1>
                ))}
              </div>
            ) : // {/* <h1  className="pl-1 ">{val.Title}</h1>
            // <h1  className="pl-1 border-t border-gray-300">{val.Title}</h1>
            // <h1  className="pl-1 border-t border-gray-300">{val.Title}</h1> */}

            null}
          </div>
          <NavLink className="my-auto font-bold text-3xl" to="">
            <CiSearch />
          </NavLink>
          <NavLink to="cart" className="my-auto font-light text-3xl">
            <CiShoppingCart />
          </NavLink>

          {id ? (
            <NavLink
              to={`/profile/${id}`}
              className="my-auto font-light text-3xl"
            >
              <CiUser />
            </NavLink>
          ) : (
            <div className="my-auto flex">
              <NavLink
                to="login"
                className="px-2   rounded-[20px] text-white  hover:bg-blue-600 transition-all hover:scale-110 hover:text-black "
              >
                Login
              </NavLink>
              <h1 className="my-auto mx-1">/</h1>
              <NavLink
                to="Signup"
                className="px-2   rounded-[20px] text-white  hover:bg-black transition-all hover:scale-110 hover:text-black "
              >
                Sign-Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
