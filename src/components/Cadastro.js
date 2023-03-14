import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Group8 from "./assets/Group8.png";
import axios from "axios";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const fazerCadastro = (e) => {
    e.preventDefault();
    const salvarDados = {
      userEmail: email,
      userName: name,
      userPassword: password,
      userImage: image,
    };
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      { email, name, image, password }
    );
    request.then(() => navigate("/", { state: { dados: salvarDados } }));
  };

  return (
    <RegisterPage>
      <img src={Group8} alt="logo" />
      <form onSubmit={fazerCadastro}>
        <label htmlFor="email" />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="senha" />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="nome" />
        <input
          type="name"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="foto" />
        <input
          type="foto"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </RegisterPage>
  );
}

const RegisterPage = styled.div`
  width: 375px;
  padding-top: 106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 180px;
    max-height: 180px;
    width: auto;
    height: auto;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 10px;
    width: 303px;
    height: 25px;
    margin-bottom: 6px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      color: #dbdbdb;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
    }
  }

  button {
    border: none;
    width: 325px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: white;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 19px;
  }
`;
