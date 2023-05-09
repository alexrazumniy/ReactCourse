import { useDispatch, useSelector } from "react-redux";
import FilmCard from "./FilmCards";
import { fetchFilms } from "../redux/actions";

const CinemaFilms = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.fetchedFilms);

  const loading = useSelector((state) => state.app.loading);

  if(loading) {
    return <p>Загрузка фильмов...</p>
  }

  if (!films.length) {
    return (
      <div>
        <p>Вы еще не загрузили расписание :(</p>
        <button className="button" onClick={() => dispatch(fetchFilms())}>Загрузить</button>
      </div>
    );
  }

  return (
    <div>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default CinemaFilms;
