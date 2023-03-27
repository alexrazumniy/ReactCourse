import React from "react";
import { UserCard } from "./UserCard";
import { UserCardText } from "./UserCardText";
import "../styles.css";

//===== Task 1.1 =====//
export class User extends React.Component {
  state = {
    name: "Alex",
    surname: "Ivanov",
    age: 15,
  };

  checkDrinkPermission = () => {
    const { name, age } = this.state;
    return `Привет, ${name}, тебе ${age} лет, я ${age < 18 ? "не могу" : "могу"}
    налить тебе выпить чего-нибудь`;
  };

  render() {
    return (
      <>
        <h3>=== 2.c.a каждый prop в отдельности ===</h3>
        <UserCard
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />

        <h3>=== 2.c.b state целиком ===</h3>
        <UserCard {...this.state} />

        <h3>=== 3.b text "My info" ===</h3>
        <UserCardText
          text={`My info: ${this.state.name} - ${this.state.surname} - ${this.state.age}`}
        />

        <h3>=== 3.c text about drink permission ===</h3>
        <UserCardText text={this.checkDrinkPermission()}/>
      </>
    );
  }
}
