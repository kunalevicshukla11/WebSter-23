import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ".././CSS/compCss.css";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/userContext.js";
import WrapperCompPage from "../StyledComponents/WrapperCompPage.js";
import Comp from "./Comp.js";

const ComplaintsPage = (props) => {
  const [compData, setCompData] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    getCompalaints();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    navigate("/");
  };

  const getCompalaints = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/comp/all-complaints/${props.HostelName}`
    );
    setCompData(data.comp);
  };
  if (compData.length === 0) {
    return (
      <WrapperCompPage>
        {auth?.user?.role !== 1 ? (
          <>
            <Link to="/new-complaint" className="btn btn-hero">
              Register Complaint
            </Link>
          </>
        ) : (
          <></>
        )}
        <Link to="/mess-menu" className="btn edit-btn">
          Mess Menu
        </Link>
        <button type="button" className="btn delete-btn" onClick={handleClick}>
          Logout
        </button>
        <h2>Currently No Complaints....</h2>
      </WrapperCompPage>
    );
  }
  return (
    <>
      <div>
        <WrapperCompPage>
          {auth?.user?.role !== 1 ? (
            <>
              <Link to="/new-complaint" className="btn btn-hero">
                Register Complaint
              </Link>
            </>
          ) : (
            <></>
          )}
          <Link to="/mess-menu" className="btn edit-btn">
            Mess Menu
          </Link>
          <button
            type="button"
            className="btn delete-btn"
            onClick={handleClick}
          >
            Logout
          </button>
        </WrapperCompPage>
      </div>
      <WrapperCompPage>
        <h5>Total Complaints</h5>

        <div className="jobs">
          {compData.map((val) => {
            return <Comp compData={val} />;
          })}
        </div>
      </WrapperCompPage>
    </>
  );
};

export default ComplaintsPage;
