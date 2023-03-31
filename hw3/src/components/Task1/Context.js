import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    error: null,
    albums: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) => this.setState({ albums }))
      .catch((error) => {
        this.setState({ error });
        console.log({ error });
        console.log(this.albums);
      });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else {
      return (
        <DataContext.Provider value={this.state}>
          {this.props.children}
        </DataContext.Provider>
      );
    }
  }
}
