import React from "react";

import HostelCard from "../components/HostelCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Dashboard = () => {
  return (
    <>
      <Navbar className="absolute"></Navbar>
      <div className="flex justify-center items-center h-screen">
        <HostelCard
          title="Sample Card"
          content="This is a simple card component."
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
