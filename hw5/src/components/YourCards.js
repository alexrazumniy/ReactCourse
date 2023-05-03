import styled from "styled-components";
import { Link } from "react-router-dom";
import { CardsList } from "./Cards";
import plus_btn from "../assets/plus_btn.png";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Segoe UI";
  font-weight: 400;
  letter-spacing: 2px;
  margin: 15px 0;
`;

const AddCardBtn = styled.img`
  display: block;
  margin-left: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    width: 36px;
    height: 36px;
    margin-left: 11px;
  }
`;

const Container = styled.section`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  align-items: start;
  row-gap: 75px;
  position: relative;
  max-width: 1800px;
  margin: 0 auto;
  padding: 25px 50px 65px;
  box-shadow: 2px 2px 5px 2px #ddd;
`;


const CardsToRender = () => {
  return (
    <div>
      <Header>
        <Title>Your cards</Title>
        <Link to={"/credit_card"}>
          <AddCardBtn src={plus_btn} />
        </Link>
      </Header>
      <Container >
        <CardsList />
      </Container>
    </div>
  );
};

export default CardsToRender;
