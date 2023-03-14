import styled from "styled-components";
import Group8 from "./assets/Group8.png";

export default function Cadastro() {
  return (
    <RegisterPage>
      <img src={Group8} alt="logo" />
      <form>
        <label htmlFor="email" />
        <input type="email" placeholder="email" />
        <label htmlFor="senha" />
        <input type="senha" placeholder="senha" />
        <label htmlFor="nome" />
        <input type="nome" placeholder="nome" />
        <label htmlFor="foto" />
        <input type="foto" placeholder="foto" />
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? Faça login!</p>
    </RegisterPage>
  );
}

const RegisterPage = styled.div`
  width: 380px;
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
  }
`;
