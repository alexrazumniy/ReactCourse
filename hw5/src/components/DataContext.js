import { useEffect, useState, createContext } from "react";

export const CardsDataContext = createContext();

export const DataContext = (props) => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myCardData, setMyCardData] = useState([]);

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
  console.log("user_name", user_name);
  console.log("data", data);

  const addMyCard = (myCard) => {
    setCardData((prev) => [...prev, myCard]);
    console.log(myCard);
  };

  return (
    <CardsDataContext.Provider value={{ cardData, loading, error, addMyCard }}>
      {props.children}
    </CardsDataContext.Provider>
  );
};
