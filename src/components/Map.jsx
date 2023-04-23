import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ shapes }) {
  const defaultPosition = [0, 0];
  const defaultZoom = 2;
  console.log(shapes);

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shapes.map((shape, index) => (
        <GeoJSON key={index} data={shape.geodata.feature} />
      ))}
    </MapContainer>
  );
}
