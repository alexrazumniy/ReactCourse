import { useEffect, useState, createContext } from "react";

export const CardsDataContext = createContext();

export const DataContext = (props) => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [newCard, setNewCard] = useState(null);

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

  console.log(cardData);

  const addCard = (card) => {
    setCardData((prev) => [...prev, card]);
    console.log(card);
  };

  return (
    <CardsDataContext.Provider value={{ cardData, loading, error, addCard }}>
      {props.children}
    </CardsDataContext.Provider>
  );
};
