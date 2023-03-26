import React from "react";
import "../styles.css";

//===== Task 1.1 =====//

export class User extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 45,
  };

  render() {
    return (
      <>
        <p>=== ЗАДАЧА 1 ===</p>
        <UserCard
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
      </>
    );
  }
}

// //===== Task 1.2 =====// Розкоментовувати по одному a) або b)

//===> a) <===//

const UserCard = (props) => {
  return (
    <>
      <div>User information:</div>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Age: {props.age}</div>
    </>
  );
};

// //===> b) <===//

// const UserCard = ({name, surname, age}) => {
//   return (
//     <>
//       <div>User information:</div>
//       <div>Name: {name}</div>
//       <div>Surname: {surname}</div>
//       <div>Age: {age}</div>
//     </>
//   );
// };

// //===> c) <===//

// export class User extends React.Component {
//   state = {
//     name: "Alex",
//     surname: "Ivanov",
//     age: 45,
//   };

//   render() {
//     return (
//       <>
//         <p>=== ЗАДАЧА 1 ===</p>;
//         <UserCard {...this.state} />
//       </>
//     );
//   }
// }

// const UserCard = ({name, surname, age}) => {
//   return (
//     <>
//       <div>User information:</div>
//       <div>Name: {name}</div>
//       <div>Surname: {surname}</div>
//       <div>Age: {age}</div>
//     </>
//   );
// };

// //==== Task 1.3 =====//

// //===> a) <===//

// export class User extends React.Component {
//   state = {
//     name: "Alex",
//     surname: "Ivanov",
//     age: 15,
//   };

//   render() {
//     return (
//       <>
//         <p>=== ЗАДАЧА 1 ===</p>;
//         <UserCardText {...this.state} />
//       </>
//     );
//   }
// }

// //===> b) <===//

// const UserCardText = (props) => {
//   return <div>My info: {Object.values(props).join(" - ")}</div>;
// };

// //===> c) <===//

// const UserCardText = (props) => {
//   let isAgeIn;
//   props.age < 18 ? (isAgeIn = "не") : (isAgeIn = "");

//   return (
//     <>
//       Привет, {props.name}, тебе {props.age} лет, я <span>{isAgeIn}</span> могу
//       налить тебе выпить чего-нибудь
//     </>
//   );
// };
