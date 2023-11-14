import React from "react";
import ComplaintsPage from "../utils/ComplaintsPage";
import { useAuth } from "../context/userContext";

const Malviya = () => {
  const HostelName = "Malviya";
  const [auth, setAuth] = useAuth();
  if (!auth.user) {
    return (
      <>
        <h1>Please Login first!!</h1>
      </>
    );
  }
  return (
    <>
      <ComplaintsPage HostelName={HostelName} />
    </>
  );
};

export default Malviya;
