import React from "react";
import { useAuth } from "../context/userContext";

const AddAndUpdateMessMenu = () => {
  const [auth, setAuth] = useAuth();

  if (auth?.user?.role !== 1) {
    return <h1>You do not have permission to update or add a new mess menu</h1>;
  }
  return <div>AddAndUpdateMessMenu</div>;
};

export default AddAndUpdateMessMenu;
