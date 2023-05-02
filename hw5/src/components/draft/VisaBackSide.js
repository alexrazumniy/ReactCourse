import React from "react";
import styled from "styled-components";
import visa_back from "../assets/visa_back.png";

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

const ExpiryDate = styled.span`
  position: absolute;
  left: 35px;
  top: 150px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const CVVCode = styled.span`
  position: absolute;
  left: 250px;
  top: 150px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const VisaBackSide = () => {
  return (
    <div>
      <CardContainer>
        <ExpiryDate>04/29</ExpiryDate>
        <CVVCode>856</CVVCode>
        <CardBackground src={visa_back} />
      </CardContainer>
    </div>
  );
};

export default VisaBackSide;
