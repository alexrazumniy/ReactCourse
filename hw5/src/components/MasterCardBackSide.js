import React from "react";
import styled from "styled-components";
import mastercard_back from "../assets/mastercard_back.png";

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

const MasterCardBackSide = () => {
  return (
    <div>
      <CardContainer>
        <ExpiryDate>04/29</ExpiryDate>
        <CVVCode>856</CVVCode>
        <CardBackground src={mastercard_back} />
      </CardContainer>
    </div>
  );
};

export default MasterCardBackSide;
