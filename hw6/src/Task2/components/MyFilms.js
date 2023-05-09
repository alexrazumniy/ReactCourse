import { connect } from "react-redux";
import Film from "./Film";

const MyFilms = ({films}) => {
  if (!films.length) {
    return <div>Фильмов пока что нет :(</div>;
  }

  console.log(films);

  return (
    <div>
      {films.map((film) => (
        <Film key={film} film={film} />
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
