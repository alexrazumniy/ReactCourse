import React, { useState, useEffect, useCallback, createContext } from "react";

export const DataContextFunc = createContext();

export const DataProviderFunc = (props) => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumsAmount, setNewAlbumsAmount] = useState([]);
  const [n, setN] = useState(null);
  const [error, setError] = useState("null");

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

  const ValidateInput = useCallback((value) => {
      if (value === Number(value) && value > 0 && value <= albums.length) {
        return value;
      } else {
        setError(
          `Wrong value! Please enter the number from 1 to ${albums.length}`
        );
        return null;
      }
    }, [albums.length]);

  const handleChange = useCallback((event) => {
    event.preventDefault();

    const validatedValue = ValidateInput(event.target[0].value);
    setNewAlbumsAmount(validatedValue);
  }, [ValidateInput, setNewAlbumsAmount]);

  return (
    <DataContextFunc.Provider
      value={{ newAlbumsAmount, albums, n, handleChange }}
    >
      {props.children}
    </DataContextFunc.Provider>
  );
};

// const handleChange = ({ albums: newAlbumsAmount, n }) => {
//   setNewAlbumsAmount(newAlbumsAmount.slice(0, n));
//   setN(n);
// };

// useEffect(() => {
//   handleChange({ albums, n });
// }, [albums, n]);
