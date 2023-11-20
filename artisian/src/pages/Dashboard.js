import React from "react";

import HostelCard from "../components/HostelCard";
import { useAuth } from "../context/userContext";

import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();

  if (!auth.user) {
    return (
      <>
        <h1>You Do not have access to this page. Please Login!</h1>
      </>
    );
  }

  return (
    <>
      <img
        className="absolute h-screen w-full"
        src="/images/dash.jpg"
        alt="dashboard bg"
      ></img>
      <Navbar className="" />

      <div className="flex justify-center items-center h-screen">
        <HostelCard
          title="Sample Card"
          content="This is a simple card component."
        />
      </div>
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Dashboard;
