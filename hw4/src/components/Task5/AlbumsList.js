import { Album } from "./Album";
import { useFetch } from "./useFetch";
const ALBUMS_BASE_URL =
  "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=5";

export const Albums = () => {
  const { data: albums, loading, error } = useFetch(ALBUMS_BASE_URL);
  return (
    <div>
      {loading && <div>Loader...</div>}
      {(error && !loading) && <div>Error: {error}</div>}
      {(!error && !loading) && albums?.map((album) => (
        <Album {...album} key={album.title} thumbnailUrl={album.thumbnailUrl}/>
      ))}
    </div>
  );
};
