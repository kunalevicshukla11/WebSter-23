import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
export default function Landing() {
  return (
    <>
      <Navbar className="" />
      <div>
        <img
          className="  h-screen m-0 p-0 bg-center bg-fixed bg-cover bg-no-repeat object-cover object-center"
          src="/images/backg.png"
          alt="background-image"
        />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
}
