import React from "react";
import styled from "styled-components";

export default function Input({ placeholder, width = "80%", height = "30px", type, name, value, onChange }) {
  return (
    <Wrapper
      placeholder={placeholder}
      width={width}
      height={height}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  background: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px auto;
  padding: 8px;
  font-size: 20px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;
