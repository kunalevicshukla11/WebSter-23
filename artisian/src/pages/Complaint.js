import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/userContext.js";
import WrapperComp from "../StyledComponents/WrapperComp";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const Complaint = () => {
  const params = useParams();
  const [complaint, setComplaint] = useState();
  const id = params?.compID;
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const getComplaint = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/comp/sigle-complaint/${id}`
      );
      setComplaint(res.data.comp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getComplaint();
    }
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
  if (!complaint) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  let totalUpvote = complaint.upvote;
  let totalDownvote = complaint.downvote;

  const handleUpvote = async () => {
    totalUpvote = totalUpvote + 1;
    console.log(totalUpvote);
  };

  const handleDownvote = async () => {
    totalDownvote = totalDownvote + 1;
    console.log(totalDownvote);
  };

  return (
    <>
      <WrapperComp>
        <div>
          <button
            type="button"
            className="btn delete-btn"
            onClick={handleClick}
            style={{
              marginTop: "5px",
              marginLeft: "5px",
              marginRight: "5px",
              marginBottom: "5px",
            }}
          >
            Logout
          </button>
        </div>
        <header>
          <div className="main-icon">{complaint?.student?.name.charAt(0)}</div>
          <div className="info">
            <p>Created By: {complaint?.student?.name}</p>
            <h5>Hostel: {complaint?.name}</h5>
            <h5>RegistrationNo: {complaint?.student?.registrationNo}</h5>
            <p>About: {complaint?.heading}</p>
          </div>
        </header>
        <div className="content">
          <div className="content-center">
            <h3>
              Complaint: <br /> {complaint?.content}
            </h3>
          </div>
          <footer>
            <div className="actions">
              {auth?.user?.role === 1 ? (
                <>
                  {" "}
                  <button
                    type="button"
                    className="btn delete-btn"
                    style={{ marginBottom: "20px" }}
                  >
                    Resolve
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
            <div>
              <button
                className="btn edit-btn"
                style={{ marginRight: "10px" }}
                onClick={handleUpvote}
              >
                <i>
                  <FaRegThumbsUp />
                </i>
              </button>
              <span>{totalUpvote}</span>
              <button
                className="btn delete-btn"
                style={{ marginLeft: "10px", marginRight: "10px" }}
                onClick={handleDownvote}
              >
                <i>
                  <FaRegThumbsDown />
                </i>
              </button>
              <span>{totalDownvote}</span>
            </div>
          </footer>
        </div>
      </WrapperComp>
      <div>
        <h1>All the comments will be there</h1>
      </div>
    </>
  );
};

export default Complaint;
