import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Map from "../components/Map";
import { getUserShapes } from "../services/services";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

export default function UserMap() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    getUserShapes()
      .then((ans) => setShapes(ans.data))
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  return (
    <Dashboard>
      <Sidebar />
      <Wrapper>
        <Map shapes={shapes} />
      </Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 980px;
  height: 680px;
  margin: auto;
`;
