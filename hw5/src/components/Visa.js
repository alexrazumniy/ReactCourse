import React from "react";
import styled from "styled-components";
import chip from "../assets/chip.png";
import visa_logo from "../assets/visa_logo.png";
import visa_cardfront from "../assets/visa_cardfront.png";

const CardContainer = styled.div`
  position: relative;
  width: 534px;
  height: 334px;
  border-radius: 48px;
`;

const CardBackground = styled.img`
  object-fit: cover;
`;

const Chip = styled.img`
  position: absolute;
  left: 55px;
  top: 85px;
`;

const Code = styled.span`
  position: absolute;
  left: 10%;
  top: 50%;
  color: #fff;
  font-weight: 400;
  font-size: 30px;
`;

const CardOwner = styled.span`
  position: absolute;
  left: 11%;
  top: calc(50% - 31px / 2 + 85px);
  color: #fff;
  font-weight: 400;
  font-size: 24px;
`;

const CardType = styled.img`
  position: absolute;
  left: 75%;
  top: 63%;
`;

const Visa = () => {
  return (
    <div>
      <CardContainer>
        <Chip src={chip}/>
        <Code>1234 5678 9012 3456 </Code>
        <CardOwner>JOAN WILDER</CardOwner>
        <CardType src={visa_logo} />
        <CardBackground src={visa_cardfront} />
      </CardContainer>
    </div>
  );
};

export default Visa;
