import React from "react";
import AlbumsClass from "./components/Task1/AlbumsClass";
import AlbumsFunc from "./components/Task2/AlbumsFunc";
import SquareComponent from "./components/Task3/SquareComponent";
import Videoplayer from "./components/Task3/Videoplayer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AlbumsClass />
        <AlbumsFunc />
        <SquareComponent />
        <Videoplayer />
      </div>
    );
  }
}
