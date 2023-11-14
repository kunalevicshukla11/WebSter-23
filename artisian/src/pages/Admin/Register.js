import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [HostelID, setHostelID] = useState();
  const [HostelName, setHostelName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/register-admin`,
        { name, email, password, HostelID, HostelName }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login-admin");
      }
    } catch (error) {
      const msg = error.response.data.message;
      console.log(error);
      toast.error(msg);
    }
  };

  return (
    <>
      <div className="containerRUser">
        <div className="cardRUser">
          <div className="card_titleRUser">
            <h1>Create Account</h1>
            <span>
              Already have an account?{" "}
              <NavLink to="/login-admin">Sign In</NavLink>
            </span>
          </div>
          <div className="form formRUser">
            <form action="/register" method="post" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                name="studentid"
                id="studentid"
                placeholder="Hostel ID"
                value={HostelID}
                onChange={(e) => setHostelID(e.target.value)}
                required
              />
              <input
                type="text"
                name="Hostel"
                id="Hostel"
                placeholder="Hostel Name"
                value={HostelName}
                onChange={(e) => setHostelName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
