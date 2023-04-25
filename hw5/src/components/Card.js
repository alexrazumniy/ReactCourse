import React from "react";
import styled from "styled-components";
import mastercard_front from "../assets/mastercard_front.png";
import mastercard_back from "../assets/mastercard_back.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import visa_front from "../assets/visa_front.png";
import visa_back from "../assets/visa_back.png";
import visa_logo from "../assets/visa_logo.png";
import chip from "../assets/chip.png";

const CardWrapper = styled.div`
  position: relative;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
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

export const Card = ({ user_name, numbers, type }) => {
  return (
    <div>
      <CardWrapper>
        <Chip src={chip} />
        <CardNumber>{numbers}</CardNumber>
        <CardOwner>{user_name}</CardOwner>
        <CardType
          type={type}
          src={type === "visa" ? visa_logo : mastercard_logo}
        />
        <FaceBackground
          type={type}
          src={type === "visa" ? visa_front : mastercard_front}
        />
      </CardWrapper>
    </div>
  );
};

export const CardBackside = ({ expiry_date, cvv, type }) => {
  return (
    <div>
      <CardWrapper>
        <ExpiryDate>{expiry_date}</ExpiryDate>
        <Cvv>{cvv}</Cvv>
        <BacksideBackground
          type={type}
          src={type === "visa" ? visa_back : mastercard_back}
        />
      </CardWrapper>
    </div>
  );
};

export const CardStatistics = ({ date, place, expense, currency }) => {
  return (
    <div>
      <p>Date: {date}</p>
      <p>Place: {place}</p>
      <p>Expense: {expense}</p>
      <p>Currency: {currency}</p>
    </div>
  );
};
