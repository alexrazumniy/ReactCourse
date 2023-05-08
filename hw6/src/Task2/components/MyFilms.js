import Film from "./Film";

const MyFilms = ({ films }) => {
  if (!films.length) {
    return <div>Фильмов пока что нет :(</div>;
  }

  return (
    <div>
      {films.map((film) => (
        <Film key={film} film={film} />
      ))}
    </div>
  );
};

export default MyFilms;
