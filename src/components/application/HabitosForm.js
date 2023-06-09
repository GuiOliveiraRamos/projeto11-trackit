import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import dadosContext from "../DataContext";

export default function HabitosForm() {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [esconderForm, setEsconderForm] = useState(true);

  const { token } = useContext(dadosContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function criarHabito(event) {
    event.preventDefault();
    setIsDisabled(true);
    const dadosDoHabito = {
      name,
      days: days
        .map((dia) => diasDaSemana.indexOf(dia))
        .filter((index) => index !== -1),
    };

    console.log(dadosDoHabito);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        dadosDoHabito,
        config
      )
      .then((response) => {
        console.log(response.data);
        setIsDisabled(true);
        setEsconderForm(false);
      })
      .catch((error) => {
        alert(error.response.data);
        setIsDisabled(true);
        setEsconderForm(false);
      });
  }



  if (!esconderForm) {
    return null;
  }

  return (
    <HabitosForms data-test="habit-create-container">
      <form onSubmit={criarHabito}>
        <label htmlFor="text"></label>
        <input
          data-test="habit-name-input"
          type="text"
          placeholder="nome do hábito"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isDisabled}
        ></input>
        <HabitosButton>
          {diasDaSemana.map((dia, index) => (
            <BotaoDia dia={dia} index={index} days={days} setDays={setDays} />
          ))}
        </HabitosButton>
        <EnviarHabitos>
          <button
            data-test="habit-create-cancel-btn"
            type="button"
            disabled={isDisabled}
            onClick={() =>setEsconderForm(false)}
          >
            Cancelar
          </button>
          <button
            type="submit"
            data-test="habit-create-save-btn"
            disabled={isDisabled}
            
          >
            Salvar
          </button>
        </EnviarHabitos>
      </form>
    </HabitosForms>
  );
}

function BotaoDia({ dia, days, index, isDisabled, setDays }) {
  const [isSelected, setIsSelected] = useState(false);

  function selecionarDia(day) {
    isSelected ? setIsSelected(false) : setIsSelected(true);
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  }

  return (
    <BotaoDias
      key={index}
      data-test="habit-day"
      type="button"
      onClick={() => selecionarDia(dia)}
      isSelected={isSelected}
      disabled={isDisabled}
    >
      {dia}
    </BotaoDias>
  );
}

const BotaoDias = styled.button`
  background-color: ${(props) => (props.isSelected ? "#CFCFCF" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#DBDBDB")};
`;

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
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
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
