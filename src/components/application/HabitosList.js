import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export default function HabitosList() {
  return (
    <HabitosLista data-test="habit-container">
      <Title>
        <p data-test="habit-name">Hábito numero 1</p>
        <BsTrash data-test="habit-delete-btn" />
      </Title>
      <HabitosButton>
        <button data-test="habit-day">D</button>
        <button data-test="habit-day">S</button>
        <button data-test="habit-day">T</button>
        <button data-test="habit-day">Q</button>
        <button data-test="habit-day">Q</button>
        <button data-test="habit-day">S</button>
        <button data-test="habit-day">S</button>
      </HabitosButton>
    </HabitosLista>
  );
}

const Title = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
`;

const HabitosLista = styled.form`
  width: 355px;
  padding: 18px 0 0 15px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
`;

const HabitosButton = styled.div`
  width: 320px;
  padding-top: 8px;
  padding-bottom: 29px;
  button {
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background-color: #ffffff;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    margin-right: 4px;
  }
`;
