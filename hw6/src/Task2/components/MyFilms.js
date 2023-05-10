import { connect } from "react-redux";
import Film from "./Film";

const MyFilms = (films) => {
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

const mapStateToProps = (state) => {
  return {
    films: state.films.films,
  };
};

export default connect(mapStateToProps, null)(MyFilms);
