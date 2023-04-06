import React from "react";
import AlbumsClass from "./components/Task1/AlbumsClass";
import AlbumsFunc from "./components/Task2/AlbumsFunc";
import InputForm from "./components/InputForm";
import SquareComponent from "./components/Task3/SquareComponent";
import Videoplayer from "./components/Task3/Videoplayer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AlbumsClass />
        <AlbumsFunc />
        <h3>Task 1***</h3>
        <InputForm />
        <SquareComponent />
        <Videoplayer />
      </div>
    );
  }
}
