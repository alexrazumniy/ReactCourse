import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import plus_btn from "../assets/plus_btn.png";
import view_eye from "../assets/view_eye.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";

// import { Cards } from "./Cards";
import { Card } from "./Card";
import { CardsLocal } from "./CardsLocal";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Segoe UI";
  font-weight: 400;
  letter-spacing: 2px;
  margin: 15px 0;
`;

const AddCardBtn = styled.img`
  display: block;
  margin-left: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    width: 36px;
    height: 36px;
    margin-left: 11px;
  }
`;

const Container = styled.section`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  align-items: start;
  gap: 20px;
  position: relative;
  max-width: 1800px;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 2px 2px 5px 2px #ddd;
`;

const CardsList = () => {
  return (
    <div>
      <Header>
        <Title>Your cards</Title>
        <Link to={"/credit_card"}>
          <AddCardBtn src={plus_btn} />
        </Link>
      </Header>
      <Container>
          <CardsLocal />
          {/* <Cards/> */}
          {/* <TabBarWrapper>
            <ViewCodeElem src={view_eye} />
            <ViewStatsElem src={showing_stats} />
            <FlipCardElem src={flip} />
          </TabBarWrapper> */}
          {/* <ShowCardStats>статистика</ShowCardStats> */}
      </Container>
    </div>
  );
};

export default CardsList;
