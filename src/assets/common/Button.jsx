import React from "react";
import styled from "styled-components";

export default function Button({ children, width = "50%", height = "32px", onClick }) {
  return (
    <Wraped width={width} height={height} onClick={onClick}>
      {children}
    </Wraped>
  );
}

const Wraped = styled.button`
  background-color: #608ed4;
  color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  border: none;
  border-radius: 5px;
  margin: 6px;
  box-shadow: 4px 4px 8px #888888;
  transition-duration: 0.4s;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
  :active {
    box-shadow: 2px 2px 4px #888888;
    transform: translateY(4px);
  }
`;
