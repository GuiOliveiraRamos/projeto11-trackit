import styled from "styled-components";
import { AiFillPlusSquare } from "react-icons/ai";
import Header from "../application/Header";
import Footer from "../application/Footer";
import HabitosList from "../application/HabitosList"

export default function ApplicationToday() {

  return (
    <Body>
      <Header />
      <ContentTitle>
        <p>Meus hábitos</p>
        <Icon />          
      </ContentTitle>
      <HabitosList />
      <Footer />
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

const Icon = styled(AiFillPlusSquare)`
  width: 40px;
  height: 35px;
  color: #52b6ff;
  border-radius: 4.63636px;
`;
