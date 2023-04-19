import React from "react";
import styled from "styled-components";
import visa_cardback from "../assets/visa_cardback.png";

const CardContainer = styled.div`
  position: relative;
  width: 534px;
  height: 334px;
  border-radius: 48px;
`;

const CardBackground = styled.img`
  object-fit: cover;
`;

const ExpiryDate = styled.span`
  position: absolute;
  left: 11%;
  top: calc(50% - 38px / 2 + 80px);
  color: #fff;
  font-weight: 400;
  font-size: 30px;
`;

const CVVCode = styled.span`
  position: absolute;
  left: 80%;
  top: calc(50% - 38px / 2 + 80px);
  color: #fff;
  font-weight: 400;
  font-size: 30px;
`;

const VisaBackSide = () => {
  return (
    <div>
      <CardContainer>
        <ExpiryDate>04/29</ExpiryDate>
        <CVVCode>856</CVVCode>
        <CardBackground src={visa_cardback} />
      </CardContainer>
    </div>
  );
};

export default VisaBackSide;
