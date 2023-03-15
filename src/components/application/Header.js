import TrackIt from "../assets/TrackIt.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Top>
      <h1>TrackIt</h1>
      <img src={TrackIt} alt={TrackIt} />
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