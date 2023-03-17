import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../DataContext";

export default function Header() {
  const { image } = useContext(UsuarioContext);

  return (
    <Top data-test="header">
      <Link to="/">
        <h1>TrackIt</h1>
      </Link>
      <img src={image} alt={image} />
    </Top>
  );
}

const Top = styled.header`
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
