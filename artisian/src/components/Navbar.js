import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Sidebar from "./sidebar";
import { useAuth } from "../context/userContext";
import ProfileDropDown from "./ProfileDropdown";
import UserSettings from "./UserSettings";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [showAccountantDropdown, setShowAccountantDropdown] = useState(false);
  const [showStudentRepDropdown, setShowStudentRepDropdown] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = (e) => {
    localStorage.removeItem("auth");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = (active) => {
    if (active === "home") setShowHomeDropdown(true);
    else if (active === "student") setShowStudentDropdown(true);
    else if (active === "admin") setShowAdminDropdown(true);
    else if (active === "accountant") setShowAccountantDropdown(true);
    else if (active === "studentRep") setShowStudentRepDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowHomeDropdown(false);
    setShowStudentDropdown(false);
    setShowAdminDropdown(false);
    setShowAccountantDropdown(false);
    setShowStudentRepDropdown(false);
  };

  return (
    <nav className="">
      <div className=" fixed w-full mx-auto flex justify-between  items-center px-2 mt-0 h-28 pt-10 bg-indigo-800 border-l-[5px] border-r-[5px] border-b-[5px] border-t-[4px] border-black rounded-b-[20px] bg-opacity-60 ">
        <NavLink to="/">
          {nav ? (
            ""
          ) : (
            <img
              className="w-[328px] h-[328px] pb-10 "
              src="/images/Api Artisans-logos_white.png"
              alt="Logo"
            />
          )}
        </NavLink>

        <ul
          className="hidden a:flex a:space-x-16 a:text-xl a:mr-8 a:mt-[10px] a:pb-10 relative"
          onMouseLeave={handleMouseLeave}
        >
          {!auth.user ? (
            <>
              <li
                className=" p-[10px] h-[50px] bg-gray-300 rounded-[4px] hover:rounded-xl hover:outline-solid hover:border-2 border-gray-900 text-black "
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Home
                </NavLink>
                {showHomeDropdown && (
                  <div className="absolute outline-solid border-2 border-gray-900 mt-[10.9px] -ml-[34px]  text-[19px] gap-2  bg-gray-300 text-black w-32 h-24 flex flex-col justify-center">
                    <Link
                      className=" hover:opacity-50 font-mono text-center pb-2 border-b-[2.5px] border-gray-900 cursor-pointer "
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      About Us
                    </Link>
                    <Link
                      className="hover:opacity-50  border-gray-900  font-mono text-center  cursor-pointer"
                      to="Contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </li>
              <li
                className="hover:bg-gray-300 p-[10px] h-[44px] rounded-md hover:outline-solid hover:border-2 pb-4 hover:text-black border-gray-900 "
                onMouseEnter={() => handleMouseEnter("student")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Student
                </NavLink>
                {showStudentDropdown && (
                  <div className="absolute outline-solid border-2 border-gray-900 mt-[4.5px] -ml-[28px] text-[19px] gap-2  bg-gray-300 text-black w-[135px] h-24 flex flex-col justify-center">
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
                className="hover:bg-gray-300 hover:outline-solid hover:border-2 rounded-lg border-gray-900 hover:text-black p-[10px] h-[44px]"
                onMouseEnter={() => handleMouseEnter("admin")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Admin
                </NavLink>
                {showAdminDropdown && (
                  <div className=" absolute outline-solid border-2 border-gray-900 mt-[4.5px] -ml-[32.5px] text-[19px] gap-2  bg-gray-300 text-black w-[130px] h-24 flex flex-col justify-center">
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
            <div className="">
              <li className="absolute">
                <ProfileDropDown />
              </li>
              <li className="absolute">
                <UserSettings />
              </li>
            </div>
          )}

          {!auth.user ? (
            <>
              <li
                className="hover:bg-gray-300 p-[10px] h-[44px] rounded-md hover:outline-solid hover:border-2 pb-4 hover:text-black border-gray-900 "
                onMouseEnter={() => handleMouseEnter("accountant")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Accountant
                </NavLink>
                {showAccountantDropdown && (
                  <div className="absolute outline-solid border-2 border-gray-900 mt-[4.5px] -ml-[11.5px] text-[19px] gap-2  bg-gray-300 text-black w-[130px] h-24 flex flex-col justify-center">
                    <NavLink
                      className="font-mono hover:opacity-50 text-center pb-2 border-b-[2.5px] border-gray-900 "
                      to="/login-accountant"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="font-mono hover:opacity-50 text-center"
                      to="/signup-accountant"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </li>

              {/* Student Representative Dropdown */}
              <li
                className="hover:bg-gray-300 p-[10px] h-[44px] rounded-md hover:outline-solid hover:border-2 pb-4 hover:text-black border-gray-900 "
                onMouseEnter={() => handleMouseEnter("studentRep")}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink className="hover:opacity-50" to="/">
                  Student Representative
                </NavLink>
                {showStudentRepDropdown && (
                  <div className="absolute outline-solid border-2 border-gray-900 mt-[4.5px] ml-[32.5px] text-[19px] gap-2  bg-gray-300 text-black w-40 h-[100px] flex flex-col justify-center">
                    <NavLink
                      className="font-mono hover:opacity-50 text-center pb-2 border-b-[2.5px] border-gray-900 "
                      to="/login-studentrep"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="font-mono hover:opacity-50 text-center"
                      to="/signup-studentrep"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <div onClick={handleNav} className="block mr-4 a:hidden  ">
          {nav ? (
            <AiOutlineCloseSquare className="hover:cursor-pointer h-[30px] w-[30px] " />
          ) : (
            <ImMenu className="hover:cursor-pointer h-[30px] w-[30px]" />
          )}
        </div>
        <div
          className={`fixed left-0 top-0 w-[60%] bg-stone-900 bg-opacity-80 text-xl bg-#067F8D  h-full border-r-2 border-black transition-transform duration-500 ease-in-out ${
            !nav ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <img
            className="absolute -mt-[115px] -ml-8 w-[358px] h-[348px]"
            src="/images/Api Artisans-logos_white.png"
            alt="Logo"
          />
          <Sidebar className="" />
        </div>
      </div>
    </nav>
  );
}
