import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [userId, setUserId] = useState(null);
  const id = useSelector((state) => state.userId);

  console.log(id);
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
        <NavLink to=""
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
        <div className="w-fit flex gap-3 my-auto mr-16">
          {/* <NavLink
            className="px-2 py-2 rounded-[20px] text-white  hover:bg-white transition-all hover:scale-110 hover:text-white "
            to="Accessories"
          >
            Support
          </NavLink> */}
          
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
