import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";


const Header = () => {
  // const location = useLocation();

  const [userId, setUserId] = useState(null);
const id=useSelector(state=>state.userId)

 
console.log(id)
  return (
    <>
      <div className="w-full h-20 flex justify-between pl-8 ">
        <div className="overflow-hidden w-28 h-20 ml-16">
          <NavLink to="">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex items-center ml-8  ">
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Computing"
          >
            Computing
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="HomeApplience"
          >
            HomeApplience
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Mobile"
          >
            Mobile
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Tv"
          >
            Tv
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Display"
          >
            Display
          </NavLink>
          <NavLink
            className="px-4 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Accessories"
          >
            Accessories
          </NavLink>
        </div>
        <div className="w-fit flex gap-3 my-auto mr-16">
          {/* <NavLink
            className="px-2 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Accessories"
          >
            Support
          </NavLink> */}
          <NavLink
            className="px-2 py-2 rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            to="Accessories"
          >
            For Business
          </NavLink>
          <NavLink className="my-auto font-bold text-3xl" to="">
            <CiSearch />
          </NavLink>
          <NavLink to='cart' className="my-auto font-light text-3xl" >
            <CiShoppingCart />
          </NavLink>
          

          {id?<NavLink
            to={`/profile/${id}`}
            className="my-auto font-light text-3xl"
          >
            <CiUser />
          </NavLink>:<div className="my-auto flex">
            <NavLink
              to="Login"
              className="px-2   rounded-[20px] text-black  hover:bg-blue-600 transition-all hover:scale-110 hover:text-white "
            >
              Login
            </NavLink>
            <h1 className="my-auto mx-1">/</h1>
            <NavLink
              to="Signup"
              className="px-2   rounded-[20px] text-black  hover:bg-black transition-all hover:scale-110 hover:text-white "
            >
              Sign-Up
            </NavLink>
          </div>}

          
        </div>
      </div>
    </>
  );
};

export default Header;
