import React, { useState, useEffect } from "react";
import { DataContext } from "../Task1/Context";

export const GetAlbumsUsingHooks = () => {
  const [albums, setAlbums] = useState([]);
  const [albumsToShow, setAlbumsToShow] = useState([]);

  const {albumsNum} = React.useContext(DataContext)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((json) => setAlbums(json))
      .catch((error) => {
        setAlbums({ error });
      });
  }, []);

  return (
    <>
      <div>
        <h2>Task 2</h2>
        {({ albums }) =>
          albums.map(({ userId, id, title }) => (
            <div key={id}>
              {userId} - {id} - {title}
            </div>
          ))
        }
      </div>
    </>
  );
};
