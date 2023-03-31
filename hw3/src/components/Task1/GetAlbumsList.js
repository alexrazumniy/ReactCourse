import React from "react";

export class GetAlbumsList extends React.Component {
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
        <div>
          <h3>Task 1.1</h3>
          {this.state.albums.map((album) => (
            <div key={album.id}>
              {album.userId} - {album.id} - {album.title}
            </div>
          ))}
          ;
        </div>
      );
    }
  }
}
