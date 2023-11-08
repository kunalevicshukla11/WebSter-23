import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "../../CSS/LoginUser.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/login-student`,
        { email, password }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      const msg = error.response.data.message;
      console.log(error);
      toast.error(msg);
    }
  };

  return (
    <div className="containerLUser">
      <div className="cardLUser">
        <div className="card_titleLUser">
          <h1>Student Login</h1>
          <span>
            Don't have an account?{" "}
            <NavLink to="/signup-student">SignUp</NavLink>
          </span>
        </div>
        <div className="form formLUser">
          <form action="/Login" method="post" onSubmit={handleSubmit}>
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
