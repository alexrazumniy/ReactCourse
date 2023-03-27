import React from "react";
import "../styles.css";

//===== Task 1.1 =====//

export class User1 extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 45,
  };

  render() {
    return (
      <>
        <h3>=== ЗАДАЧА 1.1 ===</h3>
        <UserCard1
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
        <h3>=== ЗАДАЧА 1.2.a-b ===</h3>
        <UserCard2
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
      </>
    );
  }
}

// //===== Task 1.2 =====//

//===> a) <===//

const UserCard1 = (props) => {
  return (
    <>
      <div>User information 1.1:</div>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Age: {props.age}</div>
    </>
  );
};

// //===> b) <===//

const UserCard2 = ({ name, surname, age }) => {
  return (
    <>
      <div>User information 1.2:</div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </>
  );
};

// //===> c) <===//

export class User2 extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 45,
  };

  render() {
    return (
      <>
        <h3>=== ЗАДАЧА 1.2.c ===</h3>
        <UserCard3 {...this.state} />
      </>
    );
  }
}

const UserCard3 = ({name, surname, age}) => {
  return (
    <>
      <div>User information:</div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </>
  );
};

// //==== Task 1.3 =====//

// //===> a) <===//

export class User3 extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 15,
  };

  render() {
    return (
      <>
        <h3>=== ЗАДАЧА 1.3 ===</h3>
        <UserCardText1 {...this.state} />
        <UserCardText2 {...this.state} />
      </>
    );
  }
}
// //===> b) <===//

const UserCardText1 = (props) => {
  return <h4>My info: {props = "Alex - Ivanov - 15"}</h4>
  // return <h4>My info: {Object.values(props).join(" - ")}</h4>;
};

// //===> c) <===//

const ageIn = (age) => {
  let isAgeIn;
  age < 18 ? (isAgeIn = "не") : (isAgeIn = "");
  return isAgeIn
}

const UserCardText2 = (props) => {  
  return (
    <>
      <h4>Привет, {props.name}, тебе {props.age} лет, я <span>{ageIn(props.age)}</span> могу
      налить тебе выпить чего-нибудь</h4>
    </>
  );
};
