import React from "react";
import "../styles.css";


export class Lifecycle extends React.Component {
    state = {
      pageTitle: "Hello",
    };
  
    componentDidMount() {
      this.setState({ pageTitle: "Start Page" });
    }
  
    componentDidUpdate(updatedTitle, ...rest) {
      updatedTitle = this.state.pageTitle;
    }
  
    render() {
      return (
        <div>
          <p className="title-for-task-3">{this.state.pageTitle}</p>
          <button className="button button-for-task-3"
            onClick={() => this.setState({ pageTitle: "Random Page" })}
          >
            Button for update
          </button>
        </div>
      );
    }
  }