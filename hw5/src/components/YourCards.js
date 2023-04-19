import React from "react";
import styled from "styled-components";
import Visa from "./Visa";
import VisaBackSide from "./VisaBackSide";
import MasterCard from "./MasterCard";
import MasterCardBackSide from "./MasterCardBackSide";

const Container = styled.section`
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: start;
  align-items: start;
  gap: 20px;
`;

const CardsList = () => {
  return (
    <div>
      <Container>
        <Visa />
      </Container>
    </div>
  );
};

export default CardsList;
