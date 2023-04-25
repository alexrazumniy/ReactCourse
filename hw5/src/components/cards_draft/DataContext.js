import React, { useEffect, useState, createContext } from "react";

export const CardsDataContext = createContext();

export const DataContextFunc = (props) => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://my.api.mockaroo.com/cards/123.json?key=778301b0")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error({ message: "Something went wrong..." });
      })
      .then((json) => setCardData(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const { user_name, data } = cardData;
  console.log("cardData:", cardData);
  console.log("user_name:", data);
  console.log("data:", data);

  return (
    <CardsDataContext.Provider value={{ cardData, loading, error }}>
      {props.children}
    </CardsDataContext.Provider>
  );
};