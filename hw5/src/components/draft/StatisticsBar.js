import React from "react";
import styled from "styled-components";

const CardStatistics = styled.div`
  position: relative;
  width: 310px;
  height: 450px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #e5efcc;

  ::before {
    position: absolute;
    content: "Card Stats";
    font-size: 28px;
    top: 72px;
    left: 50px;
  }
`;

export const ShowCardStats = ({ date, place, expense, currency }) => {
  return (
    <div>
      <CardStatistics>
        <p>Date: {date}</p>
        <p>Place: {place}</p>
        <p>Expense: {expense} {currency}</p>
      </CardStatistics>
    </div>
  );
};