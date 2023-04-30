import React, { useState } from "react";
import styled from "styled-components";
import view_eye from "../assets/view_eye.png";
import view_eye_crossed from "../assets/view_eye_crossed.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";

const TabBarWrapper = styled.div`
  position: absolute;
  z-index: -1;
  left: 23px;
  top: -185px;
  width: 310px;
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
  top: 75px;
  left: 47px;
  background: transparent;
  border: none;
`;

const ViewCodeElemBtn = styled.button`
  position: absolute;
  top: 75px;
  left: 50px;
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

export const OptionsBar = ({
  handleEyeOpen,
  handleShowNumber,
  handleShowStatistic,
  handleFlip,
}) => {
  return (
    <div>
      <TabBarWrapper>
        <ViewEyeCrossBtn onClick={handleEyeOpen}>
          <img src={view_eye_crossed} alt="view_eye_cross" />
        </ViewEyeCrossBtn>
        <ViewCodeElemBtn onClick={handleShowNumber}>
          <img src={view_eye} alt="view_eye" />
        </ViewCodeElemBtn>
        <ViewStatsElemBtn onClick={handleShowStatistic}>
          <img src={showing_stats} alt="showing_stats" />
        </ViewStatsElemBtn>
        <FlipCardElemBtn onClick={handleFlip}>
          <img src={flip} alt="flip" />
        </FlipCardElemBtn>
      </TabBarWrapper>
    </div>
  );
};
