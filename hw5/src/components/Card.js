import { useState } from "react";
import styled from "styled-components";
import mastercard_front from "../assets/mastercard_front.png";
import mastercard_back from "../assets/mastercard_back.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import chip from "../assets/chip.png";
import visa_front from "../assets/visa_front.png";
import visa_back from "../assets/visa_back.png";
import visa_logo from "../assets/visa_logo.png";
import { OptionsBar } from "./OptionsTabBar";

const Sides = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  transition: 1s;
  backface-visibility: hidden;
`;

const Front = styled(Sides)`
  ${(props) => props.isFlipped && `transform: rotateY(180deg)`}
`;

const Back = styled(Sides)`
  ${(props) => props.isFlipped && `transform: rotateY(180deg)`}
  transform: rotateY(180deg);
`;

const CardWrapper = styled.div`
  position: relative;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
  z-index: 0;
`;

const Chip = styled.img`
  position: absolute;
  left: 35px;
  top: 40px;
`;

const CardNumber = styled.span`
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

const FaceBackground = styled.img`
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

const Cvv = styled.span`
  position: absolute;
  left: 250px;
  top: 150px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const BacksideBackground = styled.img`
  object-fit: cover;
`;

const OptionsBarShown = styled(OptionsBar)`
  ${(props) => props.showOptions && `transform: translateX(50px)`}
`;

const StatBar = styled.div`
  padding: 70px 15px 10px;
  width: 300px;
  height: auto;
  margin-left: 12px;
  border-radius: 15px;
  font-family: "Segoe UI";
  background: #e5efcc;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  margin-top: ${(props) => (props.showStatistic ? "-40px" : "0")};
`;

const StatHeader = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
`;

const StatItem = styled.div`
  font-size: 16px;
  line-height: 2;
  font-family: "Segoe UI";
`;

const StatDate = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const StatPlace = styled.span`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const StatCosts = styled.span`
  display: inline-block;
  width: 45px;
  margin-right: 10px;
`;

const StatCurrency = styled.span`
  display: inline-block;
  width: 50px;
  margin-right: 10px;
`;

export const Card = ({
  cardOwner,
  cardNumber,
  cardType,
  expiryDate,
  cvvCode,
  cardStatistic,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const [isFlipped, setFlipped] = useState(false);

  const handleCardNumber = (cardNumber) => {
    const groups = [];
    for (let i = 0; i < cardNumber.length; i = i + 4) {
      groups.push(cardNumber.slice(i, i + 4));
    }
    return groups.join("");
  };
  const slicedCardNumber = handleCardNumber(cardNumber);

  const maskCardNumber = (cardNumber) => {
    const MASK = "****";
    const groups = [];
    for (let j = 1; j < 4; j++) {
      groups.push(MASK);
      continue;
    }
    const group = cardNumber.slice(-4);
    groups.push(group);

    const maskedDigits = groups.join(" ");
    return maskedDigits;
  };

  const hiddenNumber = maskCardNumber(cardNumber);

  const handleShowOptionsBar = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleEyeOpen = () => {
    setEyeOpen((prevState) => !prevState);
  };

  const handleShowStatistic = () => {
    setShowStatistic((prevState) => !prevState);
  };

  const handleFlip = () => {
    setFlipped((prevState) => !prevState);
  };

  return (
    <div>
      <CardWrapper>
        <Front onClick={handleShowOptionsBar} isFlipped={isFlipped}>
          <Chip src={chip} />
          <CardNumber>{eyeOpen ? slicedCardNumber : hiddenNumber}</CardNumber>
          <CardOwner>{cardOwner}</CardOwner>
          <CardType
            type={cardType}
            src={cardType === "Visa" ? visa_logo : mastercard_logo}
          />
          <FaceBackground
            type={cardType}
            src={cardType === "Visa" ? visa_front : mastercard_front}
          />
        </Front>
        <Back isFlipped={isFlipped}>
          <ExpiryDate>{expiryDate}</ExpiryDate>
          <Cvv>{cvvCode}</Cvv>
          <BacksideBackground
            type={cardType}
            src={cardType === "Visa" ? visa_back : mastercard_back}
          />
        </Back>
        {showOptions && (
          <OptionsBarShown
            showOptions={showOptions}
            handleEyeOpen={handleEyeOpen}
            handleShowStatistic={handleShowStatistic}
            handleFlip={handleFlip}
            eyeOpen={!eyeOpen}
          />
        )}
      </CardWrapper>
      {showStatistic && (
        <StatBar onClick={handleShowStatistic} showStatistic={showStatistic}>
          <StatHeader>Card Stats</StatHeader>
          {cardStatistic.map(({ id, date, place, expense, currency }) => (
            <StatItem
              key={id}
              purchaseDate={date}
              purchasePlace={place}
              purchaseCosts={expense}
              costCurrency={currency}
            >
              <div>
                <StatDate>{date}</StatDate>
                <StatPlace>{place}</StatPlace>
                <StatCosts>{expense}</StatCosts>
                <StatCurrency>{currency}</StatCurrency>
              </div>
            </StatItem>
          ))}
        </StatBar>
      )}
    </div>
  );
};
