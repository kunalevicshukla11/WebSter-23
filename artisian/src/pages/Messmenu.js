import React from "react";
import MessMenuCardWrapper from "../StyledComponents/MessMenuCardWrapper.js";
import WrapperCompPage from "../StyledComponents/WrapperCompPage.js";
import { useAuth } from "../context/userContext.js";
import { useNavigate } from "react-router-dom";

const Messmenu = () => {
  const arr = [
    { HostelName: "Tandon" },
    { HostelName: "Malviya" },
    { HostelName: "Patel" },
    { HostelName: "Tilak" },
  ];
  const [auth, setAuth] = useAuth();

  if (!auth?.user) {
    return <h3>Please Login to view Mess - Menu</h3>;
  }

  return (
    <>
      <WrapperCompPage>
        {arr.map((val) => {
          return <SingleHostelMess HostelName={val.HostelName} />;
        })}
      </WrapperCompPage>
    </>
  );
};

const SingleHostelMess = ({ HostelName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/mess-menu/${HostelName}`);
  };
  return (
    <>
      <MessMenuCardWrapper style={{ marginBottom: "2rem" }}>
        <header>
          <div className="main-icon">{HostelName.charAt(0)}</div>
          <div className="info">
            <h5>Hostel: {HostelName}</h5>
          </div>
        </header>
        <div className="content">
          <div className="content-center info">
            <p>WardenName: {`${HostelName} Warden`}</p>
            <p>Contact: xyz@gmail.com</p>
          </div>
          <footer>
            <>
              <div className="actions">
                <button
                  type="button"
                  className="btn edit-btn"
                  onClick={handleClick}
                >
                  See Mess Menu
                </button>
              </div>
            </>
          </footer>
        </div>
      </MessMenuCardWrapper>
    </>
  );
};

export default Messmenu;
