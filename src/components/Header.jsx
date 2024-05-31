import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const id = useSelector((state) => state.userId);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="w-full bg-black text-white">
        <div className="w-[95vw] mx-auto h-16 flex justify-between items-center pl-5 mt-5 rounded-3xl bg-black text-white">
          <div className="flex items-center">
            <div className="w-28 ml-4 md:ml-16">
              <NavLink to="">
                <img
                  className="w-full h-full object-cover invert-[100%]"
                  src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"
                  alt="Logo"
                />
              </NavLink>
            </div>
            <button
              className="md:hidden ml-4 text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {["Computing", "Shop", "HomeApplience", "Mobile", "Tv", "Display", "Accessories"].map(
              (link) => (
                <NavLink
                  key={link}
                  className="px-4 py-2 rounded-[20px] text-white hover:bg-white transition-all hover:scale-110 hover:text-black"
                  to={link.toLowerCase()}
                >
                  {link}
                </NavLink>
              )
            )}
          </div>
          <div className="flex items-center space-x-3 md:space-x-4 mr-4 md:mr-16">
            <NavLink
              className="px-2 py-2 rounded-[20px] text-white hover:bg-white transition-all hover:scale-110 hover:text-black"
              to="business"
            >
              For Business
            </NavLink>
            <NavLink className="text-2xl md:text-3xl" to="">
              <CiSearch />
            </NavLink>
            <NavLink className="text-2xl md:text-3xl" to="cart">
              <CiShoppingCart />
            </NavLink>
            {id ? (
              <NavLink to={`/profile/${id}`} className="text-2xl md:text-3xl">
                <CiUser />
              </NavLink>
            ) : (
              <div className="flex items-center space-x-2">
                <NavLink
                  className="px-2 py-1 rounded-[20px] text-white hover:bg-blue-600 transition-all hover:scale-110 hover:text-black"
                  to="login"
                >
                  Login
                </NavLink>
                <h1 className="text-lg">/</h1>
                <NavLink
                  className="px-2 py-1 rounded-[20px] text-white hover:bg-black transition-all hover:scale-110 hover:text-black"
                  to="signup"
                >
                  Sign-Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black text-white">
            {["Computing", "Shop", "HomeApplience", "Mobile", "Tv", "Display", "Accessories"].map(
              (link) => (
                <NavLink
                  key={link}
                  className="block px-4 py-2 text-white hover:bg-white transition-all hover:text-black"
                  to={link.toLowerCase()}
                  onClick={toggleMenu}
                >
                  {link}
                </NavLink>
              )
            )}
            <div className="flex flex-col items-center py-2">
              {id ? (
                <NavLink
                  to={`/profile/${id}`}
                  className="block px-4 py-2 text-2xl"
                  onClick={toggleMenu}
                >
                  <CiUser />
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className="block px-4 py-2 text-white hover:bg-blue-600 transition-all"
                    to="login"
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="block px-4 py-2 text-white hover:bg-black transition-all"
                    to="signup"
                    onClick={toggleMenu}
                  >
                    Sign-Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
