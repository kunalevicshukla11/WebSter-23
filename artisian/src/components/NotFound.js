import React from "react";
import { NavLink } from "react-router-dom";
import ".././CSS/NotFound.css";

const NotFound = () => {
  return (
    <div className="errbody">
      <h1 className="errh1">404 Not Found!</h1>
      <p className="zoom-area">
        <b>OOPs!</b> Looks like you are out of station.{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <NavLink to={"/"} className="more-link">
          Go back to Ganga gate!
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
