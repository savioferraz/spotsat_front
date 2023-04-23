import styled from "styled-components";
import Sidebutton from "./Sidebutton";
import { BiShapePolygon, BiMapAlt, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CgAddR } from "react-icons/cg";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Sidebutton onClick={() => navigate("/newshape")}>
        <CgAddR size={"48px"} />
        Adicionar polígonos
      </Sidebutton>
      <Sidebutton onClick={() => navigate("/shapes")}>
        <BiShapePolygon size={"48px"} />
        Meus polígonos
      </Sidebutton>
      <Sidebutton onClick={() => navigate("/map")}>
        <BiMapAlt size={"48px"} />
        Mapa
      </Sidebutton>
      <Sidebutton>
        <BiUser size={"48px"} />
        Minha conta
      </Sidebutton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  width: 256px;
  box-shadow: 6px 0px 8px -8px #5f5e5eb1;
  display: flex;
  flex-direction: column;
`;
