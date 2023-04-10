import React from "react";
import "../../App.css";

export default class SquareComponent extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  squareRef = React.createRef();

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.squareRef.current.style.transform = "translateX(200px)";
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <div>
        <h3>Task 3.1 SquareComponent</h3>
        <div className="square" ref={this.squareRef}>
          <p>test</p>
        </div>
      </div>
    );
  }
}
