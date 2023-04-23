import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Dashboard>
      <Sidebar />
    </Dashboard>
  );
}

const Wrapper = styled.div``;
