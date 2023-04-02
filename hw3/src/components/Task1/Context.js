import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    error: null,
    albums: [],
    albumsToShow: [],
    albumsNum: 0,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) =>
        this.setState({
          albums: albums,
          albumsToShow: albums.slice(),
          albumsNum: albums.length,
        })
      )
      .catch((error) => {
        this.setState({ error });
        console.log({ error });
        console.log(this.albums);
      });
  }

  handleChange = (inputNum) => {
    const { albums } = this.state;
    const albumsToShow = albums.slice(0, inputNum);

    this.setState({
      albumsToShow,
      albumsNum: inputNum
    });
  };

  render() {
    console.log(this.context);
    const { error } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else {
      return (
        <DataContext.Provider value={{...this.state, handleChange: this.handleChange}}>
          {this.props.children}
        </DataContext.Provider>
      );
    }
  }
}
