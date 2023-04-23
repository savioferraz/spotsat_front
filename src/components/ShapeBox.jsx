import { BiEdit, BiTrash } from "react-icons/bi";
import styled from "styled-components";

export default function ShapeBox({ coordinates, shapeName, onDelete, onEdit }) {
  return (
    <Wrapper>
      <Content>
        <h1>{shapeName}</h1>
        <p>Coordenadas</p>
        <ul>
          {coordinates.map((coord, index) => (
            <li key={index}>{`[${coord[0]}, ${coord[1]}]`}</li>
          ))}
        </ul>
      </Content>
      <ButtonsBox>
        <BiEdit size={"40px"} onClick={onEdit} />
        <BiTrash size={"40px"} onClick={onDelete} />
      </ButtonsBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 850px;
  height: 200px;
  border: 1px solid grey;
  box-shadow: 4px 4px 8px #888888;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
  background-color: #f7f7f7;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonsBox = styled.div`
  cursor: pointer;
`;
