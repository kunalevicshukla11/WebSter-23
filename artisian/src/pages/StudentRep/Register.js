import React from "react";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNo, setRegistrationNo] = useState();
  const [branch, setBranch] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/register-studentrep`,
        { name, email, password, registrationNo, branch }
      );

      if (res?.data?.success) {
        toast({
          title: `Registered Successfully`,
          description: "Redirecting..",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login-studentrep");
      }
    } catch (error) {
      const msg = error.response.data.message;
      toast({
        title: `${msg}`,
        description: "Error",
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

        <div className="absolute w-[300px] h-[450px]  sm:w-[400px] sm:h-[480px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-950  text-gray-300 opacity-80">
          <div className="text-center">
            <h1 className="text-3xl font-mono font-bold pb-3">
              Create Account
            </h1>
            <span className="  text-[17px]">
              Already have an account?{" "}
              <NavLink className="font-bold" to="/login-studentrep">
                Sign In
              </NavLink>
            </span>
          </div>
          <form action="/register" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col p-2 px-2">
              <input
                className="p-2  text-lg font-mono font-bold bg-pink-950"
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col pb-2 px-2">
              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="number"
                name="studentid"
                id="studentid"
                placeholder="Registration No"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col px-2">
              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="text"
                name="branch"
                id="branch"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col px-2 pt-2">
              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col py-2 px-2">
              <input
                className="w-full h-[35px] p-2  text-lg font-mono font-bold bg-pink-950"
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

            <button
              className="border w-full my-5 py-4 hover:bg-zinc-950 font-bold"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
