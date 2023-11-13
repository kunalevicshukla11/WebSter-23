import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Footer from "../../components/Footer";

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
    <>
      <div className="flex items-center justify-center min-h-screen">
        <img
          className="h-screen w-screen object-cover"
          src="/images/dark2.png"
          alt="loginbg"
        />

        <div className="absolute w-[300px] h-[450px]  sm:w-[400px] sm:h-[430px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black  text-gray-300 opacity-60">
          <div className="text-center">
            <h1 className="text-3xl">Student Login</h1>
            <span className="  text-[17px]">
              Don't have an account?{" "}
              <NavLink className="font-bold" to="/signup-student">
                SignUp
              </NavLink>
            </span>
          </div>
          <form action="/Login" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col py-4 px-2">
              <lable className="text-2xl pb-2">Email</lable>
              <input
                className="w-full h-[40px] pl-1 bg-white text-black"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col py-4 px-2">
              <lable className="text-2xl ">Password</lable>
              <input
                className="w-full pl-1 h-[30px] bg-white text-black"
                type="password"
                name="password"
                size={30}
                placeholder="Password"
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
              className="border w-full my-5 py-4 hover:bg-zinc-950  font-bold"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
