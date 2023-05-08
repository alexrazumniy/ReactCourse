import Form

const Task2 = () => {
  return (
    <section className="task_container">
      <h2>TASK #2 Working with Redux</h2>
      <div className="row">
        <h3>Что я хочу посмотреть?</h3>
        <Form />
      </div>
      <div className="col">
        <h3>Мой список фильмов к просмотру:</h3>
        <MyFilms />
      </div>
      <div className="col">
        <h3>Что интересного в CinemaCity:</h3>
        <CinemaFilms />
      </div>
    </section>
  );
};

export default Task2;
