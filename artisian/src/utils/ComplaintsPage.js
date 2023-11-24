import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ".././CSS/compCss.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
      <div>
        <div
          style={{
            backgroundColor: "#014f59",
            height: "55px",
          }}
        >
          {auth?.user?.role === 2 || auth?.user?.role === 4 ? (
            <>
              <Link
                to="/new-complaint"
                className="btn btn-hero"
                style={{
                  marginLeft: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "6px",
                }}
              >
                Register Complaint
              </Link>
            </>
          ) : (
            <></>
          )}

          <Link
            to="/mess-menu"
            className="btn edit-btn"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: "yellowgreen",
              color: "black",
            }}
          >
            Mess Menu
          </Link>

          <button
            type="button"
            className="btn delete-btn"
            style={{ backgroundColor: "rebeccapurple" }}
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
        <h1>No Complaints Available</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "ActiveCaption",
            height: "55px",
          }}
        >
          {auth?.user?.role === 2 || auth?.user?.role === 4 ? (
            <>
              <Link
                to="/new-complaint"
                className="btn btn-hero"
                style={{
                  marginLeft: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "6px",
                }}
              >
                Register Complaint
              </Link>
            </>
          ) : (
            <></>
          )}

          <Link
            to="/mess-menu"
            className="btn edit-btn"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              backgroundColor: "yellowgreen",
              marginTop: "8px",
              color: "black",
            }}
          >
            Mess Menu
          </Link>

          <button
            type="button"
            className="btn delete-btn"
            style={{ backgroundColor: "rebeccapurple" }}
            onClick={handleClick}
          >
            Logout
          </button>
        </div>
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
