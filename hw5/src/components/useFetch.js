import { useEffect, useState } from "react";

const DataProviderFunc = () => {
  const [cardData, setData] = useState([]);
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
      .then((json) => setData(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const { user_name, data } = cardData;
  console.log("cardData:", cardData);
  console.log("data:", data);

  return (
    <div>
      <h2>{user_name}</h2>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h2>ID: {item.id}</h2>
          <p>Карта: {JSON.stringify(item.card)}</p>
          <p>Статистика: {JSON.stringify(item.statistic)}</p>
        </div>
      ))} */}
      1111111ggggss;;flluuddd
    </div>
  );
};

export default DataProviderFunc;
