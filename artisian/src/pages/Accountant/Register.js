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
  const [HostelID, setHostelID] = useState();
  const [HostelName, setHostelName] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:4000/api/v1/auth/register-accountant`,
        { name, email, password, HostelID, HostelName }
      );

      if (res.data.success) {
        toast({
          title: `Registered Successfully`,
          description: "Redirecting..",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login-accountant");
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
          className="h-screen w-screen object-cover "
          src="/images/dark2.png"
          alt="loginbg"
        />

        <div className="absolute w-[300px] h-[450px]  sm:w-[400px] sm:h-[530px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-950  text-white opacity-80">
          <div className="text-center">
            <h1 className="text-3xl">Create Account</h1>
            <span className="  text-[17px]">
              Already have an account?{" "}
              <NavLink className="font-bold" to="/login-accountant">
                Sign In
              </NavLink>
            </span>
          </div>
          <form action="/register" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col py-4 gap-2 px-2">
              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="number"
                name="studentid"
                id="studentid"
                placeholder="Hostel ID"
                value={HostelID}
                onChange={(e) => setHostelID(e.target.value)}
                required
              />

              <input
                className="p-2 text-lg font-mono font-bold bg-pink-950"
                type="text"
                name="Hostel"
                id="Hostel"
                placeholder="Hostel Name"
                value={HostelName}
                onChange={(e) => setHostelName(e.target.value)}
                required
              />

              <input
                className="p-1.5 text-lg font-mono font-bold bg-pink-950"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full p-2 text-lg font-mono font-bold h-[35px] bg-pink-950 "
                type="password"
                name="password"
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
              className="border-2 w-full my-5 py-4 hover:bg-zinc-950  font-bold"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
