import React from "react";
import { useAuth } from "../context/userContext";
import ExpensePage from "../utils/ExpensePage";

const MalviyaExpense = () => {
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
      <ExpensePage HostelName={HostelName} />
    </>
  );
};

export default MalviyaExpense;