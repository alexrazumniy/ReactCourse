import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import mastercard_front from "../assets/mastercard_front.png";
import mastercard_back from "../assets/mastercard_back.png";
import mastercard_logo from "../assets/mastercard_logo.png";
import chip from "../assets/chip.png";
import visa_front from "../assets/visa_front.png";
import visa_back from "../assets/visa_back.png";
import visa_logo from "../assets/visa_logo.png";

const FormWrapper = styled.form`
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

const FaceBackground = styled.img`
  object-fit: cover;
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

const InputsContainer = styled.div`
  position: absolute;
  left: 55px;
  top: 320px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
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
  font-size: 16px;
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 340px;
  height: 45px;
  left: 55px;
  top: 710px;
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
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwnerName] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");
  const [error, setError] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardOwnerChange = (event) => {
    setCardOwnerName(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      cardNumber.length !== 16 ||
      typeof cardNumber !== Number ||
      cvv.length !== 3 ||
      typeof cvv !== Number
    ) {
      setError(error);
      return;
    } else {
      setCardNumber(
        event.target.value
        .split(/(.{4})/)
        .join(" ")
        .slice(-4)
      );
      error = "";
    }
  };
  console.log(cardNumber, cardOwner, cvv, cardType);

  return (
    <div>
      <FormWrapper handleSubmit={handleSubmit}>
        <FormTitle>Create a new card</FormTitle>
        <MyCardWrapper>
          <Chip src={chip} />
          <CardNumber>{cardNumber}</CardNumber>
          <CardOwner>{cardOwner}</CardOwner>
          <CardType
            type={cardType}
            src={cardType === "visa" ? visa_logo : mastercard_logo}
          />
          <FaceBackground src={visa_front} />
        </MyCardWrapper>

        <InputsContainer>
          <Label>
            Card number
            <Input
              type="text"
              placeholder="0555 0666 0777 0888"
              value={cardNumber}
              required
              maxLength="16"
              onChange={handleCardNumberChange}
              error="Input value is not valid"
            />
            <ErrorMessage>{error}</ErrorMessage>
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
              value={cvv}
              required
              maxLength="3"
              onChange={handleCvvChange}
              error="Input value is not valid"
            />
            <ErrorMessage>{error}</ErrorMessage>
          </Label>
          <Label>
            Visa or Mastercard
            <Selector defaultValue="Visa" onChange={handleCardTypeChange}>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
            </Selector>
          </Label>
        </InputsContainer>
        <SubmitButton type="submit">Add card</SubmitButton>
      </FormWrapper>
    </div>
  );
};
export default Form;
