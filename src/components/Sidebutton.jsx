import styled from "styled-components";

export default function Sidebutton({ children, onClick }) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  width: 200px;
  height: 200px;
  box-shadow: 0px 5px 5px -5px #000, 0px -5px 5px -5px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  cursor: pointer;
  margin: auto;
  background-color: #fff;
  border: none;

  :hover {
    opacity: 1;
  }
  :active {
    transform: translateY(2px) translateX(2px);
  }
`;
