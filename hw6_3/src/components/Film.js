const Film = ({ film }) => {
  return (
    <div className="film-info">
      <p className="film-title">{film.film}</p>
    </div>
  );
};

export default Film;
