import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import ShapeBox from "../components/ShapeBox";
import { useState } from "react";
import { useEffect } from "react";
import { deleteShape, getUserShapes } from "../services/services";

export default function UserShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    getUserShapes()
      .then((ans) => setShapes(ans.data))
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, [shapes]);

  function handleDelete(shapeId) {
    deleteShape(shapeId)
      .then(() => {
        alert("Polígono deletado!");
        getUserShapes()
          .then((ans) => setShapes(ans.data))
          .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Dashboard>
      <Wrapper>
        {shapes.length === 0 ? (
          <p>Você ainda não tem nenhum polígono</p>
        ) : (
          shapes.map((shape) => (
            <ShapeBox
              key={shape.id}
              shapeName={shape.name}
              coordinates={shape.geodata.features[0].geometry.coordinates}
              onDelete={() => handleDelete(shape.id)}
            />
          ))
        )}
      </Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  width: 980px;
  max-height: 680px;
  margin: auto;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
