import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/userContext";
import RegisterComplaintWrapper from "../StyledComponents/RegisterComplaintWrapper.js";

const RegisterComplaint = () => {
  const [auth, setAuth] = useAuth();
  const [name, setHostelName] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  if (!auth?.user) {
    return (
      <>
        <h1>Please Login to Register the complaint</h1>
      </>
    );
  }
  if (auth.user.role !== 2) {
    return (
      <>
        <h1>You Do not have permission to register the complaint</h1>
      </>
    );
  }
  const student = auth?.user._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/comp/new-complaint",
        { name, heading, content, student }
      );
      console.log(res.data.message);
      toast.success("Registered Successfully!");

      if (res.data.success) {
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      const msg = error.response.data.message;
      console.log(error);
      toast.error(msg);
    }
  };

  return (
    <>
      <RegisterComplaintWrapper>
        <div className="content-container">
          <form className="content" onSubmit={handleSubmit}>
            <h2>Complaint Form</h2>
            <label className="complaint-lable" htmlFor="name">
              HostelName:
            </label>
            <input
              className="inp-txt"
              type="text"
              id="hostelname"
              name="hostelname"
              value={name}
              onChange={(e) => setHostelName(e.target.value)}
              required
            />

            <label className="complaint-lable" htmlFor="email">
              Heading:
            </label>
            <input
              className="inp-txt"
              type="text"
              id="heading"
              name="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
            />

            <label className="complaint-lable" htmlFor="complaint">
              Complaint:
            </label>
            <textarea
              className="inp-txt"
              id="complaint"
              name="complaint"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              required
            ></textarea>

            <button className="comp-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </RegisterComplaintWrapper>
    </>
  );
};

export default RegisterComplaint;
