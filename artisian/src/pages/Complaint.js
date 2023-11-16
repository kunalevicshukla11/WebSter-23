import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/userContext.js";
import WrapperComp from "../StyledComponents/WrapperComp";
import AddCommentWrapper from "../StyledComponents/AddCommentWrapper.js";
import AllCommentWrapper from "../StyledComponents/AllCommentsWrapper.js";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

const Complaint = () => {
  const params = useParams();
  const [complaint, setComplaint] = useState();
  const [comment, setComments] = useState([]);
  const [totalUpvote, setTotalUpvotes] = useState(0);
  const [totalDownvote, setTotalDownvotes] = useState(0);
  const [newcontent, setnewContent] = useState("");
  const id = params?.compID;
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");

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
  const getComment = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/comment/get-comments/${id}`
      );
      setComments(res?.data?.comments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getComplaint();
    }
  }, []);

  useEffect(() => {
    if (complaint) {
      setTotalUpvotes(complaint?.upvote);
      setTotalDownvotes(complaint?.downvote);
    }
  }, []);
  useEffect(() => {
    if (complaint) {
      getComment();
    }
  }, [complaint]);

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

  const UserID = auth?.user?._id;

  const handleNewComment = async (e) => {
    e.preventDefault();
    setNewComment(newcontent);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/comment/new-comment",
        { commentedBy: UserID, commentedOn: id, content: newcontent }
      );
    } catch (error) {
      console.log(error);
    }
  };
  if (!complaint) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  if (!auth?.user) {
    return (
      <>
        <h1>Login First!!</h1>
      </>
    );
  }

  const handleUpvote = () => {
    setTotalUpvotes(totalUpvote + 1);
    console.log(totalUpvote);
  };

  const handleDownvote = () => {
    setTotalDownvotes(totalDownvote + 1);
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
      <AddCommentWrapper>
        <div className="comment-body">
          <div className="comment-container">
            <h2>Leave a Comment</h2>

            <form className="comment-form" onSubmit={handleNewComment}>
              <input
                type="text"
                className="comment-input"
                placeholder="Write your comment..."
                value={newcontent}
                required
                onChange={(e) => setnewContent(e.target.value)}
              />
              <button type="submit" className="comment-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </AddCommentWrapper>
      <AllCommentWrapper>
        <div className="allcomment-body">
          <div className="allcomment-container">
            <h2 className="allcommenth2">Comments</h2>
            {comment.length === 0 && !newComment ? (
              <>
                <h2>No Comments Yet..</h2>
              </>
            ) : (
              <></>
            )}
            {comment.map((val) => (
              <>
                <div className="allcomment">
                  <div className="allcomment-content">
                    <p className="allcomment-author">
                      Name: {val?.commentedBy?.name}
                    </p>
                    <p className="allcomment-text">Comment: {val?.content}</p>
                  </div>
                </div>
              </>
            ))}
            {newComment ? (
              <div className="allcomment">
                <div className="allcomment-content">
                  <p className="allcomment-author">Name: {auth?.user?.name}</p>
                  <p className="allcomment-text">Comment: {newComment}</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </AllCommentWrapper>
    </>
  );
};

export default Complaint;
