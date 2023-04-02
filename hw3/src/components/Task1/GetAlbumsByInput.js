import React from "react";
import "../../App.css";

import { DataContext } from "./Context";
import { Albums } from "./Albums";

export class Form extends React.Component {
  state = {
    albumsToShow: null,
    error: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.albumsToShow) {
      this.setState({ error: "Введите целое число от 1 до 100" });
      this.setState({ albumsToShow: "" });
    } else {
      this.setState({
        albumsToShow: event.target.value,
        error: "",
      });
    }
  };

  changeValue = (event) => {
    this.setState({
      albumsToShow: event.target.value,
      error: "",
    });
  };

  render() {
    return (
      <>
        <h3>Task 1.2*</h3>
        <DataContext.Consumer>
          {({ albumsToShow }) =>
            albumsToShow.map(({ userId, id, title }) => (
              <div key={id}>
                {userId} - {id} - {title}
              </div>
            ))
          }
        </DataContext.Consumer>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="input"
            placeholder="Количество альбомов 1-100"
            name="name"
            value={this.state.albumsToShow}
            onChange={this.changeValue}
          />
          <button className="button" type="submit">
            Submit
          </button>
          <p className="error_text">{this.state.error}</p>
        </form>
      </>
    );
  }
}
