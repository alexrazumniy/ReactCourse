import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    albums: [],
    newAlbumsAmount: [],
    n: null,
    error: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot get data from server!");
        }
        return response.json();
      })
      .then((albums) =>
        this.setState({
          albums,
          newAlbumsAmount: albums,
          n: albums.length,
        })
      )
      .catch((error) => {
        console.log(error);
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
  }
}
