import FilmCard from "./FilmCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../redux/reducers/fetchFilms";

const CinemaFilms = () => {
  const { fetchedFilms: films, isLoading, error } = useSelector(
    (state) => state.films
  );
  const dispatch = useDispatch();

  if (isLoading) return <p>Загрузка фильмов...</p>;

  if (error) return <p>Ошибка: {error}</p>;

  if (!films.length) {
    return (
      <div>
        <p>Вы еще не загрузили расписание :(</p>
        <button className="button" onClick={() => dispatch(fetchFilms())}>
          Загрузить расписание
        </button>
      </div>
    );
  }

  return (
    <div>
      {films && films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
};

export default CinemaFilms;
