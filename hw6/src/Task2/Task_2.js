import Form from "./components/Form";
import MyFilms from "./components/MyFilms";
import CinemaFilms from "./components/CinemaFilms";
import { useState } from "react";

const Task2 = () => {
  const [films, setFilms] = useState([1, 2, 3]);

  const addNewFilm = (film) => {
    setFilms([...films, film])
  }

  return (
    <div>
      <div className="task_container">
        <h2>TASK #2 Working with Redux</h2>
        <h3 className="themetitle">Что я хочу посмотреть?</h3>
        <div className="row">
          <Form addNewFilm={addNewFilm}/>
        </div>
        <div className="row">
          <div className="col">
            <h3>Мой список фильмов к просмотру:</h3>
            <MyFilms films={films} />
          </div>
          <div className="col">
            <h3>Что интересного в CinemaCity:</h3>
            <CinemaFilms films={films} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
