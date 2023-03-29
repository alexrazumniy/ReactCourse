import React from "react";
// import PropTypes from "prop-types";

export class Albums extends React.Component {
  state = {
    albums: [],
  };
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((albums) => this.setState({ albums }));
  }
  
    render() {
      return (
        <div>
        {this.state.albums.map((album) => (
          <div key={album.id}>
            {album.userId} - {album.id} - {album.title}
          </div>
        ))}
      </div>
    );
  }
}