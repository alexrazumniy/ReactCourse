import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import styled, { css } from "styled-components";
import YourCards from "./YourCards";
import Form from "./CreditCard";

import backBtn from "../assets/arrow-left.png";
import forwardBtn from "../assets/arrow-right.png";

const GoBackButton = () => {
  const navigate = useNavigate();
  const handleStep = () => {
    navigate(-1);
  };
  return (
    <button className="back-btn" onClick={handleStep}>
      {<img src={backBtn} alt="back" />}
    </button>
  );
};

const GoForwardButton = () => {
  const navigate = useNavigate();
  const handleStep = () => {
    navigate(+1);
  };
  return (
    <button className="forward-btn" onClick={handleStep}>
      {<img src={forwardBtn} alt="forward" />}
    </button>
  );
};

const Header = styled.div`
  font-family: "Segoe UI";
  font-size: 20px;
  height: 100px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding: 25px 50px;
  font-weight: 500;
  box-shadow: 2px 4px 8px rgb(157, 157, 194);
`;

const StyledNavLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;

  ${props => props.isActive && css`
    background: #9AFE2E;
  `}  
`;

const RouterApp = () => {
  return (
    <div>
      <Header>
        <NavList>
          <StyledNavLink to={"credit_card"}>Credit Card</StyledNavLink>
          <StyledNavLink to={"your_cards"}>Your Cards</StyledNavLink>
          <GoBackButton />
          {/* <GoForwardButton /> */}
        </NavList>
      </Header>
      <Routes>
        <Route path="*" element={<Form />} />
        <Route path="credit_card" element={<Form />} />
        <Route path="your_cards" element={<YourCards />} />
      </Routes>
    </div>
  );
};

export default RouterApp;
