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
import { useToast } from "@chakra-ui/react";

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
  const [votedStatus, setVotedStatus] = useState(0);
  const [isBanned, setisBanned] = useState(false);
  const toast = useToast();

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
  const getBannedUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/check-banned-user",
        { userId: auth?.user?._id }
      );
      if (res?.data?.student) {
        setisBanned(true);
      }
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

  const getVotedUser = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/vote/find-uservote",
        { votedBy: auth?.user?._id, votedOn: id }
      );

      if (res?.data?.votedUser) {
        setVotedStatus(res?.data?.votedUser?.vote);
      }
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
      getVotedUser();
      getBannedUser();
    }
  }, [complaint]);
  useEffect(() => {
    if (complaint) {
      getComment();
    }
  }, [complaint]);

  const handleClick = (e) => {
    e.preventDefault();
    toast({
      title: `Logged Out!!`,
      description: "Success",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

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
    if (isBanned) {
      toast({
        title: `You Cant't comment you are banned!`,
        description: "Comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setNewComment(newcontent);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/comment/new-comment",
        { commentedBy: UserID, commentedOn: id, content: newcontent }
      );
      toast({
        title: `${res?.data?.message}`,
        description: "Success",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `${error?.response?.data?.message}`,
        description: "Comment",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
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

  const handleUpvote = async () => {
    if (votedStatus === 0 || votedStatus === 2) {
      try {
        if (votedStatus === 0) {
          const res = await axios.post(
            "http://localhost:4000/api/v1/vote/new-vote",
            { vote: 1, votedBy: auth?.user?._id, votedOn: id }
          );
        } else {
          const res = await axios.put(
            "http://localhost:4000/api/v1/vote/update-uservote",
            { vote: 1, votedBy: auth?.user?._id, votedOn: id }
          );
        }
      } catch (error) {
        console.log(error);
      }

      try {
        if (votedStatus === 0) {
          const compRes = await axios.put(
            `http://localhost:4000/api/v1/comp/update-vote/${id}`,
            {
              totalUpvote: totalUpvote + 1,
              totalDownvote: totalDownvote,
            }
          );
          setTotalUpvotes(totalUpvote + 1);
        } else {
          const compRes = await axios.put(
            `http://localhost:4000/api/v1/comp/update-vote/${id}`,
            {
              totalUpvote: totalUpvote + 1,
              totalDownvote: totalDownvote === 0 ? 0 : totalDownvote - 1,
            }
          );
          setTotalUpvotes(totalUpvote + 1);
          setTotalDownvotes(totalDownvote === 0 ? 0 : totalDownvote - 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setVotedStatus(1);
  };

  const handleDownvote = async () => {
    if (votedStatus === 0 || votedStatus === 1) {
      try {
        if (votedStatus === 0) {
          const res = await axios.post(
            "http://localhost:4000/api/v1/vote/new-vote",
            { vote: 2, votedBy: auth?.user?._id, votedOn: id }
          );
        } else {
          const res = await axios.put(
            "http://localhost:4000/api/v1/vote/update-uservote",
            { vote: 2, votedBy: auth?.user?._id, votedOn: id }
          );
        }
      } catch (error) {
        console.log(error);
      }

      try {
        if (votedStatus === 0) {
          const compRes = await axios.put(
            `http://localhost:4000/api/v1/comp/update-vote/${id}`,
            {
              totalUpvote: totalUpvote,
              totalDownvote: totalDownvote + 1,
            }
          );
          setTotalDownvotes(totalDownvote + 1);
        } else {
          const compRes = await axios.put(
            `http://localhost:4000/api/v1/comp/update-vote/${id}`,
            {
              totalUpvote: totalUpvote === 0 ? 0 : totalUpvote - 1,
              totalDownvote: totalDownvote + 1,
            }
          );
          setTotalDownvotes(totalDownvote + 1);
          setTotalUpvotes(totalUpvote === 0 ? 0 : totalUpvote - 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setVotedStatus(2);
  };

  const handleBan = async ({ commentedBy }) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/ban-user",
        { userId: commentedBy }
      );
      if (res?.data?.success) {
        toast({
          title: `${res?.data?.message}`,
          description: "Success",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `${error.response.data.message}`,
        description: "Success",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
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
                      Name:{" "}
                      {val?.commentedBy?.name
                        ? val.commentedBy.name
                        : "Admin/Representative/Accountant"}
                    </p>
                    <p className="allcomment-text">Comment: {val?.content}</p>
                    {auth?.user?.role === 4 && val?.commentedBy?.role === 2 ? (
                      <button
                        type="button"
                        className="btn delete-btn"
                        id={"banned"}
                        style={{ marginBottom: "20px" }}
                        onClick={() =>
                          handleBan({ commentedBy: val?.commentedBy })
                        }
                      >
                        Ban User
                      </button>
                    ) : (
                      <></>
                    )}
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
