import React from "react";

import HostelCard from "../components/HostelCard";
import { useAuth } from "../context/userContext";
import Layout from "../components/Layout";
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
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <HostelCard
            title="Sample Card"
            content="This is a simple card component."
          />
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
