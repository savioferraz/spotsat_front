import axios from "axios";
import { createHeaders } from "./createHeaders";

const BASE_URL = import.meta.env.VITE_API_URL;

function createUser(body) {
  const request = axios.post(`${BASE_URL}/users/create`, body);
  return request;
}

function login(body) {
  const request = axios.post(`${BASE_URL}/users/login`, body);
  return request;
}

function postShape(body) {
  const headers = createHeaders();
  const request = axios.post(`${BASE_URL}/shapes/`, body, headers);
  return request;
}

function getUserShapes() {
  const headers = createHeaders();
  const request = axios.get(`${BASE_URL}/shapes/`, headers);
  return request;
}

function getShapeById(id) {
  const headers = createHeaders();
  const request = axios.get(`${BASE_URL}/shapes/${id}`, headers);
  return request;
}

function updateShape(id, body) {
  const headers = createHeaders();
  const request = axios.put(`${BASE_URL}/shapes/${id}`, body, headers);
  return request;
}

function deleteShape(id) {
  const headers = createHeaders();
  const request = axios.delete(`${BASE_URL}/shapes/${id}`, headers);
  return request;
}

export { createUser, login, postShape, getUserShapes, getShapeById, updateShape, deleteShape };
