import Film from "./Film";

const CinemaFilms = ({ films }) => {
  if (!films.length) {
    return <div>Фильмов пока что нет :(</div>;
  }
  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default CinemaFilms;
