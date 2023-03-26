import React from "react";
import "../styles.css";

export class Form extends React.Component {
  state = {
    name: "",
    surname: "",
    error: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.name.length < 3 || this.state.surname.length < 3) {
      this.setState({ error: "С твоими данными что то не так ;(" });
      this.setState({
        name: "",
        surname: "",
      });
    } else
      alert(
        // Делает первые буквы заглавными, остальные строчными
        `Добро пожаловать - ${this.state.name
          .slice(0, 1)
          .toUpperCase()}${this.state.name
          .slice(1)
          .toLowerCase()} ${this.state.surname
          .slice(0, 1)
          .toUpperCase()}${this.state.surname.slice(1).toLowerCase()}`
      );
    this.setState({
      name: "",
      surname: "",
    });
  };

  changeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            className="input"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.changeValue}
          />
          <input
            className="input"
            placeholder="surname"
            name="surname"
            value={this.state.surname}
            onChange={this.changeValue}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <p className="error_text">{this.state.error}</p>
      </div>
    );
  }
}
