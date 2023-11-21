import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

import { useAuth } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/login-accountant`,
        { email, password }
      );

      if (res?.data?.success) {
        setAuth({
          ...auth,
          user: res?.data?.user,
          token: res?.data?.token,
        });
        localStorage.setItem("auth", JSON.stringify(res?.data));
        toast({
          title: `Login success!!`,
          description: "Success",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      const msg = error.response.data.message;
      toast({
        title: `${msg}`,
        description: "Error!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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

        <div className="absolute w-[300px] h-[400px]  sm:w-[400px] sm:h-[430px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-950  text-gray-300 opacity-80">
          <div className="text-center">
            <h1 className="text-3xl mb-2">Accountant Login</h1>
            <span className=" text-[17px]">
              Don't have an account?{" "}
              <NavLink className="font-bold" to="/signup-accountant">
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
              <lable className="text-lg font-mono font-bold">Email</lable>
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
            <div className="flex flex-col py-1 px-2">
              <lable className="text-lg font-mono font-bold">Password</lable>
              <input
                className="w-full p-2 text-white bg-gray-700"
                type="password"
                name="password"
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
              className="border w-full my-5 py-3 hover:bg-zinc-950  font-bold"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
