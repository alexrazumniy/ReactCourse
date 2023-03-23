import React from "react";
import './App.css';

class Counter() extends React.Component {
  constructor(props) {
    this.super(props);
    this.state = {counter: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

  }

  render() {
    return null
  }
}

export default Counter;
