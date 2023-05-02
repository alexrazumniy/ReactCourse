import React, { useState } from "react";
import styled from "styled-components";
import mastercard_front from "../assets/mastercard_front.png";
import mastercard_back from "../assets/mastercard_back.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import chip from "../assets/chip.png";
import visa_front from "../assets/visa_front.png";
import visa_back from "../assets/visa_back.png";
import visa_logo from "../assets/visa_logo.png";

// import { OptionsBar } from "./OptionsTabBar";

import view_eye from "../assets/view_eye.png";
import view_eye_crossed from "../assets/view_eye_crossed.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";

const Sides = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  transition: 1s;
  backface-visibility: hidden;
  `;

const Front = styled(Sides)`  
    transition: transform 0.6s ease-out;
`;

const Back = styled(Sides)`
    transition: transform 0.6s ease-out;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
  perspective: 1000px;
  transition: 1s;
  
  /* &:hover > ${Front} {
    transform: rotateY(180deg);
  }

  &:hover > ${Back} {
    transform: rotateY(360deg);
  } */
`;

const Chip = styled.img`
  position: absolute;
  left: 35px;
  top: 40px;
`;

const CardNumber = styled.span`
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

const FaceBackground = styled.img`
  object-fit: cover;
`;

const ExpiryDate = styled.span`
  position: absolute;
  left: 35px;
  top: 150px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const Cvv = styled.span`
  position: absolute;
  left: 250px;
  top: 150px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const BacksideBackground = styled.img`
  object-fit: cover;
`;
// Выпадающее меню карты
const TabBarWrapper = styled.div`
  position: absolute;
  z-index: -1;  
  width: 330px;
  height: 120px;
  border-radius: 20px;
  background: #ddebff;
  transition: 2s;

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

const ViewEyeCrossBtn = styled.button`
  position: absolute;
  top: 78px;
  left: 47px;
  background: transparent;
  border: none;
`;

const ViewStatsElemBtn = styled.button`
  position: absolute;
  top: 75px;
  left: 134px;
  background: transparent;
  border: none;
`;

const FlipCardElemBtn = styled.button`
  position: absolute;
  top: 75px;
  right: 50px;
  background: transparent;
  border: none;
`;

// Меню статистики
const StatBar = styled.div`
  padding: 70px 15px 15px;
  width: 300px;
  height: 330px;
  margin-left: 12px;
  margin-top: -40px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #e5efcc;
  overflow: hidden;
`;

const StatHeader = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
`;

const StatItem = styled.div`
  font-size: 16px;
  line-height: 2;
  font-family: "Segoe UI";
`;

const StatDate = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const StatPlace = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const StatCosts = styled.span`
  display: inline-block;
  width: 45px;
  margin-right: 10px;
`;

const StatCurrency = styled.span`
  display: inline-block;
  width: 50px;
  margin-right: 10px;
`;

export const Card = ({
  cardOwner,
  cardNumber,
  cardType,
  expiryDate,
  cvvCode,
  cardStatistic,
  purchaseDate,
  purchasePlace,
  purchaseCosts,
  costCurrency,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const [isFlipped, setFlipped] = useState(false);

  const maskCardNumber = (cardNumber) => {
    const MASK = "****";
    const groups = [];
    for (let j = 1; j < 4; j++) {
      groups.push(MASK);
      continue;
    }
    const group = cardNumber.split(/(.{4})/)
    .join(" ").slice(-4);
    groups.push(group);

    const maskedDigits = groups.join(" ");
    return maskedDigits;
  };

  const hiddenNumber = maskCardNumber(cardNumber);

  const handleShowOptionsBar = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleEyeOpen = () => {
    setEyeOpen((prevState) => !prevState);
  };

  const handleShowStatistic = () => {
    setShowStatistic((prevState) => !prevState);
  };

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <div>
      <CardWrapper>
        <Front onClick={handleShowOptionsBar}>
          <Chip src={chip} />
          <CardNumber>{eyeOpen ? cardNumber : hiddenNumber}</CardNumber>
          <CardOwner>{cardOwner}</CardOwner>
          <CardType
            type={cardType}
            src={cardType === "visa" ? visa_logo : mastercard_logo}
          />
          <FaceBackground
            type={cardType}
            src={cardType === "visa" ? visa_front : mastercard_front}
          />
        </Front>
        {isFlipped && (
          <Back>
            <ExpiryDate>{expiryDate}</ExpiryDate>
            <Cvv>{cvvCode}</Cvv>
            <BacksideBackground
              type={cardType}
              src={cardType === "visa" ? visa_back : mastercard_back}
            />
          </Back>
        )}
        {showOptions && (
          <div>
            <TabBarWrapper style={{ left: "12px", top: "150px" }}>
              <ViewEyeCrossBtn onClick={handleEyeOpen}>
                <img
                  src={eyeOpen ? view_eye_crossed : view_eye}
                  alt="view_eye_crossed"
                />
              </ViewEyeCrossBtn>
              <ViewStatsElemBtn onClick={handleShowStatistic}>
                <img src={showing_stats} alt="showing_stats" />
              </ViewStatsElemBtn>
              <FlipCardElemBtn onClick={handleFlip}>
                <img src={flip} alt="flip" />
              </FlipCardElemBtn>
            </TabBarWrapper>
          </div>
        )}
      </CardWrapper>
      {showStatistic && (
          <StatBar onClick={handleShowStatistic}>
            <StatHeader>Card Stats</StatHeader>
            {cardStatistic.map(({ id, date, place, expense, currency }) => (
              <StatItem
                key={id}
                purchaseDate={date}
                purchasePlace={place}
                purchaseCosts={expense}
                costCurrency={currency}
              >
                <div>
                  <StatDate>{date}</StatDate>
                  <StatPlace>{place}</StatPlace>
                  <StatCosts>{expense}</StatCosts>
                  <StatCurrency>{currency}</StatCurrency>
                </div>
              </StatItem>
            ))}
          </StatBar>
      )}
    </div>
  );
};
