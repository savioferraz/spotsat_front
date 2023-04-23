import styled from "styled-components";

export default function Dashboard({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  box-shadow: 2px 2px 16px #abaeb8;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
`;
