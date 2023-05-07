import styled from "styled-components";
import view_eye from "../assets/view_eye.png";
import view_eye_crossed from "../assets/view_eye_crossed.png";
import showing_stats from "../assets/showing_stats.png";
import flip from "../assets/flip.png";

const TabBarWrapper = styled.div`
  position: absolute;
  left: 12px;
  z-index: -1;
  width: 330px;
  height: 120px;
  border-radius: 20px;
  background: #ddebff;
  transition: 1s;
  top: ${props => props.showOptions ? '100px' : '150px'};

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

const ViewEye = styled.button`
  position: absolute;
  top: 75px;
  left: 47px;
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
  handleShowStatistic,
  handleFlip,
  eyeOpen
}) => {
  return (
    <div>
      <TabBarWrapper>
        <ViewEye onClick={handleEyeOpen}>
          <img
            src={eyeOpen ? view_eye : view_eye_crossed }
            alt="view_eye_crossed"
          />
        </ViewEye>
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
