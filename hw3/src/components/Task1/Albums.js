// import { render } from "@testing-library/react";
import React from "react";
import { DataContext } from "./DataContext";

export const Albums = () => {
  return (
    <div>
      <DataContext.Consumer>
        {(albums) => {
          console.log(albums);
          albums.map((album) => (
            <div>
              {album.userId} - {album.id} - {album.title}
            </div>
          ));
        }}
      </DataContext.Consumer>
    </div>
  );
};

{/* <DataContext.Provider value={this.props.albums}>
  {this.state.albums.map((album) => (
    <div key={album.id}>
      {album.userId} - {album.id} - {album.title}
    </div>
  ))}
  <Albums />
</DataContext.Provider>; */}
