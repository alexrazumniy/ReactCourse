import React from "react";
import styled from "styled-components";
import chip from "../assets/chip.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import mastercard_front from "../assets/mastercard_front.png";

const CardContainer = styled.div`
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

const MasterCard = () => {
  return (
    <div>
      <CardContainer>
        <Chip src={chip} />
        <Code>1234 5678 9012 3456 </Code>
        <CardOwner>JOAN WILDER</CardOwner>
        <CardType src={mastercard_logo} />
        <CardBackground src={mastercard_front} />
      </CardContainer>
    </div>
  );
};

export default MasterCard;
