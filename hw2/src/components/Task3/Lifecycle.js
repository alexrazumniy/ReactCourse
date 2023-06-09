import React from "react";
import "../styles.css";

export class Lifecycle extends React.Component {
  state = {
    pageTitle: "Hello",
  };

  componentDidMount() {
    document.title = this.state.pageTitle; 
  }

  componentDidUpdate() {
    document.title = this.state.pageTitle;
  }


  render() {
    return (
      <>
        <h3>=== ЗАДАЧА 3 ===</h3>
        <p className="title-for-task-3">{this.state.pageTitle}</p>
        <button
          className="button button-for-task-3" 
          onClick={() => this.setState({ pageTitle: "Random Page" })}
        >
          Button for update
        </button>
      </>
    );
  }
}