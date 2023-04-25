import { useEffect, useState } from "react";

// export const useFetch = (url) => {
  const [cardData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error({ message: "Something went wrong..." });
      })
      .then((json) => setData(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  const { user_name, data } = cardData;
  console.log("cardData:", cardData);
  console.log("user_name:", user_name);
  console.log("data:", data);

  return { cardData, loading, error};
// };
