import styled from "styled-components";
import Header from "../application/Header";
import Footer from "../application/Footer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import HabitosList from "../application/HabitosList";
import dayjs from "dayjs";
import axios from "axios";
import dadosContext from "../DataContext";

dayjs.locale("pt-br");
dayjs().locale("pt-br").format("DD [de] MMMM [de] YYYY");

export default function ApplicationToday() {
  const [showList, setShowList] = useState(false);
  const [habitos, setHabitos] = useState([]);
  const [habitosConcluidos, setHabitosConcluidos] = useState(0);
  const percentHabitosConcluidos = (habitosConcluidos / habitos.length) * 100;
  const { token } = useContext(dadosContext);
  const mostrarLista = () => {
    setShowList(!showList);
  };

  useEffect(() => {
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
  }, [token]);

  const marcarConcluido = (habito) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`;

    axios
      .post(url, {}, config)
      .then(() => {
        const updatedHabitos = habitos.map((h) => {
          if (h.id === habito.id) {
            const updatedDays = Array.isArray(habito.days)
              ? [...habito.days, dayjs().format("YYYY-MM-DD")]
              : [dayjs().format("YYYY-MM-DD")];
            const currentSequence = h.currentSequence || 0;
            return {
              ...habito,
              done: true,
              currentSequence: currentSequence + 1,
              highestSequence: Math.max(
                h.highestSequence || 0,
                currentSequence + 1
              ),
              days: updatedDays,
            };
          }
          return h;
        });
        setHabitos(updatedHabitos);
        setHabitosConcluidos(habitosConcluidos + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const marcarNaoConcluido = (habito) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`;

    axios
      .post(url, {}, config)
      .then(() => {
        const updatedHabitos = habitos.map((h) => {
          if (h.id === habito.id) {
            return {
              ...habito,
              done: false,
              currentSequence: Math.max(0, habito.currentSequence - 1),
            };
          }
          return h;
        });
        setHabitos(updatedHabitos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Body>
      <Header data-test="header" />
      <ContentTitle>
        <h2 data-test="today">{dayjs().format("dddd, DD/MM")}</h2>
        <h3 data-test="today-counter" style={{ color: "#8FC549" }}>
          {percentHabitosConcluidos.toFixed(0)}% dos hábitos concluídos
        </h3>
      </ContentTitle>
      {habitos.map((habito) => (
        <HabitosLista data-test="today-habit-container">
          <Title key={habito.id}>
            <div>
              <h2 data-test="today-habit-name">{habito.name}</h2>
              <h3 data-test="today-habit-sequence">
                Sequência atual:{" "}
                <span
                  style={{
                    color:
                      habito.days && habito.days.length > 0
                        ? habito.days.length === habito.highestSequence
                          ? "#8FC549"
                          : "#666"
                        : "#666",
                  }}
                >
                  {habito.days ? habito.days.length : 0}
                </span>
                <br />
                <h4 data-test="today-habit-record">
                  {" "}
                  Seu recorde:{" "}
                  <span
                    style={{
                      color:
                        habito.days &&
                        habito.days.length > 0 &&
                        habito.days.length === habito.highestSequence
                          ? "#8FC549"
                          : "#666",
                    }}
                  >
                    {habito.days && habito.days.length > 0
                      ? Math.max(...habito.days)
                      : 0}
                  </span>
                </h4>
              </h3>
            </div>
            {habito.done ? (
              <Icon
                data-test="today-habit-check-btn"
                style={{ color: "#8FC549" }}
                onClick={() => marcarNaoConcluido(habito)}
              />
            ) : (
              <Icon
                data-test="today-habit-check-btn"
                style={{ color: "#ebebeb" }}
                onClick={() => marcarConcluido(habito)}
              />
            )}
          </Title>
        </HabitosLista>
      ))}

      {showList && <HabitosList />}
      <Footer
        data-test="menu"
        mostrarLista={mostrarLista}
        percentHabitosConcluidos={percentHabitosConcluidos}
      />
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

const Icon = styled(BsFillCheckSquareFill)`
  width: 69px;
  height: 69px;
  color: ${({ concluido }) => (concluido ? "#8FC549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  cursor: pointer;
`;
