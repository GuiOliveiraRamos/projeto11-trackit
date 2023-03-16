import styled from "styled-components";

export default function HabitosForm() {
  return (
    <HabitosForms data-test="habit-create-container">
      <form>
        <label htmlFor="text"></label>
        <input
          data-test="habit-name-input"
          type="text"
          placeholder="nome do hábito"
        ></input>
      </form>
      <HabitosButton>
        <button data-test="habit-day">D</button>
        <button data-test="habit-day">S</button>
        <button data-test="habit-day">T</button>
        <button data-test="habit-day">Q</button>
        <button data-test="habit-day">Q</button>
        <button data-test="habit-day">S</button>
        <button data-test="habit-day">S</button>
      </HabitosButton>
      <EnviarHabitos>
        <button data-test="habit-create-cancel-btn">Cancelar</button>
        <button data-test="habit-create-save-btn">Salvar</button>
      </EnviarHabitos>
    </HabitosForms>
  );
}

const HabitosForms = styled.div`
  width: 355px;
  padding: 18px 0 15px 0;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  input {
    width: 303px;
    height: 45px;
    padding-left: 11px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      text-decoration: none;
      color: #dbdbdb;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
    }
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

const EnviarHabitos = styled.div`
  width: 310px;
  display: flex;
  justify-content: flex-end;

  button:nth-child(1) {
    border: none;
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    background: #ffffff;
    border-radius: 4.63636px;
  }
  button:nth-child(2) {
    border: none;
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    background: #52b6ff;
    border-radius: 4.63636px;
  }
`;
