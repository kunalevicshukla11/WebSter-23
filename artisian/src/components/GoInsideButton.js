import React from "react";
import styled from "styled-components";
import { MdDoubleArrow } from "react-icons/md";
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
    width: 97%;
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
    color: linen;
  }

  &:hover:before {
    left: 100%;
    width: 25%;
  }
`;

const Arrow = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const GoInsideButton = ({ children }) => {
  return (
    <StyledButton className="explore">
      {children}
      <Arrow>
        <MdDoubleArrow className="icon-right"></MdDoubleArrow>
      </Arrow>
    </StyledButton>
  );
};

export default GoInsideButton;
