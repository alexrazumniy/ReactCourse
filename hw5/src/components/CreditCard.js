import React from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Visa from "./Visa";
import MasterCard from "./MasterCard";

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

const InputsContainer = styled.div`
  position: absolute;
  left: 55px;
  top: 320px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const ErrorMessage = styled.div`
  margin: 0 5px 5px;
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

const CardStyled = styled.div`
  position: absolute;
  left: 55px;
  top: 85px;
`;

const Form = () => {
  const inputs = [
    { id: 1, label: "Card number", placeholder: "0555 0666 0777 0888" },
    { id: 2, label: "CVV", placeholder: "123" },
    { id: 3, label: "Your fullname", placeholder: "Jonh Snow" },
  ];

  // updateCardNumber = (event) => {
  //   event.preventDefault();
  //   // document.getElementById('cardNumberDisplay').textContent = value;
  // }

  // updateCardOwner = (event) => {
  //   event.preventDefault();
  //   // document.getElementById('cardHolderDisplay').textContent = value;
  // }

  // updateExpiry = (event) => {
  //   event.preventDefault();
  //   // document.getElementById('expiryDisplay').textContent = value;
  // }

  return (
    <div>
      <FormWrapper>
        <CardStyled>
          <Visa />
        </CardStyled>
        <FormTitle>Create a new card</FormTitle>
        <InputsContainer>
          {inputs.map(({ id, label, placeholder }) => (
            <InputWrapper key={id}>
              <Label>{label}</Label>
              <Input type="text" placeholder={placeholder} />
              <ErrorMessage>Value is not valid!</ErrorMessage>
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

        <SubmitButton>Add card</SubmitButton>
      </FormWrapper>
    </div>
  );
};

export default Form;
