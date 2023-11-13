import React from "react";

import HostelCard from "../components/HostelCard";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <HostelCard
          title="Sample Card"
          content="This is a simple card component."
        />
      </div>
    </>
  );
};

export default Dashboard;
