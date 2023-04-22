import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function Home() {
  const position = [51.505, -0.09];

  return (
    <Wrapper>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #ff0000;
  height: 256px;
  width: 256px;
`;
