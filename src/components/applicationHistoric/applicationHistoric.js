import styled from "styled-components";
import Header from "../application/Header";
import Footer from "../application/Footer";
import { useState } from "react";
import HabitosList from "../application/HabitosList";

export default function ApplicationHistoric() {
  const [showList, setShowList] = useState(false);

  const mostrarLista = () => {
    setShowList(!showList);
  };

  return (
    <Body>
      <Header data-test="header" />
      <ContentTitle>
        <h2>Histórico</h2>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </ContentTitle>
      {showList && <HabitosList />}
      <Footer data-test="menu" mostrarLista={mostrarLista} />
    </Body>
  );
}

const Body = styled.body`
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
    margin-bottom: 17px;
    color: #126ba5;
  }

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
