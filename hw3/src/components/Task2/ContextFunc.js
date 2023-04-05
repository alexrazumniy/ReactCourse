import React, { useState, useEffect } from "react";

export const DataContextFunc = React.createContext();

export const DataProviderFunc = (props) => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumsAmount, setAlbumsAmount] = useState([]);
  const [n, setN] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot get data from server!");
        }
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
        setAlbumsAmount(data.slice());
        setN(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = ({ albums: newAlbumsAmount, n }) => {
    setAlbumsAmount(newAlbumsAmount.slice(0, n));
    setN(n);
  };

  useEffect(() => {
    handleChange({ albums, n });
  }, [albums, n]);

  return (
    <DataContextFunc.Provider
      value={{ newAlbumsAmount, albums, n, handleChange }}
    >
      {props.children}
    </DataContextFunc.Provider>
  );
};
