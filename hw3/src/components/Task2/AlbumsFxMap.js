import React from "react";

export const AlbumsMap = (props) => {
  const { newAlbumsAmount } = props;
console.log(props); ////////
  return (
    <div>
      {newAlbumsAmount.map((album, index) => (
        <div key={album.id}>
          {album.id} - {index} - {album.title}
        </div>
      ))}
    </div>
  );
};
