import { useContext, useState } from "react";
import { Card } from "./Card";
import { CardsDataContext } from "./DataContext";

export const CardsList = () => {
  const { cardData, loading, error } = useContext(CardsDataContext);
  const { user_name, data } = cardData;

  return (
    <>
      {loading && (
        <p>
          <b>Loading...</b>
        </p>
      )}
      {error && !loading && (
        <p>
          <b>Error: {error}!</b>
          <br />
          Something went wrong...
        </p>
      )}
      {!error &&
        !loading &&
        data?.map(({ id, card, statistic }) => (
          <Card
            key={id}
            cardOwner={user_name}
            cardNumber={card.numbers}
            cardType={card.type}
            expiryDate={card.expiry_date}
            cvvCode={card.cvv}
            cardStatistic={statistic}
          />
        ))}
    </>
  );
};
