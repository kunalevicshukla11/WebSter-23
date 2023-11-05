import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavbarCss.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="dropdown">
          <NavLink to="/" className="a">
            Student
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/login-student" className="a">
              Login as Student
            </NavLink>
            <NavLink to="/signup-student" className="a">
              SignUp as Student
            </NavLink>
          </div>
        </div>
        <div className="dropdown">
          <NavLink to="/" className="a">
            Admin
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/login-admin" className="a">
              Login as Admin
            </NavLink>
            <NavLink to="/signup-admin" className="a">
              Signup as Admin
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
