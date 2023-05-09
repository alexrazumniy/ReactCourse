import { useSelector } from "react-redux";
import Film from "./Film";

const MyFilms = () => {
  const films = useSelector(state => state.films.films)

  if (!films.length) {
    return <div>Пока что ничего не хочу смотреть :(</div>;
  }

  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default MyFilms
