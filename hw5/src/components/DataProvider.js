import { useEffect, useState, createContext } from "react";

export const DataContextFunc = createContext();

const DataProviderFunc = (props) => {
  const [data, setData] = useState([]);
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
    console.log("Данные с сервера:", data);
  }, []);

  return (
    <DataContextFunc.Provider value={{ data }}>
      {props.children}

      <div>
        <h1>Cards Data</h1>
      </div>
    </DataContextFunc.Provider>
  );
};

export default DataProviderFunc;
