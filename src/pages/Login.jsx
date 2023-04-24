import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../assets/common/Button";
import Input from "../assets/common/Input";
import { login } from "../services/services";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = { email, password };

  function handleForm(e) {
    e.preventDefault();
    login(body)
      .then((ans) => {
        const { userId, token } = ans.data.session;
        console.log(userId, token);
        const userIdstring = JSON.stringify(userId);
        const authJSON = JSON.stringify(token);
        localStorage.setItem("token", authJSON);
        localStorage.setItem("userid", userIdstring);
        navigate("/home");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Dashboard>
      <Wrapper>
        <h1>SpotSat</h1>
        <form onSubmit={handleForm}>
          <Input
            placeholder={"E-mail"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"Senha"}
            type={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/sign-up">Não tem uma conta? Clique aqui para se cadastrar</Link>
      </Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 450px;
  font-family: "Roboto", sans-serif;

  a {
    margin: 8px;
  }

  form {
    text-align: center;
  }
`;

const Dashboard = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  box-shadow: 2px 2px 16px #abaeb8;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
