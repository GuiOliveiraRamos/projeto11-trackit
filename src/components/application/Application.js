import styled from "styled-components";
import TrackIt from "../assets/TrackIt.png";
import { AiFillPlusSquare } from "react-icons/ai";

export default function Aplication() {
  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={TrackIt} alt={TrackIt} />
      </Header>
      <ContentTitle>
        <p>Meus hábitos</p>
        <Icon />
      </ContentTitle>
      <Content>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Content>
      <Footer>
        <p>Hábitos</p>
        <p>Histórico</p>
      </Footer>
    </>
  );
}

const Header = styled.header`
  width: 375px;
  height: 70px;
  padding: 9px 18px 9px 18px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background: url(image.png);
  }
`;

const ContentTitle = styled.div`
  width: 375px;
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
  width: 375px;
  padding: 0 18px 107px 18px;
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
`;

const Footer = styled.footer`
  width: 375px;
  height: 70px;
  padding: 9px 18px 0 18px;
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
