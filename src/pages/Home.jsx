import styled from "styled-components";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <Dashboard>
      <Wrapper></Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
