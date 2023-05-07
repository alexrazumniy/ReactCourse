import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardsDataContext } from "./DataContext";
import styled from "styled-components";
import mastercard_front from "../assets/mastercard_front.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import chip from "../assets/chip.png";
import visa_front from "../assets/visa_front.png";
import visa_logo from "../assets/visa_logo.png";

const Container = styled.div`
  margin: 0 auto;
  font-family: "Segoe UI";
  position: relative;
  width: 450px;
  height: 800px;
  background: #ddd;
`;

const FormTitle = styled.div`
  text-align: center;
  padding-top: 20px;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: 2px;
`;

const MyCardWrapper = styled.div`
  position: absolute;
  left: 55px;
  top: 85px;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
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
  left: 250px;
  top: 150px;
`;

const FaceBackground = styled.img`
  object-fit: cover;
`;

const FormContainer = styled.form`
  position: absolute;
  left: 55px;
  top: 320px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 18px;
`;

const Input = styled.input`
  width: 340px;
  height: 40px;
  background: #e7d7ef;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-size: 22px;
  margin-bottom: 25px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Selector = styled.select`
  width: 340px;
  height: 40px;
  background: #e7d7ef;
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-size: 22px;
  margin-bottom: 25px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  margin: 65px 5px 5px;
  color: red;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 340px;
  height: 45px;
  top: 385px;
  background: #aa24e9;
  border-radius: 10px;
  border: none;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;
`;

const Form = () => {
  const { addMyCard } = useContext(CardsDataContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwnerName] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [cardType, setCardType] = useState("Visa");
  const [cardId, setCardId] = useState(0);
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvvCodeError, setCvvCodeError] = useState("");

  const navigate = useNavigate();

  const formatCardNumber = (inputValue) => {
    const maxLength = 16;
    const onlyNums = inputValue.replace(/[^\d]/g, "");
    const formattedCardNumber = [];

    for (let i = 0; i < maxLength; i += 4) {
      formattedCardNumber.push(onlyNums.slice(i, i + 4));
    }
    return formattedCardNumber.join(" ");
  };

  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    setCardNumber(formattedValue);
    return formattedValue;
  };

  const handleCardOwnerChange = (event) => {
    const firstCapNameLetters = event.target.value
      .split(" ")
      .map((name) => {
        const firstLetters = name.charAt(0).toUpperCase();
        const restLetters = name.slice(1).toLowerCase();
        return firstLetters + restLetters;
      })
      .join(" ");

    setCardOwnerName(firstCapNameLetters);
  };

  const formatCvvCode = (inputValue) => {
    const maxLength = 3;
    const onlyNums = inputValue.replace(/[^\d]/g, "");
    const formattedCvvCode = [];

    for (let i = 0; i < maxLength; i += 1) {
      formattedCvvCode.push(onlyNums.slice(i, i + 1));
    }
    return formattedCvvCode.join("");
  };

  const handleCvvCodeChange = (event) => {
    const formattedValue = formatCvvCode(event.target.value);
    setCvvCode(formattedValue);
  };

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const validateCardNumber = (cardNumber) => {
    if (cardNumber.length < 16) {
      setCardNumberError("Card code must contain 16 digits at least");
    } else {
      setCardNumberError("");
      return cardNumber;
    }
  };

  const validateCvvCode = (cvvCode) => {
    if (cvvCode.length < 3) {
      setCvvCodeError("CVV code must contain 3 digits at least");
    } else {
      setCvvCodeError("");
      return cvvCode;
    }
  };

  const validateInputData = (cardNumber, cvvCode) => {
    const validatedCardNumber = validateCardNumber(cardNumber);
    const validatedCvvCode = validateCvvCode(cvvCode);

    return validatedCardNumber && validatedCvvCode ? true : false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isDataValid = validateInputData(cardNumber, cvvCode);

    if (isDataValid) {
      const myCard = {
        user_name: cardOwner,
        data: [
          {
            id: cardId,
            card: { numbers: cardNumber, type: cardType, cvv: cvvCode, expiry_date: "01/01/2025" },
            statistic: [],
          },
        ],
      };

      addMyCard(myCard);

      navigate("/your_cards");
    }
  };

  return (
    <div>
      <Container>
        <FormTitle>Create a new card</FormTitle>
        <MyCardWrapper>
          <Chip src={chip} />
          <CardNumber>{cardNumber}</CardNumber>
          <CardOwner>{cardOwner}</CardOwner>
          <CardType
            type={cardType}
            src={cardType === "Visa" ? visa_logo : mastercard_logo}
          />
          <FaceBackground
            type={cardType}
            src={cardType === "Visa" ? visa_front : mastercard_front}
          />
        </MyCardWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <Label>
            Card number
            <Input
              type="text"
              placeholder="0555 0666 0777 0888"
              value={cardNumber}
              required
              maxLength="19"
              onChange={handleCardNumberChange}
            />
            <ErrorMessage>{cardNumberError}</ErrorMessage>
          </Label>
          <Label>
            Your fullname
            <Input
              type="text"
              placeholder="Jonh Snow"
              value={cardOwner}
              required
              onChange={handleCardOwnerChange}
            />
          </Label>
          <Label>
            CVV
            <Input
              type="text"
              placeholder="123"
              value={cvvCode}
              required
              maxLength="3"
              onChange={handleCvvCodeChange}
            />
            <ErrorMessage>{cvvCodeError}</ErrorMessage>
          </Label>
          <Label>
            Visa or Mastercard
            <Selector value={cardType} onChange={handleCardTypeChange}>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
            </Selector>
          </Label>
          <SubmitButton type="submit">Add card</SubmitButton>
        </FormContainer>
      </Container>
    </div>
  );
};
export default Form;
