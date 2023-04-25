import styled from "styled-components";
import view_eye from "../assets/view_eye.png";
import view_eye_cross from "../assets/view_eye_cross.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";

const TabBarWrapper = styled.div`
  // Нижний таб бар
  position: absolute;
  z-index: -1;
  left: 38px;
  top: 185px; // при заезде 125px
  width: 310px;
  height: 120px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #ddebff;

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

const ViewCodeElem = styled.img`
  position: absolute;
  top: 75px;
  left: 50px;
`;

const ViewStatsElem = styled.img`
  position: absolute;
  top: 75px;
  left: 140px;
`;

const FlipCardElem = styled.img`
  position: absolute;
  top: 75px;
  right: 50px;
`;

const ShowCardStats = styled.div`
  position: relative;
  width: 310px;
  height: 450px;
  border-radius: 20px;
  font-family: "Segoe UI";
  background: #e5efcc;

  ::before {
    position: absolute;
    content: "Card Stats";
    font-family: "Segoe UI";
    font-size: 28px;
    top: 72px;
    left: 50px;
  }
`;

export const OptionsTabBar = () => {
  return (
    <div>
      <TabBarWrapper>
        <ViewCodeElem src={view_eye} />
        <ViewStatsElem src={showing_stats} />
        <FlipCardElem src={flip} />
      </TabBarWrapper>
    </div>
  );
};

export const CardStatistics = () => {
  return (
    <div>
      <ShowCardStats>
        <p>Date: {date}</p>
        <p>Place: {place}</p>
        <p>Expense: {expense}</p>
        <p>Currency: {currency}</p>
      </ShowCardStats>
    </div>
  );
};
