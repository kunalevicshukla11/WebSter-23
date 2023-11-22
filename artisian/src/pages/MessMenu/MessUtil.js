import React from "react";
import SingleDayMessUtils from "./SingleDayMessUtils";
import { useAuth } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const MessUtil = ({ HostelName, Data }) => {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const toast = useToast();
  if (!auth?.user) {
    return <h1>Please Login to access this page</h1>;
  }
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleClick = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    navigate("/");
    toast({
      title: `Logged Out!!`,
      description: "Success",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const data = Data?.Menu;
  return (
    <div>
      <div style={{ backgroundColor: "#023942", height: "55px" }}>
        {auth?.user?.role === 1 ? (
          <button
            className="btn edit-btn"
            style={{
              marginLeft: "17px",
              marginBottom: "10px",
              marginTop: "10px",
              marginRight: "17px",
            }}
          >
            Edit Mess Menu
          </button>
        ) : (
          <></>
        )}
        <button
          className="btn delete-btn"
          style={{
            backgroundColor: "#f7b0cc",
            marginTop: "10px",
            marginLeft: "17px",
          }}
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
      <div>
        {arr.map((val) => {
          return <SingleDayMessUtils Day={val} Data={data} />;
        })}
      </div>
    </div>
  );
};

export default MessUtil;
