import React, { useState, useEffect } from "react";

export const DataContextFunc = React.createContext();

export const DataProviderFunc = (props) => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumsAmount, setNewAlbumsAmount] = useState([]);
  const [n, setN] = useState(null);
  // const [error, setError] = useState("null");

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
        setNewAlbumsAmount(data.slice());
        setN(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = ({ albums: newAlbumsAmount, n }) => {
    setNewAlbumsAmount(newAlbumsAmount.slice(0, n));
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
