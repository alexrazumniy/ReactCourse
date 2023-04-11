import { useEffect, useState } from "react";

export const DataMaker = ({ url, renderDataUrl }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error({ message: "Something went wrong..." });
      })
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message));
    }, [url]);

  return <div>{renderDataUrl(posts, error)}</div>; // Как прокидывать ошибку?
};
