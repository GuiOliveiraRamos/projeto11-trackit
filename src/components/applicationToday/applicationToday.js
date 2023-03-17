import styled from "styled-components";
import Header from "../application/Header";
import Footer from "../application/Footer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useState } from "react";
import HabitosList from "../application/HabitosList";
import dayjs from "dayjs";

dayjs.locale("pt-br");
dayjs().locale("pt-br").format("DD [de] MMMM [de] YYYY");

export default function ApplicationToday() {
  const [showList, setShowList] = useState(false);
  const mostrarLista = () => {
    setShowList(!showList);
  };

  return (
    <Body>
      <Header data-test="header" />
      <ContentTitle>
        <h2 data-test="today">{dayjs().format("dddd, DD/MM")}</h2>
        <h3 data-test="today-counter">Nenhum hábito concluido ainda</h3>
      </ContentTitle>
      <HabitosLista data-test="today-habit-container">
        <Title>
          <div>
            <h2 data-test="today-habit-name">Hábito numero 1</h2>
            <h3 data-test="today-habit-sequence">
              Sequência atual: 3 dias
              <br />
              <p data-test="today-habit-record"> Seu recorde: 5 dias</p>
            </h3>
          </div>
          <Icon data-test="today-habit-check-btn" />
        </Title>
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
