import styled from "styled-components";
import TrackIt from "../assets/TrackIt.png";
import { AiFillPlusSquare } from "react-icons/ai";

export default function Aplication() {

  return (
    <Body>
      <Header>
        <h1>TrackIt</h1>
        <img  src={TrackIt} alt={TrackIt} />
      </Header>
      <ContentTitle>
        <p>Meus hábitos</p>
        <Icon />
      </ContentTitle>
      <HabitosForm>
        <form>
          <label htmlFor="text"></label>
          <input type="text" placeholder="nome do hábito"></input>
        </form>
        <HabitosButton>
          <button>D</button>
          <button>S</button>
          <button>T</button>
          <button>Q</button>
          <button>Q</button>
          <button>S</button>
          <button>S</button>
        </HabitosButton>
        <EnviarHabitos>
          <button>Cancelar</button>
          <button>Salvar</button>
        </EnviarHabitos>
      </HabitosForm>
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
    </Body>
  );
}

const Body = styled.body`
width: 411px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #e5e5e5;
`

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

const HabitosForm = styled.form`
  width: 355px;
  padding: 18px 0 15px 0;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
