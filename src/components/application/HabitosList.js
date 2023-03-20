import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import dadosContext from "../DataContext";

export default function HabitosList() {
  const [habitos, setHabitos] = useState([]);
  const { token } = useContext(dadosContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((response) => {
        setHabitos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  function deletarHabito(habitId) {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este hábito?"
    );

    if (confirmacao) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
          config
        )
        .then(() => {
          setHabitos(habitos.filter((habito) => habito.id !== habitId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      {habitos.map((habito) => (
        <HabitosLista key={habito.id} data-test="habit-container">
          <Title>
            <p data-test="habit-name">{habito.name}</p>
            <BsTrash
              data-test="habit-delete-btn"
              onClick={() => deletarHabito(habito.id)}
            />
          </Title>
          <HabitosButton>
            {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, index) => (
              <button key={index} data-test="habit-day">
                {dia}
              </button>
            ))}
          </HabitosButton>
        </HabitosLista>
      ))}
    </>
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
  margin-bottom: 10px;
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
