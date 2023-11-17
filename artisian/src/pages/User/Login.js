import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/login-student`,
        { email, password }
      );

      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
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
    <>
      <div className="flex items-center justify-center min-h-screen">
        <img
          className="h-screen w-screen object-cover"
          src="/images/dark2.png"
          alt="loginbg"
        />

        <div className="absolute w-[300px] h-[450px]  sm:w-[400px] sm:h-[440px] p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-950  text-gray-300 opacity-80">
          <div className="text-center">
            <h1 className="text-3xl font-mono font-bold">Student Login</h1>
            <span className=" text-[17px]">
              Don't have an account?{" "}
              <NavLink className="font-bold" to="/signup-student">
                Sign Up
              </NavLink>
            </span>
          </div>
          <form
            className=""
            action="/Login"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col py-4 px-2">
              <lable className=" text-md font-bold">Email</lable>
              <input
                className="w-full  p-1.5 text-white bg-gray-700"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col py-4 px-2">
              <lable className="text-md font-bold ">Password</lable>
              <input
                className="w-full p-2 text-white bg-gray-700"
                type="password"
                name="password"
                size={30}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="flex ml-2 items-center">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <button
              className="border w-full my-5 py-4 hover:bg-zinc-950 font-bold"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
