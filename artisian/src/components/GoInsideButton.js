import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  background: none;
  color: black;

  padding-right: 40px;
  outline: none;
  border: none;
  height: 50px;
  width: 190px;
  font-size: 28px;
  font-weight: lighter;
  z-index: 4;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 77%;
    background: linear-gradient(
      to right,
      #ff9900,
      #ff6600
    ); /* Adjust gradient colors */
    border-top-left-radius: 15px; /* Adjust the border radius as needed */
    border-bottom-left-radius: 15px;
    z-index: -1;
    transition: 0.3s ease-in all;
  }

  &:hover {
    color: whitesmoke;
  }

  &:hover:before {
    left: 100%;
    width: 25%;
  }
`;

const IconRight = styled.span`
  position: absolute;
  top: 26px;
  right: 10px;

  &:after {
    font-family: "FontAwesome";
    content: "\u2192";
    font-size: 34px;
    display: inline-block;

    transform: translate3D(0, -50%, 0);
  }
`;

const GoInsideButton = ({ children }) => {
  return (
    <StyledButton className="explore">
      {children}
      <IconRight className="icon-right"></IconRight>
    </StyledButton>
  );
};

export default GoInsideButton;
