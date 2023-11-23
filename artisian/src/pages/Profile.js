import React from "react";
import { useAuth } from "../context/userContext";

const Profile = () => {
  const [auth] = useAuth(); // I removed setAuth as it seems you are not using it

  const name = auth?.user?.name;
  const email = auth?.user?.email;

  if (!auth?.user) {
    return (
      <>
        <h1>You Do not have access to this page. Please Login!</h1>
      </>
    );
  }

  return (
    <div className="flex items-center   justify-center h-screen">
      <img
        className=" object-cover h-screen w-screen "
        src="/images/pbg.jpg"
        alt="profile bg. img"
      />
      <div className="absolute p-4  rounded-md border-2 border-black bg-teal-700 bg-opacity-60 text-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <h1 className=" text-2xl sm:text-4xl text-gray-300 font-serif font-bold mb-2 bg-gray-950 bg-opacity-50 border-[3px] border-black rounded-xl p-2">
            {auth?.user?.role === 2
              ? "Student"
              : auth?.user?.role === 3
              ? "Accountant"
              : auth?.user?.role === 1
              ? "Admin"
              : auth?.user?.role === 4
              ? "Student Representative"
              : ""}{" "}
            Profile
          </h1>
          <img
            className="h-[180px] sm:h-52 w-36 sm:w-40 rounded-[10px]  "
            src="/images/pexels-mohamed-abdelghaffar-771742.jpg"
            alt="profile picture"
          ></img>
        </div>
        <div className=" text-xl sm:text-3xl mt-4 font-bold">
          <p className="w-fit  font-serif bg-teal-500 border-2 border-black text-black bg-opacity-60 rounded-2xl px-4">
            Name: {name}
          </p>
          <p className="w-fit  font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
            Email: {email}
          </p>

          {auth?.user?.role === 2 && (
            <>
              <p className="w-fit text-xl sm:text-3xl  font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Branch: {auth?.user?.branch}
              </p>
              <p className="w-fit text-xl sm:text-3xl font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Registration No: {auth?.user?.registrationNo}
              </p>
            </>
          )}
          {auth?.user?.role === 1 && (
            <>
              <p className="w-fit text-xl sm:text-3xl font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Hostel ID: {auth?.user?.HostelID}
              </p>
              <p className="w-fit text-xl sm:text-3xl font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Hostel Name: {auth?.user?.HostelName}
              </p>
            </>
          )}
          {auth?.user?.role === 3 && (
            <>
              <p className="w-fit text-xl sm:text-3xl font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Hostel ID: {auth?.user?.HostelID}
              </p>
              <p className="w-fit text-xl sm:text-3xl font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Hostel Name: {auth?.user?.HostelName}
              </p>
            </>
          )}
          {auth?.user?.role === 4 && (
            <>
              <p className="w-fit text-xl sm:text-3xl  font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Branch: {auth?.user?.branch}
              </p>
              <p className="w-fit text-xl sm:text-3xl  font-serif bg-teal-500 border-2  border-black text-black bg-opacity-60 rounded-2xl px-4">
                Registration No: {auth?.user?.registrationNo}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
