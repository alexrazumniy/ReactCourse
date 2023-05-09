const FilmCard = ({ film }) => {
    return (
      <div className="film-info">
        <p className="film-title">{film.title}</p>
        <p className="film-time"> - {film.day} {film.time}</p>
      </div>
    );
  };
  
  export default FilmCard;
  