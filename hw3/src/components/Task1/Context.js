import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    albums: [],
    newAlbumsAmount: [],
    n: 0,
    error: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) =>
        this.setState({
          albums: albums,
          newAlbumsAmount: albums.slice(),
          n: albums.length,
        })
      )
      .catch((error) => {
        if (!error.response.ok) {
          this.setState({ error });
        }
      });
  }

  handleChange = (inputNum) => {
    const { albums } = this.state;
    const newAlbumsAmount = albums.slice(0, inputNum);

    this.setState({
      newAlbumsAmount,
      n: inputNum,
    });
  };

  render() {
    return (
      <>
        <DataContext.Provider
          value={{ ...this.state, handleChange: this.handleChange }}
        >
          {this.props.children}
        </DataContext.Provider>
      </>
    );
  };
};