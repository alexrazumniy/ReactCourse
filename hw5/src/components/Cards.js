import { Card } from "./Card";
// import { useFetch } from "./useFetch";
// const CARDS_BASE_URL = "my.api.mockaroo.com/cards/123.json?key=778301b0";

export const Cards = () => {
  // const { cardData: user_name, data, loading, error } = useFetch(CARDS_BASE_URL);
  // console.log(data, user_name);
  return (
    <div>
      {/* {loading && <div>Loading...</div>}
      {error && !loading && <div>Error: {error}</div>}
      {!error &&
        !loading &&
        data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            user_name={user_name}
            numbers={item.numbers}
            expiry_date={item.expiry_date}
            cvv={item.cvv}
            type={item.type}
          />
        ))} */}
    </div>
  );
};
