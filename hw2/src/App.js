import React from "react";
import { User } from "./components/Task1/User";
import { Form } from "./components/Task2/Form";
import { Lifecycle } from "./components/Task3/Lifecycle";

export default class App extends React.Component {
  render() {
    return (
      <>
        <User />
        <Form />
        <Lifecycle />
      </>
    );
  }
}
