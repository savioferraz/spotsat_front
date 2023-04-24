import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import { postShape } from "../services/services";
import Input from "../assets/common/Input";
import Button from "../assets/common/Button";

export default function NewShape() {
  const [coordinates, setCoordinates] = useState([]);
  const [numPoints, setNumPoints] = useState(1);
  const [name, setName] = useState("");

  async function handleForm(e) {
    e.preventDefault();

    const geodata = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: coordinates,
          },
        },
      ],
    };
    console.log(geodata);

    const body = { name, geodata };

    postShape(body)
      .then(() => alert("Polígono enviado com sucesso!"))
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  function handleCoordinatesChange(index, coordType, value) {
    const newCoordinates = [...coordinates];

    if (!newCoordinates[index]) {
      newCoordinates[index] = [0, 0];
    }

    newCoordinates[index][coordType === "lat" ? 0 : 1] = parseFloat(value);
    setCoordinates(newCoordinates);
  }

  return (
    <Dashboard>
      <Wrapper>
        <h1>Novo Polígono</h1>
        <form onSubmit={handleForm}>
          <Container>
            <p>Nome do polígono</p>
            <Input
              width="150px"
              height="20px"
              type="text"
              placeholder={"Nome"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Container>
          <Container>
            <p>Número de pontos:</p>
            <Input
              width="150px"
              height="20px"
              type="number"
              min="1"
              value={numPoints}
              onChange={(e) => setNumPoints(parseInt(e.target.value))}
            />
          </Container>
          {[...Array(numPoints)].map((_, index) => (
            <div key={index}>
              <Container>
                <p>Ponto {index + 1}:</p>
                <Input
                  width="150px"
                  height="20px"
                  type="number"
                  placeholder={`latitude ${index + 1}`}
                  onChange={(e) => handleCoordinatesChange(index, "lat", e.target.value)}
                  required
                />
                <Input
                  width="150px"
                  height="20px"
                  type="number"
                  placeholder={`longitude ${index + 1}`}
                  onChange={(e) => handleCoordinatesChange(index, "lng", e.target.value)}
                  required
                />
              </Container>
            </div>
          ))}
          <Button type="submit">Enviar Polígono</Button>
        </form>
      </Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 980px;
  height: 680px;
  margin: auto;
  font-family: "Roboto", sans-serif;

  form {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
