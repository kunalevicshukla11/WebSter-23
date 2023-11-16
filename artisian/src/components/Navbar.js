import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Sidebar from "./sidebar";
import { useAuth } from "../context/userContext";

export default function Navbar() {

  const [nav, setNav] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = (e) => {
    localStorage.removeItem("auth");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
  };
  // const name = auth.user ? auth.user.name : "Home";

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = (active) => {
    if (active === "home") setShowHomeDropdown(true);
    else if (active === "student") setShowStudentDropdown(true);
    else if (active === "admin") setShowAdminDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowHomeDropdown(false);
    setShowStudentDropdown(false);
    setShowAdminDropdown(false);
  };

  return (
    <nav className="">
      <div className="absolute w-screen mx-auto flex justify-between items-center h-16 px-2 mt-6">
        <NavLink to="/">
          {nav ? ("") : (
            <img className="w-[328px] h-[328px] " src="/images/Api Artisans-logos_transparent.png" alt="Logo" />
          )}
        </NavLink>

        <ul
          className="hidden md:flex md:space-x-16 md:text-xl md:mr-8 md:mt-[30px] relative"
          onMouseLeave={handleMouseLeave}>
          <li
            className=" p-[10px] h-[50px] bg-gray-700 rounded-[4px] hover:rounded-xl hover:outline-solid hover:border-2 border-gray-900 text-gray-300 "
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink className="hover:opacity-50" to="/">
              Home
            </NavLink>{" "}
            {showHomeDropdown && (
              <div className="absolute outline-solid border-2 border-gray-900 mt-[10.9px] -ml-[34px]  text-[19px] gap-2  bg-gray-700 text-white w-32 h-24 flex flex-col justify-center">
                <NavLink
                  className=" hover:opacity-50 font-mono text-center pb-2 border-b-[2.5px] border-gray-900 "
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className="hover:opacity-50 font-mono text-center "
                  to="/contact"
                >
                  Contact Us
                </NavLink>


                <NavLink
                  className=" hover:opacity-50 font-mono text-center pb-2 border-b-[2.5px] border-gray-900 "
                  to="/profile"
                >
                  My-Profile
                </NavLink>


              </div>
            )}
          </li>


          {!auth.user ? (
            <>
              <li
                className="hover:bg-gray-700 p-[10px] h-[44px] rounded-md hover:outline-solid hover:border-2 pb-4 hover:text-gray-300 border-gray-900 "
                onMouseEnter={() => handleMouseEnter("student")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Student
                </NavLink>
                {showStudentDropdown && (
                  <div className="absolute outline-solid border-2 border-gray-900 mt-[4.5px] -ml-[28px] text-[19px] gap-2  bg-gray-700 text-white w-[135px] h-24 flex flex-col justify-center">
                    <NavLink
                      className="hover:opacity-50 font-mono pb-2 border-b-[2.5px] border-gray-900 text-center"
                      to="/login-student"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="hover:opacity-50 font-mono text-center"
                      to="/signup-student"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </li>
              <li
                className="hover:bg-gray-700  hover:outline-solid hover:border-2 rounded-lg border-gray-900 hover:text-gray-300 p-[10px] h-[44px]"
                onMouseEnter={() => handleMouseEnter("admin")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Admin
                </NavLink>
                {showAdminDropdown && (
                  <div className=" absolute outline-solid border-2 border-gray-900 mt-[4.5px] -ml-[32.5px] text-[19px] gap-2  bg-gray-700 text-white w-[130px] h-24 flex flex-col justify-center">
                    <NavLink
                      className="font-mono hover:opacity-50 text-center pb-2 border-b-[2.5px] border-gray-900 "
                      to="/login-admin"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="font-mono hover:opacity-50 text-center"
                      to="/signup-admin"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li
                className=" p-[10px] h-[50px] bg-gray-700 rounded-[4px] hover:rounded-xl hover:outline-solid hover:border-2 border-gray-900 text-gray-300 "
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  className="font-mono hover:opacity-50 text-center"
                  to="/"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div onClick={handleNav} className="block mr-4 md:hidden  ">
          {nav ? (
            <AiOutlineCloseSquare className="hover:cursor-pointer h-[30px] w-[30px] " />
          ) : (
            <ImMenu className="hover:cursor-pointer h-[30px] w-[30px]" />
          )}
        </div>
        <div
          className={`fixed left-0 top-0 w-[60%] bg-stone-900 bg-opacity-80 text-xl bg-#067F8D  h-full border-r-2 border-black transition-transform duration-500 ease-in-out ${!nav ? "-translate-x-full" : "translate-x-0"
            }`}
        >
          <img
            className="absolute -mt-[115px] -ml-8 w-[358px] h-[348px]"
            src="/images/Api Artisans-logos_transparent.png"
            alt="Logo"
          />
          <Sidebar className="" />
        </div>
      </div>
    </nav>
  );
}
