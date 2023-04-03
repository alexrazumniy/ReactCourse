import React from "react";
import "../../App.css";

export class Square extends React.Component {
  squareRef = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      this.squareRef.current.style.transform = "translateX(200px)";
    }, 2000);

    return clearTimeout();
  }

  render() {
    return (
      <div>
        <h3>Square</h3>
        <div className="square" ref={this.squareRef}>
          <p>test</p>
        </div>
      </div>
    );
  }
}
