import React from "react";
import SingelDayMessWrapper from "../../StyledComponents/SingleDayMessWrapper";
import MessUtilsWrapper from "../../StyledComponents/MessUtilsWrapper";

const SingleDayMessUtils = ({ Day, Data }) => {
  let data = "none";

  if (Day === "Sunday") {
    data = Data?.Sunday;
  } else if (Day === "Monday") {
    data = Data?.Monday;
  } else if (Day === "Tuesday") {
    data = Data?.Tuesday;
  } else if (Day === "Wednesday") {
    data = Data?.Wednesday;
  } else if (Day === "Thursday") {
    data = Data?.Thursday;
  } else if (Day === "Friday") {
    data = Data?.Friday;
  } else if (Day === "Saturday") {
    data = Data?.Saturday;
  }
  console.log(data);

  return (
    <div
      style={{
        backgroundColor: "#d7ebf5",
      }}
    >
      <span
        style={{
          marginLeft: "17px",
          marginRight: "15px",
          marginTop: "10px",
          fontSize: "2rem",
        }}
      >
        {Day}
      </span>

      <MessUtilsWrapper>
        <div className="jobs">
          <SingelDayMessWrapper>
            <header>
              <div className="main-icon">{Day.charAt(0)}</div>
              <div className="info">
                <h5>Day: {Day}</h5>
                <p>Breakfast</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <p>Item1: {data?.Breakfast?.item1}</p>
                <p>Item2: {data?.Breakfast?.item2}</p>
                <p>Item3: {data?.Breakfast?.item3}</p>
              </div>
              <footer>
                <div className="actions"></div>
              </footer>
            </div>
          </SingelDayMessWrapper>
          <SingelDayMessWrapper>
            <header>
              <div className="main-icon">{Day.charAt(0)}</div>
              <div className="info">
                <h5>Day: {Day}</h5>
                <p>Lunch</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <p>Item1: {data?.Lunch?.item1}</p>
                <p>Item2: {data?.Lunch?.item2}</p>
                <p>Item3: {data?.Lunch?.item3}</p>
                <p>Item4: {data?.Lunch?.item4}</p>
              </div>
              <footer>
                <div className="actions"></div>
              </footer>
            </div>
          </SingelDayMessWrapper>
          <SingelDayMessWrapper>
            <header>
              <div className="main-icon">{Day.charAt(0)}</div>
              <div className="info">
                <h5>Day: {Day}</h5>
                <p>Snacks</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <p>Item1: {data?.Snacks?.item1}</p>
                <p>Item2: {data?.Snacks?.item2}</p>
                <p>Item3: {data?.Snacks?.item3}</p>
              </div>
              <footer>
                <div className="actions"></div>
              </footer>
            </div>
          </SingelDayMessWrapper>
          <SingelDayMessWrapper>
            <header>
              <div className="main-icon">{Day.charAt(0)}</div>
              <div className="info">
                <h5>Day: {Day}</h5>
                <p>Dinner</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <p>Item1: {data?.Dinner?.item1}</p>
                <p>Item2: {data?.Dinner?.item2}</p>
                <p>Item3: {data?.Dinner?.item3}</p>
                <p>Item4: {data?.Dinner?.item4}</p>
              </div>
              <footer>
                <div className="actions"></div>
              </footer>
            </div>
          </SingelDayMessWrapper>
        </div>
      </MessUtilsWrapper>
    </div>
  );
};

export default SingleDayMessUtils;
