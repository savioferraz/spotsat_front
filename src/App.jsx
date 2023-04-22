import PrivatePage from "./context/PrivatePage";
import UserContext from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
  return (
    <UserContext.Provider value={{ BASE_URL }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <PrivatePage>
                <Home />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
