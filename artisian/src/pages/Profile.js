import React from "react";
import { useAuth } from "../context/userContext";

const Profile = () => {
  const [auth, setAuth] = useAuth();

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
    <>
      <h1>Profile {auth?.user?.role} </h1>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>

        {auth?.user?.role === 2 && (
          <>
            <p>Branch: {auth?.user?.branch}</p>
            <p>Registration No: {auth?.user?.registrationNo}</p>
          </>
        )}
        {auth?.user?.role === 1 && (
          <>
            <p>Hostel ID: {auth?.user?.HostelID}</p>
            <p>Hostel Name: {auth?.user?.HostelName}</p>
          </>
        )}
        {auth?.user?.role === 3 && (
          <>
            <p>Hostel ID: {auth?.user?.HostelID}</p>
            <p>Hostel Name: {auth?.user?.HostelName}</p>
          </>
        )}
        {auth?.user?.role === 4 && (
          <>
            <p>Branch: {auth?.user?.branch}</p>
            <p>Registration No: {auth?.user?.registrationNo}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
