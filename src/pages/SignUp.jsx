import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../assets/common/Button";
import Input from "../assets/common/Input";
import { createUser } from "../services/services";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = { name, email, password };

  function handleForm(e) {
    e.preventDefault();
    createUser(body)
      .then((ans) => {
        const { token } = ans.data;
        const authJSON = JSON.stringify(token);
        localStorage.setItem("spotsat", authJSON);
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
            placeholder={"Nome"}
            type={"text"}
            name={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit">Cadastrar</Button>
        </form>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </Wrapper>
    </Dashboard>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff0000;
  height: 600px;
  width: 450px;

  a {
    margin: 8px;
  }
`;
