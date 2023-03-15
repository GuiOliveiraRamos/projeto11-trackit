import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {
  return (
    <Bottom>
      <p>Hábitos</p>
      <Progress
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
      <p>Histórico</p>
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
