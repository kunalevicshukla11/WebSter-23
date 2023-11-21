import React from "react";
import WrapperComp from "../StyledComponents/WrapperComp.js";
import { Link } from "react-router-dom";
import { useAuth } from "../context/userContext.js";
import { useToast } from "@chakra-ui/react";

const Comp = (props) => {
  const data = props.compData;
  const [auth, setAuth] = useAuth();
  const toast = useToast();

  const handleClick = () => {
    toast({
      title: `First see the complaint`,
      description: "Invalid request",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <WrapperComp>
      <header>
        <div className="main-icon">{data.student.name.charAt(0)}</div>
        <div className="info">
          <p>Created By: {data.student.name}</p>
          <h5>Hostel: {data.name}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <p>About: {data.heading}</p>
        </div>
        <footer>
          <div className="actions">
            <Link to={`/sigle-complaint/${data._id}`} className="btn edit-btn">
              See Complaint
            </Link>
            {auth.user.role === 1 ? (
              <>
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={handleClick}
                >
                  Resolve
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </footer>
      </div>
    </WrapperComp>
  );
};

export default Comp;
