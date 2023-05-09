import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import { createFilm } from "../redux/actions";

const Form = () => {
  const [films, setFilms] = useState([]);
  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: {
      film: "",
    },

    validationSchema: Yup.object({
      film: Yup.string().required("Поле не может быть пустым!"),
    }),

    onSubmit: ({ film }) => {
      const newFilm = { film, id: Date.now().toString() };
      createFilm(newFilm);
      console.log(newFilm);

      resetForm();
    },
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form-header">Название фильма</h3>
      <input
        className="input"
        type="text"
        name="film"
        placeholder="Введите название фильма"
        value={values.film}
        onChange={handleChange}
        createFilm={createFilm}
      />
      {errors.film ? <p className="errormsg">{errors.film}</p> : null}

      <button className="submit-btn" type="submit">
        Добавить фильм
      </button>
    </form>
  );
};

export default Form;
