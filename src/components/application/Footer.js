import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { mostrarLista } = props;

  return (
    <Bottom data-test="menu">
      <Link data-test="habit-link" onClick={mostrarLista} to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <Progress
          data-test="today-link"
          value={66}
          text={`Hoje`}
          background
          backgroundPadding={3}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Link>
      <Link data-test="history-link" to="/historico">
        <p>Histórico</p>
      </Link>
    </Bottom>
  );
}

const Bottom = styled.footer`
  width: 375px;
  height: 70px;
  padding: 0 18px 0 18px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  p {
    cursor: pointer;
    text-decoration: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;

const Progress = styled(CircularProgressbar)`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 10px;
  left: 150px;
`;
