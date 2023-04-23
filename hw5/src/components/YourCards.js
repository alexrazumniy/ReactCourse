import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import chip from "../assets/chip.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import mastercard_front from "../assets/mastercard_front.png";

import plus_btn from "../assets/plus_btn.png";
import view_eye from "../assets/view_eye.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";
import DataProviderFunc from "./useFetch";


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Segoe UI";
  font-weight: 400;
  letter-spacing: 2px;
`;

const AddCardBtn = styled.img`
  // Плюс для добавления карты
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: #5abf5a;
  }
`;

const Container = styled.section`
  // Контейнер
  position: relative;
  margin: 0 auto;
  max-width: 1800px;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: start;
  align-items: start;
  gap: 20px;
  box-shadow: 2px 2px 5px 2px #ddd;
`;

const CardWithTabContainer = styled.div``;

const CardWrapper = styled.div`
  // Карточка
  position: relative;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
`;

const CardBackground = styled.img`
  object-fit: cover;
`;

const Chip = styled.img`
  position: absolute;
  left: 35px;
  top: 40px;
`;

const Code = styled.span`
  position: absolute;
  left: 35px;
  top: 100px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 3px;
`;

const CardOwner = styled.span`
  position: absolute;
  left: 35px;
  top: 160px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
`;

const CardType = styled.img`
  position: absolute;
  left: 255px;
  top: 160px;
`;

const TabBarWrapper = styled.div`
  // Нижний таб бар
  position: absolute;
  z-index: -1;
  left: 38px;
  top: 185px; // при заезде 125px
  width: 310px;
  height: 120px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #ddebff;

  ::before {
    position: absolute;
    content: "";
    top: 72px;
    left: 110px;
    width: 2px;
    height: 35px;
    background-color: #111;
  }

  ::after {
    position: absolute;
    content: "";
    top: 72px;
    left: 200px;
    width: 2px;
    height: 35px;
    background-color: #111;
  }
`;

const ViewCodeElem = styled.img`
  position: absolute;
  top: 75px;
  left: 50px;
`;

const ViewStatsElem = styled.img`
  position: absolute;
  top: 75px;
  left: 140px;
`;

const FlipCardElem = styled.img`
  position: absolute;
  top: 75px;
  right: 50px;
`;

const ShowCardStats = styled.div`
  position: relative;
  width: 310px;
  height: 450px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #e5efcc;

  ::before {
    position: absolute;
    content: "Card Stats";
    font-family: "Segoe UI";
    font-size: 28px;
    top: 72px;
    left: 50px;
  }
`;

const CardsList = () => {
  return (
    <div>
      <Header>
        <Title>Your cards  </Title>
        <Link to={"/credit_card"}>
          <AddCardBtn src={plus_btn} />
        </Link>
      </Header>
      <Container>
        <CardWithTabContainer>
          <CardWrapper>
            <Chip src={chip} />
            <Code>1234 5678 9012 3456</Code>
            <CardOwner>JOAN WILDER</CardOwner>
            <CardType src={mastercard_logo} />
            <CardBackground src={mastercard_front} />
          </CardWrapper>
          <TabBarWrapper>
            <ViewCodeElem src={view_eye} />
            <ViewStatsElem src={showing_stats} />
            <FlipCardElem src={flip} />
          </TabBarWrapper>
        <ShowCardStats></ShowCardStats>
        </CardWithTabContainer>
      </Container>
    </div>
  );
};

export default CardsList;
