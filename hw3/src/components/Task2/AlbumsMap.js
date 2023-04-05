import React from "react";

export const AlbumsMap = (props) => {
  const { newAlbumsAmount } = props;

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
