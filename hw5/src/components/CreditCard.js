import React from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import chip from "../assets/chip.png";
import visa_logo from "../assets/visa_logo.png";
import visa_front from "../assets/visa_front.png";
import { useState } from "react";

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

const CardContainer = styled.div`
  position: absolute;
  left: 55px;
  top: 85px;
  width: 355px;
  height: 220px;
  border-radius: 32px;
  font-family: "Segoe UI";
`;

const CardBackground = styled.img`
  object-fit: cover;
`;

const Chip = styled.img`
  position: absolute;
  left: 35px;
  top: 40px;
`;

const Code = styled.span`
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
  margin: 0 5px;
`;

const Input = styled.input`
  width: 340px;
  height: 40px;
  background: #e7d7ef;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 1px;
  margin-bottom: 25px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  margin: 65px 5px 5px;
  color: red;
`;

const SelectLabel = styled.div`
  position: absolute;
  left: 55px;
  top: 522px;
  font-size: 18px;
  margin: 0 5px 3px;
`;

const NativeSelect = styled.select`
  position: absolute;
  left: 55px;
  top: 546px;
  width: 340px;
  height: 40px;
  background: #e7d7ef;
  border-radius: 10px;
  padding-left: 12px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.4);
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 340px;
  height: 45px;
  left: 55px;
  top: 715px;
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
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(
      event.target.value
        .split(/(.{4})/)
        .join(" ")
        .substr(0, 23)
    );
  };

  const handleCardOwnerChange = (event) => {
    setCardOwnerName(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const formValidate = (cardNumber, cardOwnerName, cvv) => {};

  const inputs = [
    {
      id: 1,
      type: "number",
      label: "Card number",
      placeholder: "0555 0666 0777 0888",
      value: { cardNumber },
      onChange: handleCardNumberChange,
    },
    {
      id: 2,
      type: "text",
      label: "Your fullname",
      placeholder: "Jonh Snow",
      value: { cardOwnerName },
      onChange: handleCardOwnerChange,
    },
    {
      id: 3,
      type: "text",
      label: "CVV",
      placeholder: "123",
      value: { cvv },
      onChange: handleCvvChange,
    },
  ];
  console.log(cardNumber, cardOwnerName, cvv);

  return (
    <div>
      <FormWrapper  onSubmit={onSubmit}>
        <FormTitle>Create a new card</FormTitle>
        <CardContainer>
          <Chip src={chip} />
          <Code>{cardNumber}</Code>
          <CardOwner>{cardOwnerName}</CardOwner>
          <CardType src={visa_logo} />
          <CardBackground src={visa_front} />
        </CardContainer>
        <InputsContainer>
          {inputs.map(({ id, label, placeholder, onChange }) => (
            <InputWrapper key={id}>
              <Label>{label}</Label>
              <Input placeholder={placeholder} onChange={onChange} />
              <ErrorMessage>{error}</ErrorMessage>
            </InputWrapper>
          ))}
        </InputsContainer>

        <FormControl fullWidth>
          <SelectLabel variant="standard" htmlFor="uncontrolled-native">
            VISA or MASTERCARD
          </SelectLabel>
          <NativeSelect
            defaultValue="VISA"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
          </NativeSelect>
        </FormControl>

        <SubmitButton type="submit">Add card</SubmitButton>
      </FormWrapper>
    </div>
  );
};
export default Form;
