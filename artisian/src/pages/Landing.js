import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Landing() {
  return (
    <>
      <Layout>
        <div className="">
          <img
            className="h-screen m-0 p-0 bg-center bg-fixed bg-cover bg-no-repeat object-cover object-center"
            src="/images/backg.png"
            alt="background-image"
          />
        </div>
      </Layout>
    </>
  );
}
