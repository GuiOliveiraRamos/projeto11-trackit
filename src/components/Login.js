import Group8 from "./assets/Group8.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import dadosContext from "./DataContext";

export default function Login() {
  const { setImage } = useContext(dadosContext);
  const { setToken } = useContext(dadosContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const fazerLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);
    const salvarDados = {
      userEmail: email,
      userPassword: password,
    };
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email, password }
    );
    request.then((response) => {
      setIsDisabled(false);
      navigate("/hoje", { state: { dados: response.data } });
      setImage(response.data.image);
      setToken(response.data.token);
      console.log(response.data.token);
    });
    request.catch((err) => {
      setIsDisabled(false);
      window.location.reload(alert(err.response.data.message));
    });
    console.log(salvarDados);
  };

  return (
    <LoginPage>
      <img src={Group8} alt="logo" />
      <form onSubmit={fazerLogin}>
        <label htmlFor="email" />
        <input
          data-test="email-input"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
        />
        <label htmlFor="senha" />
        <input
          data-test="password-input"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isDisabled}
        />
        <button
          data-test="login-btn"
          type="submit"
          disabled={(isLoading, isDisabled)}
        >
          {isLoading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link data-test="signup-link" to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginPage>
  );
}

const LoginPage = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
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
