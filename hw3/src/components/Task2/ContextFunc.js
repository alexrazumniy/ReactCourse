import React, { useState, useEffect, useCallback, createContext } from "react";

export const DataContextFunc = createContext();

export const DataProviderFunc = (props) => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumsAmount, setNewAlbumsAmount] = useState([]);
  const [n, setN] = useState(null);
  const [error, setError] = useState("");

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
        setNewAlbumsAmount(data);
        setN(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const validateInput = useCallback(
    (value) => {
      if (value === Number(value) && value > 0 && value <= albums.length) {
        return value;
      } else {
        setError(
          `Wrong value! Please enter the number from 1 to ${albums.length}`
          );
          console.log(value);
      }
    }, [albums] );

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();

      const validatedValue = validateInput(event.target[0].value);
      setNewAlbumsAmount(validatedValue); ////////
      console.log(validatedValue);
    },
    [validateInput, setNewAlbumsAmount]
  );

  return (
    <DataContextFunc.Provider
      value={{
        newAlbumsAmount: newAlbumsAmount,
        albums: albums,
        n: n,
        validateInput,
        handleChange,
      }}
    >
      {props.children}
    </DataContextFunc.Provider>
  );
};
