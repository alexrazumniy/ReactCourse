import { useFormik } from "formik";
import * as Yup from "yup";
import { createFilm } from "../redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues: {
      film: "",
    },

    validationSchema: Yup.object({
      film: Yup.string().required("Поле не может быть пустым!"),
    }),

    onSubmit: ({ film }) => {
      const newFilm = { film, id: Date.now().toString() };
      dispatch(createFilm(newFilm));

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
      />
      {errors.film ? <p className="errormsg">{errors.film}</p> : null}

      <button className="button" type="submit">
        Добавить фильм
      </button>
    </form>
  );
};

export default Form;
