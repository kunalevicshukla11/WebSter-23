import React from "react";
import Layout from "../components/Layout";
import HostelCard from '../components/HostelCard';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <HostelCard title="Sample Card" content="This is a simple card component." />
      </div>



    </Layout>
  );
};

export default Dashboard;
