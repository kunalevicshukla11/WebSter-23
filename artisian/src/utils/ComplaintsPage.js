import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ".././CSS/compCss.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const ComplaintsPage = (props) => {
  const [compData, setCompData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCompalaints();
  }, []);

  const getCompalaints = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/comp/all-complaints/${props.HostelName}`
    );
    setCompData(data.comp);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        {compData.length === 0 ? (
          "No Complaints Available"
        ) : (
          <div>
            {compData.map((val) => {
              return (
                <div>
                  <div className="cardComp">
                    <div className="ilustrationComp"></div>
                    <h3 className="Comph3">CreatedBy: {val.student.name}</h3>
                    <p className="Compp">{val.content}</p>
                    <button
                      className="CompB"
                      //   onSubmit={navigate(`/sigle-complaint/${val._id}`)}
                    >
                      view complaint
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ComplaintsPage;
