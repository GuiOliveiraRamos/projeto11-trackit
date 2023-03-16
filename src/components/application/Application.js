import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";
import HabitosForm from "./HabitosForm";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import HabitosList from "./HabitosList";

export default function Application() {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const mostrarLista = () => {
    setShowList(!showList);
  };

  return (
    <Body>
      <Header data-test="header" />
      <ContentTitle>
        <p>Meus hábitos</p>
        <Icon
          data-test="habit-create-btn"
          onClick={() => setShowForm(!showForm)}
        />
      </ContentTitle>
      {showForm && <HabitosForm />}
      {showList && <HabitosList />}
      <Content>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Content>
      <Footer data-test="menu" mostrarLista={mostrarLista} />
    </Body>
  );
}

const Body = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  overflow: auto;
`;

const ContentTitle = styled.div`
  width: 360px;
  padding: 107px 18px 28px 18px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const Content = styled.div`
  width: 360px;
  padding: 29px 18px 107px 18px;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const Icon = styled(AiFillPlusSquare)`
  width: 40px;
  height: 35px;
  color: #52b6ff;
  border-radius: 4.63636px;
  cursor: pointer;
`;
