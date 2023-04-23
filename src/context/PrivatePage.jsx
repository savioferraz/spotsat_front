import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivatePage() {
  const auth = !!JSON.parse(localStorage.getItem("token"));

  return auth ? <Outlet /> : <Navigate to="/" />;
}
