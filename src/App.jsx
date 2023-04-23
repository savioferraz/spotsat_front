import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext";
import UserShapes from "./pages/UserShapes";
import UserMap from "./pages/UserMap";
import NewShape from "./pages/NewShape";
import PrivatePage from "./context/PrivatePage";

export default function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/home" element={<PrivatePage />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/newshape" element={<PrivatePage />}>
              <Route index element={<NewShape />} />
            </Route>
            <Route path="/shapes" element={<PrivatePage />}>
              <Route index element={<UserShapes />} />
            </Route>
            <Route path="/map" element={<PrivatePage />}>
              <Route index element={<UserMap />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
