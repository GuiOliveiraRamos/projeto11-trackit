import styled from "styled-components";
import Header from "../application/Header";
import Footer from "../application/Footer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import HabitosList from "../application/HabitosList";
import dayjs from "dayjs";
import axios from "axios";

dayjs.locale("pt-br");
dayjs().locale("pt-br").format("DD [de] MMMM [de] YYYY");

export default function ApplicationToday() {
  const [showList, setShowList] = useState(false);
  const [habitos, setHabitos] = useState([]);
  const mostrarLista = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIxNywiaWF0IjoxNjc5MjQzNjYyfQ.Y5Ut3PbiwzmNnrl73njuwBKBdDN_XViykXtGGnBs0gA";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
    const request = axios.get(url, config);

    request
      .then((resposta) => {
        console.log(resposta.data);
        setHabitos(resposta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Body>
      <Header data-test="header" />
      <ContentTitle>
        <h2 data-test="today">{dayjs().format("dddd, DD/MM")}</h2>
        <h3 data-test="today-counter">Nenhum hábito concluido ainda</h3>
      </ContentTitle>
      <HabitosLista data-test="today-habit-container">
        {habitos.map((habito) => (
          <Title key={habito.id}>
            <div>
              <h2 data-test="today-habit-name">{habito.name}</h2>
              <h3 data-test="today-habit-sequence">
                Sequência atual: {habito.days ? habito.days.length : 0}
                <br />
                <p data-test="today-habit-record">
                  {" "}
                  Seu recorde: {habito.days ? Math.max(...habito.days) : 0}
                </p>
              </h3>
            </div>
            <Icon data-test="today-habit-check-btn" />
          </Title>
        ))}
      </HabitosLista>
      {showList && <HabitosList />}
      <Footer data-test="menu" mostrarLista={mostrarLista} />
    </Body>
  );
}

const Body = styled.div`
  width: 411px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
`;

const ContentTitle = styled.div`
  width: 360px;
  padding: 107px 18px 28px 18px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
`;

const Title = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;

  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 7px;
    color: #666666;
  }

  h3,
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    margin-bottom: 17px;
    color: #666666;
  }
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

const Icon = styled(BsFillCheckSquareFill)`
  width: 69px;
  height: 69px;
  color: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;
