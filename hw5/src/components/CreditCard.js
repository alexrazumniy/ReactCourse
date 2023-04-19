import React from "react";
import styled from "styled-components";
import Visa from "./Visa";
import MasterCard from "./MasterCard";

const FormContainer = styled.form`
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
  top: 340px;
`;

const Input = styled.input`
  margin: 0 auto 40px;
  width: 340px;
  height: 50px;
  background: #e7d7ef;
  border-radius: 15px;
  padding: 12px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 2px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Label = styled.label`
  font-size: 30px;
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 340px;
  height: 50px;
  left: 55px;
  top: 705px;
  background: #aa24e9;
  border-radius: 15px;
  border: none;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 2px;
  color: #ffffff;
  cursor: pointer;
`;

const Form = () => {
  const inputs = [
    { id: 1, label: "Card number", placeholder: "0555 0666 0777 0888" },
    { id: 2, label: "CVV", placeholder: "123" },
    { id: 3, label: "Your fullname", placeholder: "Jonh Snow" },
    { id: 4, label: "VISA or MASTERCARD", placeholder: "VISA" },
  ];
  return (
    <div>
      <FormContainer>
        <FormTitle>Create a new card</FormTitle>
        <InputsContainer>
          {inputs.map(
            ({ id, label, placeholder }) => (
              (<Label htmlFor={id}>ddd</Label>),
              (<Input key={id} type="text" placeholder={placeholder} />)
            )
          )}
        </InputsContainer>
        <SubmitButton>Add card</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default Form;
